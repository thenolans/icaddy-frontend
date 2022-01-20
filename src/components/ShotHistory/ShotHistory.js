import cx from "classnames";
import dayjs from "dayjs";
import React from "react";
import { useQuery } from "react-query";

import Container from "../Container";
import Layout from "../Layout";
import Loader from "../Loader";
import useHttp from "../../hooks/useHttp";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { club } = useParams();
  const { getShotHistory, deleteShot: deleteShotApi } = useHttp();
  const {
    data: historyData,
    isLoading,
    refetch,
  } = useQuery(["categories"], () => getShotHistory(club), {
    retry: false,
    refetchOnWindowFocus: false,
  });
  const history = historyData?.data || [];

  async function deleteShot(shotId) {
    if (window.confirm("Are you sure you want to delete this shot?")) {
      await deleteShotApi(shotId);
      refetch();
    }
  }

  return (
    <Layout>
      <Container>
        {(() => {
          if (isLoading) {
            return (
              <div className="d-flex justify-content-center">
                <Loader />
              </div>
            );
          } else if (!history.length) {
            return <div>No results found</div>;
          } else {
            return history.map((shot, index) => {
              return (
                <div
                  className={cx(
                    "d-flex align-items-center justify-content-between text-decoration-none",
                    {
                      "border-top": index > 0,
                      "py-3": index > 0 && index < history.length - 1,
                      "pb-3": index === 0,
                      "pt-3": index === history.length - 1,
                    }
                  )}
                  key={shot._id}
                >
                  <div>
                    <div className="text-dark font-weight-bold">
                      {shot.distance} yards
                    </div>
                    <div className="text-muted">
                      {dayjs(shot.createdAt).format("MMM DD, YYYY @ h:mma")}
                    </div>
                  </div>
                  <button
                    className="btn btn-link text-danger"
                    aria-label="Delete shot"
                    onClick={() => deleteShot(shot._id)}
                  >
                    <i className="fa fa-trash" />
                  </button>
                </div>
              );
            });
          }
        })()}
      </Container>
    </Layout>
  );
};

export default Dashboard;
