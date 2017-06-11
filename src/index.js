import React from "react";
import { render } from "react-dom";
//import App from "./App";
import DevExtremeApp from "./DevExtremeApp";

//render(<App/>, document.getElementById("root")); // about 144k minified prod bundle
render(<DevExtremeApp/>, document.getElementById("root")); // about 1.5m minified prod bundle
