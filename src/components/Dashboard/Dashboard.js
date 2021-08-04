import cx from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import "./dashboard.scss";
import Button from "../Button";
import Container from "../Container";
import GolfFlag from "../../images/golf-flag.svg";
import Heading from "../Heading";
import Layout from "../Layout";
import Loader from "../Loader";
import Urls from "../../constants/urls";
import useHttp from "../../hooks/useHttp";
import ShotsTable from "../ShotsTable";

const Dashboard = () => {
  const { getShotAverages } = useHttp();
  const { data: shots, isLoading } = useQuery(
    ["categories"],
    () => getShotAverages(),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  const hasShotsLogged = !!shots?.length && !isLoading;

  const renderContent = () => {
    if (isLoading)
      return (
        <div className="d-flex justify-content-center">
          <Loader />
        </div>
      );
    if (!hasShotsLogged) {
      return (
        <div className="text-center mt-3 py-3">
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
          <Button as={Link} to={Urls.routes.logShot}>
            Log Shot
          </Button>
        </div>
      );
    }
    return <ShotsTable shots={shots} />;
  };

  return (
    <Layout>
      {renderContent()}
      <Container className="pb-4 fixed-bottom">
        {hasShotsLogged && (
          <Button as={Link} to={Urls.routes.logShot} fluid shadow>
            Log shot
          </Button>
        )}
      </Container>
    </Layout>
  );
};

export default Dashboard;
