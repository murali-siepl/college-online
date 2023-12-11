import React from "react";
import { Grid, Paper } from "@mui/material";
import digital from "../assets/images/frame2.svg";

const WhyWeare = () => {
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
              <span style={{ color: "#525fe1" }}>Why we are</span> best from
              others?
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
                boxShadow: "0px 0px 40px black",
                borderRadius: "15px",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  backgroundColor: "blueviolet",
                  width: "64px",
                  height: "64px",
                  borderRadius: "15px",
                }}
              >
                <path
                  d="M4.5 27.75V7.5C4.5 5.01472 6.51472 3 9 3H30C30.8284 3 31.5 3.67158 31.5 4.5V31.5C31.5 32.3284 30.8284 33 30 33H9.75C6.8505 33 4.5 30.6495 4.5 27.75ZM28.5 30V25.5H9.75C8.50736 25.5 7.5 26.5074 7.5 27.75C7.5 28.9926 8.50736 30 9.75 30H28.5ZM7.5 23.0052C8.18195 22.6812 8.9448 22.5 9.75 22.5H28.5V6H9C8.17158 6 7.5 6.67158 7.5 7.5V23.0052Z"
                  fill="white"
                />
              </svg>{" "}
              <h2>Digital Platform</h2>
              <p style={{ fontWeight: "400" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.....
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              style={{
                textAlign: "center",
                padding: "20px 20px",
                background: "none",
                borderRadius: "15px",
              }}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  backgroundColor: "yellowgreen",
                  width: "64px",
                  height: "64px",
                  borderRadius: "15px",
                }}
              >
                <path
                  d="M14.9596 27H21.0403C21.2384 25.1976 22.1581 23.7097 23.6514 22.0839C23.8195 21.9009 24.8982 20.7846 25.0261 20.6252C26.2977 19.0396 27 17.0775 27 15C27 10.0294 22.9706 6 18 6C13.0294 6 9 10.0294 9 15C9 17.0765 9.70161 19.0375 10.9719 20.6226C11.1001 20.7825 12.1812 21.9018 12.3473 22.0827C13.8415 23.7096 14.7615 25.1976 14.9596 27ZM21 30H15V31.5H21V30ZM8.63093 22.4988C6.98468 20.4445 6 17.8372 6 15C6 8.37258 11.3726 3 18 3C24.6275 3 30 8.37258 30 15C30 17.8387 29.0142 20.4473 27.3665 22.5021C26.436 23.6622 24 25.5 24 27.75V31.5C24 33.1569 22.6569 34.5 21 34.5H15C13.3431 34.5 12 33.1569 12 31.5V27.75C12 25.5 9.56187 23.6604 8.63093 22.4988ZM19.5 15.0072H23.25L16.5 24.0072V18.0072H12.75L19.5 9V15.0072Z"
                  fill="white"
                />
              </svg>
              <h2>Optimal Ideation</h2>
              <p style={{ fontWeight: "400" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.....
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              style={{
                textAlign: "center",
                padding: "20px 20px",
                background: "none",
                borderRadius: "15px",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  backgroundColor: "cornflowerblue",
                  width: "64px",
                  height: "64px",
                  borderRadius: "15px",
                }}
              >
                <path
                  d="M31.497 4.5V7.5C31.497 21.9411 23.4382 28.5 13.4971 28.5L7.86115 28.4999C7.6179 29.868 7.49707 31.3605 7.49707 33H4.49707C4.49707 30.9559 4.67064 29.0996 5.01571 27.4023C4.66995 25.4611 4.49707 22.8264 4.49707 19.5C4.49707 11.2157 11.2128 4.5 19.497 4.5C22.497 4.5 25.497 6 31.497 4.5ZM19.497 7.5C12.8697 7.5 7.49707 12.8726 7.49707 19.5C7.49707 20.0436 7.50187 20.5667 7.51138 21.0689C9.39297 18.1026 12.1485 15.7572 15.7528 13.6976L17.2413 16.3023C12.9589 18.7494 10.1183 21.5302 8.65993 25.4997L13.4971 25.5C22.5198 25.5 28.3038 19.5403 28.4923 8.08149C26.4343 8.2817 24.5221 8.154 22.1631 7.80013C20.4364 7.54113 20.0982 7.5 19.497 7.5Z"
                  fill="white"
                />
              </svg>
              <h2>Favorable Setting</h2>
              <p style={{ fontWeight: "400" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.....
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className="whywearebest">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              style={{
                textAlign: "center",
                padding: "20px 20px",
                borderRadius: "15px",
                background: "none",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  backgroundColor: "hotpink ",
                  width: "64px",
                  height: "64px",
                  borderRadius: "15px",
                }}
              >
                <path
                  d="M25.4006 13.4474C24.639 7.55343 19.6012 3 13.5 3C6.87258 3 1.5 8.37258 1.5 15C1.5 17.8386 2.48561 20.4469 4.13325 22.5016C5.34527 24.0131 6.00049 25.6878 6.00037 27.4592L6 33H19.5L19.5015 28.5H22.5C24.1569 28.5 25.5 27.1569 25.5 25.5V21.1065L28.4389 19.8475C28.9537 19.6271 28.9986 19.1051 28.7763 18.7556L25.4006 13.4474ZM4.5 15C4.5 10.0294 8.52944 6 13.5 6C18.0364 6 21.8498 9.37712 22.4251 13.8318L22.5108 14.4939L24.8246 18.1322L22.5 19.1278V25.5H16.5026L16.501 30H9.0002L9.00037 27.4594C9.00054 25.0008 8.11448 22.671 6.47367 20.6248C5.20227 19.0394 4.5 17.0773 4.5 15ZM31.7302 27.1536L29.2339 25.4894C30.6654 23.3463 31.5 20.7707 31.5 18.0002C31.5 15.2295 30.6654 12.6538 29.2339 10.5108L31.7302 8.84656C33.48 11.4658 34.5 14.6138 34.5 18.0002C34.5 21.3864 33.48 24.5343 31.7302 27.1536Z"
                  fill="white"
                />
              </svg>
              <h2>Effective Interaction</h2>
              <p style={{ fontWeight: "400" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.....
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              style={{
                textAlign: "center",
                padding: "20px 20px",
                background: "none",
                borderRadius: "15px",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  backgroundColor: "tomato ",
                  width: "64px",
                  height: "64px",
                  borderRadius: "15px",
                }}
              >
                <path
                  d="M18 33C9.71572 33 3 26.2842 3 18C3 9.71572 9.71572 3 18 3C26.2842 3 33 9.71572 33 18C33 26.2842 26.2842 33 18 33ZM18 30C24.6275 30 30 24.6275 30 18C30 11.3726 24.6275 6 18 6C11.3726 6 6 11.3726 6 18C6 24.6275 11.3726 30 18 30ZM19.5 18H25.5V21H16.5V10.5H19.5V18Z"
                  fill="white"
                />
              </svg>{" "}
              <h2>Flexible Time</h2>
              <p style={{ fontWeight: "400" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.....
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              style={{
                textAlign: "center",
                padding: "20px 20px",
                background: "none",
                borderRadius: "15px",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  backgroundColor: "goldenrod",
                  width: "64px",
                  height: "64px",
                  borderRadius: "15px",
                }}
              >
                <path
                  d="M4.7417 6.70386C8.37762 3.06793 14.1707 2.90398 18.0012 6.21199C21.8292 2.90398 27.6224 3.06793 31.2582 6.70386C34.8876 10.3333 35.0574 16.1121 31.7677 19.9428L20.1213 31.6293C19.0029 32.7477 17.2213 32.7986 16.0428 31.7819L15.8787 31.6293L4.23212 19.9428C0.942423 16.1121 1.11228 10.3333 4.7417 6.70386ZM6.86301 8.82517C4.30229 11.3859 4.22913 15.4922 6.64353 18.1413L6.86301 18.3711L18 29.508L25.9539 21.552L20.6516 16.2498L19.0606 17.8408C17.3033 19.5981 14.454 19.5981 12.6966 17.8408C10.9393 16.0835 10.9393 13.2342 12.6966 11.4768L15.8484 8.32308C13.2794 6.26643 9.55614 6.36063 7.0929 8.60568L6.86301 8.82517ZM19.5909 13.0678C20.1767 12.482 21.1264 12.482 21.7122 13.0678L28.0752 19.4307L29.1369 18.3711C31.7729 15.7352 31.7729 11.4612 29.1369 8.82517C26.5761 6.26445 22.4698 6.19128 19.8209 8.60568L19.5909 8.82517L14.818 13.5981C14.274 14.1421 14.2352 14.9999 14.7014 15.5886L14.818 15.7194C15.3619 16.2634 16.2196 16.3023 16.8084 15.8359L16.9394 15.7194L19.5909 13.0678Z"
                  fill="white"
                />
              </svg>

              <h2>Reliable</h2>
              <p style={{ fontWeight: "400" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.....
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default WhyWeare;
