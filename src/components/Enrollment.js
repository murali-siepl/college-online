import React from "react";
import { Grid, Paper } from "@mui/material";
import enrollment from "../assets/images/friendlyconfidentwomanwritingherorganizerisolatedwhitewall-1@2x.png";

const Enrollment = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={6}>
          <img
            src={enrollment}
            alt="enrollment"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <div className="enrollment">
            <h1 style={{ fontSize: "50px" }}>Effortless Enrollment</h1>
            <p style={{ fontSize: "18px", marginTop: "-20px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry....
            </p>
            <Paper style={{ borderRadius: "10px", marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 30px",
                }}
              >
                <div style={{ display: "flex", gap: "30px" }}>
                  <h1>01</h1>
                  <span
                    style={{ borderRight: "1px solid gray", fontSize: "36px" }}
                  ></span>
                </div>
                <h3 style={{ marginLeft: "50px", fontSize: "22px" }}>
                  choose a Program
                </h3>
              </div>
            </Paper>
            <Paper style={{ borderRadius: "10px", marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 30px",
                }}
              >
                <div style={{ display: "flex", gap: "30px" }}>
                  <h1>02</h1>
                  <span
                    style={{ borderRight: "1px solid gray", fontSize: "36px" }}
                  ></span>
                </div>
                <h3 style={{ marginLeft: "50px", fontSize: "22px" }}>
                  Enroll and Submit Documents{" "}
                </h3>
              </div>
            </Paper>
            <Paper style={{ borderRadius: "10px", marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 30px",
                }}
              >
                <div style={{ display: "flex", gap: "30px" }}>
                  <h1>03</h1>
                  <span
                    style={{ borderRight: "1px solid gray", fontSize: "36px" }}
                  ></span>
                </div>
                <h3 style={{ marginLeft: "50px", fontSize: "22px" }}>
                  Choose a Date and Time{" "}
                </h3>
              </div>
            </Paper>
            <Paper style={{ borderRadius: "10px", marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 30px",
                }}
              >
                <div style={{ display: "flex", gap: "30px" }}>
                  <h1>04</h1>
                  <span
                    style={{ borderRight: "1px solid gray", fontSize: "36px" }}
                  ></span>
                </div>
                <h3 style={{ marginLeft: "50px", fontSize: "22px" }}>
                  pick an Instructor
                </h3>
              </div>
            </Paper>
            <Paper style={{ borderRadius: "10px", marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 30px",
                }}
              >
                <div style={{ display: "flex", gap: "30px" }}>
                  <h1>05</h1>
                  <span
                    style={{ borderRight: "1px solid gray", fontSize: "36px" }}
                  ></span>
                </div>
                <h3 style={{ marginLeft: "50px", fontSize: "22px" }}>
                  Then Start
                </h3>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Enrollment;
