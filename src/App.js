import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav } from "reactstrap";
import EditItem from "./components/Edit_item";
import Folder from "./components/Folder";
import FolderWork from "./components/Folder_work";
import Items from "./components/Items";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <div>

        <Switch> 
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/folder/tasks">
            <Items/>
          </Route>
          <Route path="/folder/tasks/edit">
            <EditItem />
          </Route>
          <Route exact path="/folder">
            <Folder />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}