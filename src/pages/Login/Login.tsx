import React from "react";
import login from "./Login.module.scss";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Col, Form } from "react-bootstrap";
import { AiOutlineEye } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/logo.svg";
import { Button } from "@mui/material";

import axios from 'axios'

export default function Login() {
  const history = useHistory();

  const handleSubmit = async (event : any) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const _sendData = {
      email : data.get('email'),
      password : data.get('password')
    }
    const BASE_URL = process.env.REACT_APP_BASE_URL + '/api/v1/admin/login';
    try {
      const res = await axios.post(BASE_URL, _sendData);
      history.push('/admin/dashboard')
    } catch(err : any) {
      console.log("admin login error = ", err)
    }
  }
  return (
    <section className={login.loginSection}>
      <Container>
        <Col className={`${login.loginBox}`}>
          <img src="/assets/images/utils/just Eat.svg" className={`${login.logo}`} alt="logo" />

          <Form onSubmit={handleSubmit}>
            <Form.Group
              className={`${login.formBox}`}
              controlId="formBasicEmail"
            >
              <Form.Label htmlFor="">Email</Form.Label>
              <Form.Control
                className={`${login.formClass}`}
                type="text"
                placeholder="Email"
                name="email"
                required
              />
            </Form.Group>

            <Form.Group
              className={`${login.formBox}`}
              controlId="formBasicPassword"
            >
              <Form.Label htmlFor="">Password</Form.Label>
              <div className={`position-relative ${login.passwordBox}`}>
                <Form.Control
                  className={`${login.formClass}`}
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
                <div className={`${login.passwordAction}`}>
                  <AiOutlineEye />
                  {/* <AiOutlineEyeInvisible /> */}
                </div>
              </div>
              <Col lg={12} className="text-end">
                <NavLink className={`${login.forogotPassword}`} to="/">
                  Forget password ?
                </NavLink>
              </Col>
              <Col lg={12} className={`${login.remberme}`}>
                <label className={`${login.checkbox}`}>
                  <input type="checkbox" />
                  <span className={`${login.checkmark}`}></span>
                  Remember Me
                </label>
              </Col>
            </Form.Group>
            <div className={`${login.submitBtnRow}`}>
              <Button
                className={`${login.submitBtn}`}
                type="submit"
              >
                Sign In
              </Button>
            </div>
          </Form>
        </Col>
      </Container>
    </section>
  );
}
