import React from "react";
import { Link } from "react-router-dom";
import { Button, Input, Table, Card } from "reactstrap";

const Folder = () => {
  return (
    <div className="container py-5">
      <div>
        <h1>Folders</h1>
      </div>

      <Card className="container">
        <Table className='text-center'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Folders</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Work</td>
              <td>
                <div>
                  <Link to="/folder/tasks">
                    <Button className="btn btn-warning mx-5">View Items</Button>
                  </Link>
                  <Button className="btn btn-danger">Remove</Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className=" d-flex flex-sm-row flex-column  ">
        <Input
          className="form-control my-2  mx-sm-3"
          type="text"
          placeholder="New Folder"
        />
        <Button className="btn btn-success my-2 col-xs-12 mx-sm-3 ">Add</Button>
      </div>
      </Card>
    </div>
  );
};

export default Folder;
