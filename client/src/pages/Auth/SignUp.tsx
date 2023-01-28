import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

import signInPageStyle from "./SignIn.module.scss";
import { UserRegistrationProps, userRegistration } from "../../services/API";

const SignUp = () => {
  /****************************************/
  /*********User Registration *************/
  /****************************************/
  const [userTeamName, setUserTeamName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const onSubmitUserRegistration = async (e: any) => {
    e.preventDefault();

    try {
      const payload: UserRegistrationProps = {
        teamname: userTeamName,
        email: userEmail,
        password: userPassword,
      };

      const res = await userRegistration(payload);

      if (res.data) {
        toast.success("You have Signed Up Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });

        setUserTeamName("");
        setUserEmail("");
        setUserPassword("");
      }
    } catch (error: any) {
      toast.error(error.response && error.response.data.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="container">
      <div className={signInPageStyle.signInContainer}>
        <div className={signInPageStyle.signInFormDesign}>
          <h5>Sign Up</h5>

          <div className={signInPageStyle.inputFormArea}>
            <div className="form-group">
              <input
                type="text"
                name="Name"
                className={signInPageStyle.formControlEmail}
                placeholder="Your Team Name"
                value={userTeamName}
                onChange={(e) => setUserTeamName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Name"
                className={signInPageStyle.formControlEmail}
                placeholder="Your E-mail *"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                className={signInPageStyle.formControlPassword}
                placeholder="Your Password*"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>

            <button
              className={signInPageStyle.signInButton}
              onClick={(e) => onSubmitUserRegistration(e)}
            >
              Sign Up
            </button>

            <span className={signInPageStyle.signUpHereOption}>
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>Already have an account? Sign In here</p>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
