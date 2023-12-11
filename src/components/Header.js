// import { Grid } from "@mui/material";
// import React from "react";

// const Header = () => {
//   return (
//     <>
//       <div className="header">
//         {/* <Grid container spacing={1}>
//     <Grid item xs={12} md={6} lg={4}> */}
//         <div>
//           <span className="edu">Edu</span>
//           <span className="cation">cation</span>
//         </div>
//         {/* </Grid> */}
//         {/* <Grid item xs={12} md={6} lg={4}> */}
//         <div>
//           <ul
//             className="list"
//             style={{
//               display: "flex",
//               gap: "40px",
//               fontSize: "18px",
//               fontWeight: "700",
//               alignItems: "center   ",
//             }}
//           >
//             <li>
//               <a href="home" style={{ color: "#000" }}>
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="teachers" style={{ color: "#808080" }}>
//                 Teachers
//               </a>
//             </li>
//             <li>
//               <a href="courses" style={{ color: "#808080" }}>
//                 Courses
//               </a>
//             </li>
//             <li>
//               <a href="pricing" style={{ color: "#808080" }}>
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a href="aboutus" style={{ color: "#808080" }}>
//                 About Us
//               </a>
//             </li>
//           </ul>
//         </div>
//         {/* </Grid> */}
//         {/* <Grid item xs={12} md={6} lg={4}> */}
//         <div className="sginin">
//           <button
//             style={{
//               color: "#000",
//               fontWeight: "700",
//               fontSize: "17px",
//               border: "none",
//               background: "none",
//             }}
//           >
//             Sign In
//           </button>
//           <button
//             style={{
//               padding: "10px 17px",
//               color: "white",
//               background: "linear-gradient(90.05deg, #525fe1, #2e3899)",
//               border: "none",
//               borderRadius: "10px",
//               fontSize: "15px",
//               fontWeight: "700",
//             }}
//           >
//             SIGN UP
//           </button>
//         </div>
//         {/* </Grid>
//   </Grid> */}
//       </div>
//       ;
//     </>
//   );
// };

// export default Header;

import { Button, useMediaQuery, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        border: "1px solid #ccc",
        background: "white",
        zIndex: 1000,
        boxShadow: "0px 0px 5px black",
      }}
    >
      <div>
        <span className="edu">Edu</span>
        <span className="cation">cation</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: isSmallScreen ? "center" : "center",
        }}
      >
        {isSmallScreen ? (
          <>
            <Button variant="text" onClick={handleMenuOpen}>
              <MenuIcon />
            </Button>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <div style={{ marginRight: "10px" }}>
                  <a href="/" style={{ color: "#000", textDecoration: "none" }}>
                    HOME
                  </a>
                </div>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <div style={{ marginRight: "10px" }}>
                  <a
                    href="/aboutus"
                    style={{ color: "#808080", textDecoration: "none" }}
                  >
                    Teachers
                  </a>
                </div>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <div style={{ marginRight: "10px" }}>
                  <a
                    href="/solutions"
                    style={{ color: "#808080", textDecoration: "none" }}
                  >
                    Courses
                  </a>
                </div>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <div style={{ marginRight: "10px" }}>
                  <a
                    href="/services"
                    style={{ color: "#808080", textDecoration: "none" }}
                  >
                    Pricing
                  </a>
                </div>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <div style={{ marginRight: "10px" }}>
                  <a
                    href="/careers"
                    style={{ color: "#808080", textDecoration: "none" }}
                  >
                    About Us
                  </a>
                </div>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                gap: "40px",
                fontSize: "18px",
                fontWeight: "700",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "10px" }}>
                <a href="/" style={{ color: "#000", textDecoration: "none" }}>
                  HOME
                </a>
              </div>
              <div
                style={{
                  marginRight: "10px",
                }}
              >
                <a
                  href="/aboutus"
                  style={{ color: "#808080", textDecoration: "none" }}
                >
                  Teachers
                </a>
              </div>
              <div style={{ marginRight: "10px" }}>
                <a
                  href="/solutions"
                  style={{ color: "#808080", textDecoration: "none" }}
                >
                  Courses
                </a>
              </div>
              <div style={{ marginRight: "10px" }}>
                <a
                  href="/services"
                  style={{ color: "#808080", textDecoration: "none" }}
                >
                  Pricing
                </a>
              </div>
              <div style={{ marginRight: "10px" }}>
                <a
                  href="/careers"
                  style={{ color: "#808080", textDecoration: "none" }}
                >
                  About Us
                </a>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="sginin">
        <button
          style={{
            color: "#000",
            fontWeight: "700",
            fontSize: "17px",
            border: "none",
            background: "none",
          }}
        >
          Sign In
        </button>
        <button
          style={{
            padding: "10px 17px",
            color: "white",
            background: "linear-gradient(90.05deg, #525fe1, #2e3899)",
            border: "none",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: "700",
          }}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Header;
