import React from "react";
export const Event = ({ dispatch, event }) => {
  const { id, title, body } = event;
  const handleClickButton = () => {
    dispatch({ type: "DELETE_EVENT", id });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};
