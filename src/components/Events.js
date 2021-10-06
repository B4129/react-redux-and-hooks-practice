import { Event } from "./Event";
import React from "react";
export const Events = (props) => {
  const { dispatch, state } = props;
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table^hover">
        <thead>
          タイトル
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </>
  );
};
