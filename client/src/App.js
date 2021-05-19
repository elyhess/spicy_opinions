import './App.css';
import {Fragment} from "react";
import NavComponent from "./components/Nav";
import MainContent from "./components/MainContent"

function App() {
  return (
      <Fragment>
        <NavComponent />
        <MainContent />
      </Fragment>

  );
}

export default App;
