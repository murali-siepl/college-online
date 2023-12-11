import React from "react";
import { Grid } from "@mui/material";
import aboutimage from "../assets/images/rectangle-2040@2x.png";

const AboutCompany = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={12}>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "52px" }}>
              <span style={{ color: "#525fe1" }}>About</span>Company
            </h1>
            <p
              style={{ fontSize: "18px", color: "#333333", fontWeight: "500" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
              <br /> standard dummy text ever since the 1500s.....
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={12}>
          <div style={{ padding: "10px 120px" }} className="aboutcompanyimage">
            <img
              src={aboutimage}
              alt="aboutImage"
              // style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutCompany;
