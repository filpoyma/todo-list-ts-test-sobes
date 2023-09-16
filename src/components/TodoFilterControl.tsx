import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterStatus, IState } from "../store/Interfaces";
import { setFilterStatus } from "../store/actions";

const TodoFilterControl: React.FC = () => {
  const filterStatus = useSelector((state: IState) => state.filterStatus);
  const dispatch = useDispatch();
  const handleClick = (status: FilterStatus) => {
    dispatch(setFilterStatus(status));
  };

  return (
    <div className="control-btn group">
      <button
        data-testid="all-button"
        className={filterStatus === FilterStatus.all ? "btn active" : "btn"}
        onClick={() => handleClick(FilterStatus.all)}
      >
        All
      </button>
      <button
        data-testid="active-button"
        className={filterStatus === FilterStatus.active ? "btn active" : "btn"}
        onClick={() => handleClick(FilterStatus.active)}
      >
        Active
      </button>
      <button
        data-testid="completed-button"
        className={
          filterStatus === FilterStatus.complete ? "btn active" : "btn"
        }
        onClick={() => handleClick(FilterStatus.complete)}
      >
        Completed
      </button>
    </div>
  );
};

export default React.memo(TodoFilterControl);
