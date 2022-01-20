const Urls = {
  routes: {
    root: "/",
    app: "/app",
    logShot: "/app/log-shot",
    account: "/account",
    shotHistory: "/app/shots/:club",
  },
  api: {
    shots: "/icaddy/shots",
    shot: "/icaddy/shots/:id",
    shotAggregate: "/icaddy/shots/aggregate",
    account: "/account",
  },
};

export default Urls;
