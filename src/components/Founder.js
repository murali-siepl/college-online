import React from "react";
import { Grid } from "@mui/material";
import founder from "../assets/images/rectangle-2042@2x.png";

const Founder = () => {
  return (
    <>
      <div className="founder-content">
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12}>
            <div className="founder">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s.........
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12}>
            <div className="founder-img">
              <img src={founder} alt="fonder" height="114px" width="114px" />
              <div style={{ textAlign: "center", marginLeft: "-20px" }}>
                <h2>James Thomas</h2>
                <p style={{ marginTop: "-20px" }}>GERMANY</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Founder;
