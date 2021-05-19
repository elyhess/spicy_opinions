import './App.css';
import {Fragment, useState} from "react";
import NavComponent from "./components/Nav";
import MainContent from "./components/MainContent"

function App() {
  const [ body, setBody] = useState("");
  const [ title, setTitle] = useState("");

  return (
      <Fragment>
        <NavComponent />
        <MainContent />
      </Fragment>

  );
}

export default App;
