import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Formik, Field } from "formik";
import { connect } from "react-redux";
import { actionTypes } from "../actions/types";
import { ILogin } from "../storeTypes";
import { Istore } from "../configureStore";
import leftArrow from "../images/left-arrow.svg";
import SideHeader from "../components/SideHeader";

interface IProps {
  postLogin: any;
  token: string;
  errors: string;
  history: any;
}

const Login: React.FC<IProps> = ({ postLogin, token, errors, history }) => {
  const [serverErr, setServerErr] = useState<string>("");
  const initialValues: ILogin = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("You must type valid email")
      .required("You must type your email"),
    password: Yup.string().required("You must enter your password"),
  });

  useEffect(() => {
    if (token) history.push("/");
    if (errors) setServerErr(errors);
  }, [token, errors, history]);

  return (
    <div className="Register">
      <SideHeader active="login" />
      <main>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            setServerErr("");
            postLogin({ ...values });
            actions.setSubmitting(false);
          }}
          validationSchema={loginSchema}
        >
          {({ errors, touched }) => (
            <Form noValidate>
              <h2>Login</h2>
              <Field type="email" name="email" id="email" placeholder="Email" />
              <div>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              {touched.email && errors.email && (
                <p className="error">- {errors.email}</p>
              )}
              {touched.password && errors.password && (
                <p className="error">- {errors.password}</p>
              )}
              {serverErr && <p className="error">- {serverErr}</p>}
              <button type="submit">
                <img src={leftArrow} alt="Left arrow 1" />
                <img src={leftArrow} alt="Left arrow 2" />
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

const mapStateToProps = (state: Istore) => ({
  token: state.credentials.token,
  errors: state.credentials.errors,
});

const mapDispatchToProps = (dispatch: any) => ({
  postLogin: (data: ILogin) =>
    dispatch({ type: actionTypes.LOGIN_USER_SAGA, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
