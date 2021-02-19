import React, { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import leftArrow from "../images/left-arrow.svg";
import { actionTypes } from "../actions/types";
import { ISignup } from "../storeTypes";
import SideHeader from "../components/SideHeader";
import { Istore } from "../configureStore";

interface IProps {
  postSignup: any;
  success: string;
  errors: string;
  history: any;
}

const Signup: React.FC<IProps> = ({ postSignup, success, errors, history }) => {
  const [userImage, setUserImage] = useState<string>("");
  const [imgFile, setImageFile] = useState<Blob>();
  const [serverErr, setServerErr] = useState<string>("");
  const initialValues: ISignup = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    cPassword: "",
  };

  const signupSchema = Yup.object().shape({
    fName: Yup.string()
      .min(4, "Your first name must be at least 4 characters")
      .max(15, "Your first name must be at most 15 characters")
      .required("You must enter your first name"),
    lName: Yup.string()
      .min(4, "Your last name must be at least 4 characters")
      .max(15, "Your last name must be at most 15 characters")
      .required("You must enter your last name"),
    email: Yup.string()
      .email("You must type valid email")
      .required("You must type your email"),
    password: Yup.string()
      .min(8, "Your password must be at least 8 characters")
      .max(50, "Your password must be at most 50 characters")
      .required("You must enter your password"),
    cPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords don't match")
      .required("You must re-enter your password"),
  });

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUserImage(e.target?.result?.toString() || "");
    };
    if (e.currentTarget.files) {
      reader.readAsDataURL(e.currentTarget.files[0]);
      setImageFile(e.currentTarget.files[0]);
    }
  };

  useEffect(() => {
    if (success) history.push("/login");
    if (errors) setServerErr(errors);
  }, [success, errors, history]);

  return (
    <div className="Register">
      <SideHeader active="signup" />
      <main>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            setServerErr("");
            postSignup({ ...values, userImage: imgFile });
            actions.setSubmitting(false);
          }}
          validationSchema={signupSchema}
        >
          {({ errors, touched }) => (
            <Form noValidate>
              <h2>SIGN UP</h2>
              <div className="upload_img">
                <input
                  type="file"
                  name="image"
                  id="image"
                  hidden
                  onChange={handleChangeImage}
                  accept="image/*"
                />
                <span>
                  {userImage && <img src={userImage} alt="User avatar" />}
                </span>
                <label htmlFor="image">+</label>
              </div>
              <div className="row-input">
                <Field
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="First Name"
                />
                <Field
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Last Name"
                />
              </div>
              <Field type="email" name="email" id="email" placeholder="Email" />
              <div className="row-input">
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <Field
                  type="password"
                  name="cPassword"
                  id="cPassword"
                  placeholder="Confirm Password"
                />
              </div>
              {touched.fName && errors.fName && (
                <p className="error">- {errors.fName}</p>
              )}
              {touched.lName && errors.lName && (
                <p className="error">- {errors.lName}</p>
              )}
              {touched.email && errors.email && (
                <p className="error">- {errors.email}</p>
              )}
              {touched.password && errors.password && (
                <p className="error">- {errors.password}</p>
              )}
              {touched.cPassword && errors.cPassword && (
                <p className="error">- {errors.cPassword}</p>
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
  success: state.credentials.success,
  errors: state.credentials.errors,
});

const mapDispatchToProps = (dispatch: any) => ({
  postSignup: (data: ISignup) =>
    dispatch({ type: actionTypes.SIGNUP_USER_SAGA, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
