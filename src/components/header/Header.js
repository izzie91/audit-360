import * as React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

//Mui
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//Components
import LanguageToggle from "./LanguageToggle";
import Menu from "./Menu";

import logo360audit from "../../assets/logo360audit.jpg";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Header(props) {
  const { t } = useTranslation();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar
            sx={{
              backgroundColor: theme.palette.common.white,
              paddingTop: theme.spacing(2),
              paddingBottom: theme.spacing(2),
            }}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: matchesSm ? "column" : "row",
                justifyContent: matchesSm ? "flex-end" : "space-between",
              }}
            >
              <a href="https://redsauce.net/es">
                <img src={logo360audit} alt="logo"></img>
              </a>
              <Box
                display="flex"
                flexDirection="row"
                sx={{ alignItems: "center", justifyContent: matchesSm ? "flex-end" : "center" }}
              >
                {isAuthenticated ? (
                  <Menu></Menu>
                ) : (
                  <Button
                    href="/sign-in"
                    variant="contained"
                    disableElevation
                    sx={{ textTransform: "capitalize", marginLeft: theme.spacing(1) }}
                  >
                    {t("access-button")}
                  </Button>
                )}
                <LanguageToggle></LanguageToggle>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
