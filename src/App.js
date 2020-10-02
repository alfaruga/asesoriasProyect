import React from 'react';
import classes from './App.module.scss';
import Homepage from "./containers/Homepage/Homepage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, fas);


function App() {
  return (
    <div className="App">
      <Homepage className={classes.Homepage} />
    </div>
  );
}

export default App;
