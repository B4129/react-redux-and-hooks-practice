import React, { useCallback, useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { events } from "./reducers";
import { EventForm } from "./components/EventForm";
import { Events } from "./components/Events";

const App = () => {
  const [state, dispatch] = useReducer(events, []);

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
