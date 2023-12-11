import React from "react";
import { Grid, Paper } from "@mui/material";
import programs from "../assets/images/rectangle-2041@2x.png";
import programs1 from "../assets/images/rectangle-20411@2x.png";
import programs2 from "../assets/images/rectangle-20412@2x.png";

const OurPrograms = () => {
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
      <div className="whywearebest">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              style={{
                textAlign: "center",
                padding: "20px 20px",
                borderRadius: "15px",
                // height: "400px",
              }}
            >
              <img
                src={programs}
                alt="programs"
                // height="260px"
                // width="367px"
                // style={{ marginLeft: "-20px", marginTop: "-20px" }}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <h2>English Programs</h2>
              <p style={{ fontWeight: "400" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley......
              </p>
              <button className="programsbtn">READ MORE</button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              style={{
                textAlign: "center",
                padding: "20px 20px",
                borderRadius: "15px",
                // height: "400px",
              }}
            >
              <img
                src={programs1}
                alt="programs"
                style={{ maxWidth: "100%", height: "auto" }}
                // height="260px"
                // width="367px"
                // style={{ marginLeft: "-20px", marginTop: "-20px" }}
              />
              <h2>English Programs</h2>
              <p style={{ fontWeight: "400" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley......
              </p>
              <button className="programsbtn">READ MORE</button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              style={{
                textAlign: "center",
                padding: "20px 20px",
                borderRadius: "15px",
                // height: "400px",
              }}
            >
              <img
                src={programs2}
                alt="programs"
                style={{ maxWidth: "100%", height: "auto" }}
                // height="260px"
                // width="367px"
                // style={{ marginLeft: "-20px", marginTop: "-20px" }}
              />
              <h2>English Programs</h2>
              <p style={{ fontWeight: "400" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley......
              </p>
              <button className="programsbtn">READ MORE</button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default OurPrograms;
