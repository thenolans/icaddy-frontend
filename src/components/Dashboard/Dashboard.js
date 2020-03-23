import cx from "classnames";
import React from "react";
import { Link } from "react-router-dom";

import "./dashboard.scss";
import Button from "../Button";
import Card from "../Card";
import Container from "../Container";
import GolfFlag from "../../images/golf-flag.svg";
import Heading from "../Heading";
import http from "../../utils/http";
import iron from "../../images/iron.svg";
import Layout from "../Layout";
import Loader from "../Loader";
import useAsyncState from "../../hooks/useAsyncState";

const fetchShotAverages = () => http.get("/shots/aggregate");

const Dashboard = className => {
  const [shotAverages = {}, { isLoading }] = useAsyncState(fetchShotAverages);
  const shots = shotAverages?.data?.data;
  const noShots = !shots?.length && !isLoading;

  const renderContent = () => {
    if (isLoading)
      return (
        <div className="d-flex justify-content-center">
          <Loader />
        </div>
      );
    if (noShots) {
      return (
        <div className="text-center mt-3 p-4 p-md-5">
          <img
            className="img--golf-flag"
            src={GolfFlag}
            alt="golf flag and ball"
          />
          <div className="row justify-content-center my-4">
            <div className="col-auto col-md-9">
              <Heading as="h3" className="mb-3">
                You haven't logged any shots, yet.
              </Heading>
            </div>
          </div>
          <Button as={Link} to="/log-shot">
            Log Shot
          </Button>
        </div>
      );
    }
    return shots?.map((shot, index) => {
      return (
        <div
          className={cx(
            "d-flex align-items-center justify-content-between p-4 font-weight-bold",
            {
              "border-top": index > 0
            }
          )}
          key={shot._id}
        >
          <div className="d-flex align-items-center">
            <img alt="golf club" className="img--iron mr-3" src={iron} />
            <span className="text-nowrap">{shot.long_name}</span>
          </div>
          <div>
            {shot.average}
            <span className="dashboard__units"> yds</span>
          </div>
        </div>
      );
    });
  };

  return (
    <Layout>
      <div className="pb-4 mb-5">
        <Card>{renderContent()}</Card>
      </div>
      <Container className="pb-4 fixed-bottom">
        {!noShots && (
          <Button as={Link} to="/log-shot" fluid shadow>
            Log shot
          </Button>
        )}
      </Container>
    </Layout>
  );
};

export default Dashboard;
