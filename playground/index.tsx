import Button from "../src/components/Button/Button";
import Checkbox from "../src/components/Checkbox/Checkbox";
import Modal from "../src/components/Modal/Modal";
import Select from "../src/components/Select/Select";
import Switch from "../src/components/Switch/Switch";
import TextField from "../src/components/TextField/TextField";
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div>
    <Button variant="contained" color="secondary">
      First button
    </Button>
    <Button variant="outlined">Second button</Button>
    <Button variant="text">Third button</Button>
    <button>Simple Button</button>
    <TextField></TextField>
    <Checkbox></Checkbox>
    <input type="checkbox"></input>
    <Select></Select>
    <select></select>
    <Switch></Switch>
    <Modal></Modal>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
