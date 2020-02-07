import React from "react";
import { TextField } from "./components/TextField";

import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <TextField text='hello' Person={{ firstName: "", lastName: "" }} />
    </div>
  );
};

export default App;
