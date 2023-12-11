import React from "react";
import { Grid } from "@mui/material";

const Courses = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <div className="courses">
            <div className="totalCourses">
              <h1>150+</h1>
              <h3>Total Courses</h3>
            </div>
            <div className="totalCourses">
              <h1>250</h1>
              <h3>Total Instructor</h3>
            </div>
            <div className="totalCourses">
              <h1>35k+</h1>
              <h3>Total Students</h3>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Courses;
