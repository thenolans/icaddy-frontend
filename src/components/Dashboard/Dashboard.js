import React from "react";

import http from "../../utils/http";
import useAsyncState from "../../hooks/useAsyncState";

const fetchShotAverages = () => http.get("/shots/aggregate");

const Dashboard = () => {
  const [shotAverages] = useAsyncState(fetchShotAverages);
  console.log(shotAverages);
  return <div>Dashboard</div>;
};

export default Dashboard;
