import { Grid } from "@mui/material";
import React from "react";
import { SignupForm } from "./SignupForm";
// import signupImage from "../../public/signupimg.webp";

const Signup: React.FunctionComponent = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} lg={6}>
          <div className="signup-page">
            <div>
              <img
                src="/signupimg.webp"
                alt="signupImage"
                height="250px"
                width="400px"
              />
            </div>
            <div className="signup-content">
              <h1>Welcome to Signup Page</h1>
              <p>
                Sign up to get access to free content for your entrance exam
                <br />
                preparation.
              </p>
            </div>
          </div>
        </Grid>
        <Grid xs={12} md={6} lg={6}>
          <SignupForm />
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
