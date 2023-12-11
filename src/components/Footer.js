import React from "react";
import { Grid } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={5}>
            <div className="education">
              <h1>Education</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="socials">
                <FacebookOutlinedIcon />
                <InstagramIcon />
                <YouTubeIcon />
                <TwitterIcon />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <div className="footerAbout">
              <h1>About</h1>
              <h3>Menu</h3>
              <h3>Features</h3>
              <h3>News & Blogs</h3>
              <h3>Help & Supports </h3>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={2}>
            <div className="footerAbout">
              <h1>Company</h1>
              <h3>How we work</h3>
              <h3>Terms of service</h3>
              <h3>Pricing</h3>
              <h3>FAQ </h3>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <div className="footerAbout">
              <h1>Contact Us</h1>
              <h3>
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016
              </h3>
              <h3>+1 202-918-2132</h3>
              <h3>education@mail.com</h3>
              <h3>www.education.com</h3>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
