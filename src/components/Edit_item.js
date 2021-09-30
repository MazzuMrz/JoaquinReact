import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'


const EditItem = () => {
    return (
        <div>
            <div className="container">
    <div className="px-5 my-5 border">
      <div className="mt-5 mx-3">
        <h1>Editing Task "Buy Grocery"</h1>
      </div>
      <div className="col-6 col-xs-10">
        <input
          className="form-control my-4 mx-sm-3"
          type="text"
          placeholder="Buy Groceries"
        />
        <div className=" mb-5 ">
          <Button className="btn btn-success col-xs-6  mx-3">Save</Button>
          <Link to='/folder/tasks'><Button className="btn btn-danger col-xs-6">Cancel</Button></Link>
          
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default EditItem;
