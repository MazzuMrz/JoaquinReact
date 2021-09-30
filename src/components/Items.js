import React from "react";
import { Link } from "react-router-dom";
import { Button, Table, Card } from "reactstrap";

const Items = () => {
  return (
    <div>
      <div className=" py-4 mx-5 ">
        <div className="container mx-auto ">
          <div>
            <h1>To-Do List</h1>
          </div>
          <Card className="container mx-auto py-auto border ">
            <Table className="text-center">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tasks</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Buy Groceries</td>
                  <td>
                    <div>
                      <Link to="/folder/tasks">
                        <Button className="btn btn-warning mx-5">
                          View Items
                        </Button>
                      </Link>
                      <Button className="btn btn-danger">Remove</Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className=" d-flex flex-sm-row flex-column mx-5 ">
              <input
                className="form-control my-2  mx-sm-3"
                type="text"
                placeholder="New Task"
              />
              <Button className="btn btn-success my-2 col-xs-12 mx-sm-3 ">
                Add
              </Button>
            </div>
          </Card>
        </div>
        <Link to="/folder">
          <Button className="mt-3 btn-danger">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default Items;
