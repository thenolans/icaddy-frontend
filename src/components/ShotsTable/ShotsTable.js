import cx from "classnames";

import iron from "../../images/iron.svg";

export default function ShotsTable({ shots }) {
  return (
    <>
      {shots?.map((shot, index) => {
        return (
          <div
            className={cx(
              "d-flex align-items-center justify-content-between font-weight-bold",
              {
                "border-top": index > 0,
                "py-3": index > 0 && index < shots.length - 1,
                "pb-3": index === 0,
                "pt-3": index === shots.length - 1,
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
      })}
    </>
  );
}
