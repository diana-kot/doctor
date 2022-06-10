import React from "react";
import { useSelector, useDispatch } from "react-redux";

import RecordPerson from "../RecordPerson";
import { fetchVisits } from "@store/VisitsDoctors/actions";

import { Spin, Space } from "antd";

import "./Records.scss";

const Records = ({ totalCountRecords}) => {
  const dispatch = useDispatch();
  const visits = useSelector(({ visits }) => visits.visits);
  const isLoaded = useSelector(({ visits }) => visits.isLoaded);

  React.useEffect(() => {
    dispatch(fetchVisits());
  }, []);

  return (
    <>
      {isLoaded ? (
        <>
          {visits &&
            visits
              .slice(0, totalCountRecords)
              .map((obj) => <RecordPerson key={obj.id} {...obj} />)}
        </>
      ) : (
        <div className="records__spin">
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      )}
    </>
  );
};

export default Records;
