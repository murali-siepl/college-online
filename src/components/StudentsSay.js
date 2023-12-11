import { Grid } from "@mui/material";
import React from "react";

const StudentsSay = () => {
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
              <span style={{ color: "#525fe1" }}>What</span> our students Say
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
    </>
  );
};

export default StudentsSay;
