import React from "react";
import watch from "../assets/images/icons8-video-48.png";
import person from "../assets/images/smilinghappyindianstudentwithbackpackpointinghisfingerwall-1@2x.png";
import { Grid } from "@mui/material";

const JoinCourse = () => {
  return (
    <>
      <Grid container spacing={1}>
        <div
          // style={{ display: "flex", padding: "10px 50px", marginTop: "100px" }}
          className="seehowitworks"
        >
          <Grid item xs={12} md={12} lg={6}>
            <div className="joincourse">
              <h3>
                Online <span>Learning</span>
              </h3>
              <h3>
                <span>you can access</span>any
              </h3>
              <h3> where easily!</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.....
              </p>
              <div className="join">
                <button> JOIN COURSE</button>
                <div className="watch">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 29.8333C8.6362 29.8333 2.66666 23.8637 2.66666 16.5C2.66666 9.13619 8.6362 3.16666 16 3.16666C23.3637 3.16666 29.3333 9.13619 29.3333 16.5C29.3333 23.8637 23.3637 29.8333 16 29.8333ZM14.1625 11.7194C14.0749 11.661 13.972 11.6299 13.8667 11.6299C13.5721 11.6299 13.3333 11.8686 13.3333 12.1632V20.8368C13.3333 20.9421 13.3645 21.0451 13.4229 21.1327C13.5863 21.3777 13.9175 21.444 14.1625 21.2805L20.6677 16.9437C20.7263 16.9047 20.7765 16.8544 20.8156 16.7959C20.9791 16.5508 20.9128 16.2196 20.6677 16.0563L14.1625 11.7194Z"
                      fill="#525FE1"
                    />
                  </svg>
                  <h5>See how it works?</h5>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className="person-container">
              <svg
                width="505"
                height="555"
                viewBox="0 0 505 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M173.699 45.8057C209.095 -14.5238 296.318 -14.5237 331.713 45.8057L332.999 47.9968C349.331 75.8287 379.097 93.0157 411.365 93.2417L413.908 93.2594C483.853 93.7492 527.464 169.286 492.914 230.105L491.659 232.314C475.72 260.372 475.72 294.746 491.659 322.804L492.914 325.012C527.464 385.832 483.853 461.368 413.908 461.858L411.365 461.874C379.097 462.102 349.331 479.289 332.999 507.12L331.713 509.311C296.318 569.641 209.095 569.641 173.699 509.311L172.413 507.12C156.083 479.289 126.314 462.102 94.0466 461.874L91.5063 461.858C21.561 461.368 -22.0499 385.832 12.4984 325.012L13.7532 322.804C29.6915 294.746 29.6915 260.372 13.7532 232.314L12.4984 230.105C-22.0499 169.286 21.561 93.7492 91.5063 93.2594L94.0466 93.2417C126.315 93.0157 156.083 75.8287 172.413 47.9968L173.699 45.8057Z"
                  fill="#FFCF59"
                />
                <path
                  d="M183.547 74.6948C214.532 21.8856 290.882 21.8857 321.865 74.6948L322.99 76.6127C337.286 100.975 363.342 116.02 391.587 116.218L393.813 116.233C455.04 116.662 493.214 182.782 462.971 236.02L461.872 237.954C447.921 262.514 447.921 292.604 461.872 317.164L462.971 319.096C493.214 372.336 455.04 438.455 393.813 438.884L391.587 438.899C363.342 439.097 337.286 454.143 322.99 478.504L321.865 480.422C290.882 533.232 214.532 533.232 183.547 480.422L182.422 478.504C168.128 454.143 142.07 439.097 113.824 438.899L111.601 438.884C50.3743 438.455 12.1997 372.336 42.4414 319.096L43.5398 317.164C57.4913 292.604 57.4913 262.514 43.5398 237.954L42.4414 236.02C12.1997 182.782 50.3743 116.662 111.601 116.233L113.824 116.218C142.07 116.02 168.128 100.975 182.422 76.6127L183.547 74.6948Z"
                  fill="#FFD776"
                />
              </svg>
              <img
                src={person}
                alt="person"
                height="496.7px"
                width="447.5px"
                style={{ marginTop: "-640px", marginLeft: "50px" }}
                // style={{ marginLeft: "-250px", marginTop: "50px" }}
                // style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
};

export default JoinCourse;
