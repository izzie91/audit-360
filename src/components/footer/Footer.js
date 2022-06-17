import { useTranslation } from "react-i18next";

//Mui
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import logoRedSauce from "../../assets/logoRedSauce.jpg";

export default function Footer() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <>
      <AppBar position="static" sx={{ top: "auto", bottom: 0 }}>
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
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a href="https://redsauce.net/es">
              <img src={logoRedSauce} alt="logo"></img>
            </a>
            <Box
              sx={{
                display: "flex",
                flexDirection: matchesSm ? "column" : "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={1}
                sx={{
                  marginRight: theme.spacing(1),
                  marginTop: matchesSm ? theme.spacing(1) : "0",
                  marginBottom: matchesSm ? theme.spacing(2) : "0",
                }}
              >
                <Link href="#" underline="none" variant="subtitle2" sx={{ color: theme.palette.text.primary }}>
                  {t("legacy-link")}
                </Link>
                <Link href="#" underline="none" variant="subtitle2" sx={{ color: theme.palette.text.primary }}>
                  {t("privacy-policy-link")}
                </Link>
                <Link href="#" underline="none" variant="subtitle2" sx={{ color: theme.palette.text.primary }}>
                  {t("terms-link")}
                </Link>
              </Stack>
              <span>
                <IconButton sx={{ color: theme.palette.text.primary }}>
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton sx={{ color: theme.palette.text.primary }}>
                  <SupportAgentIcon fontSize="large" />
                </IconButton>
              </span>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
