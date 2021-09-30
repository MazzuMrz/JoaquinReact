import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, CardTitle, Form, FormGroup, Label, Input, Button, CardFooter } from "reactstrap";

const Login = () => {
  return (
    <div className="container py-5 my-5">
      <Card className=" col-6 mx-auto">
        <CardHeader className='text-center '>
          <CardTitle className="h3">Ingrese su nombre de usuario</CardTitle>
        </CardHeader>
        <CardBody className='mx-5 text-left d-flex justify-content-center'>
          <Form>
            <FormGroup className='mb-5 col-12'>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Ingrese mail"
              />
            </FormGroup>
            <FormGroup className='col-12'>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Ingrese contraseña"
              />
            </FormGroup>
          </Form>     
        </CardBody>
        <CardFooter className='text-center bg-success '> 
            <Link to='/folder'><Button className='py-1 btn-success col-12'>Ingresar</Button></Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
