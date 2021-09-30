import React from "react";
import { Button } from "reactstrap";


const FolderWork = () => {
  return (
    <div>
      <div className=" py-4 mx-5 ">
        <div className="container mx-auto ">
          <nav
            className="h3"
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="folderNew.html">Folders</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Work
              </li>
            </ol>
          </nav>
          <div className="container mx-auto py-auto border ">
            <div className="mb-4">
              <div className="mx-5">
                <div className="form-check mt-5 d-flex flex-row justify-content-between">
                  <div>
                    <input
                      className="form-check-input ml-5"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Prepare weekly report
                    </label>
                  </div>
                  <div>
                    <Button className="btn btn-primary ">Edit</Button>
                  </div>
                </div>

                <div className="form-check mt-5 d-flex flex-row justify-content-between ">
                  <div>
                    <input
                      className="form-check-input ml-5"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Write to candidates
                    </label>
                  </div>
                  <div>
                    <Button className="btn btn-primary ">Edit</Button>
                  </div>
                </div>
              </div>
              <div className=" d-flex flex-sm-row flex-column mx-auto mt-5 ">
                <input
                  className="form-control my-2  mx-sm-3"
                  type="text"
                  placeholder="New Task"
                />
                <Button className="btn btn-success my-2 col-xs-12 mx-sm-3 ">
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolderWork;
