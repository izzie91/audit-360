import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

//Mui
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//Components
import RecoveryModal from "../components/modals/RecoveryModal";

//CustomHooks
import useHTTPRequest from "../functions/hooks/useHTTPRequest";

const defaultValues = {
  email: "",
  password: "",
};

function SignInPage() {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useForm hook + MUI
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues });

  const [showPassword, setShowPassword] = useState(false);
  const [openRecoveryModal, setOpenRecoveryModal] = useState(false);
  const { response, error, loading, makeRequest } = useHTTPRequest("POST", "/360audit/api/login");

  const onClickOpenModalHandler = () => setOpenRecoveryModal(true);

  const onCloseRecoveryModal = () => setOpenRecoveryModal(false);

  /*   useEffect(() => {
    if (!loading) {
      console.log(response);
    }
  }, [loading]); */

  // Example POST method implementation:
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const onSubmit = (values) => {
    console.log(values);
    /* sessionStorage.setItem("isAuthenticated", "pepe");
    navigate("/modules"); */

    /* dispatch(
      authActions.onLogin({
        token: "token",
        user: "user",
      })
    );
    navigate("/modules"); */
    const bodyRequest = { email: values.email, password: values.password };
    //makeRequest(bodyRequest);
    postData("/360audit/api/login", bodyRequest).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        color="primary"
        align="center"
        sx={{ color: theme.palette.grey[700], marginBottom: theme.spacing(3), marginTop: theme.spacing(2) }}
      >
        {t("login-account-header")}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "320px" }}>
        <Controller
          render={({ field: { onChange, value, name, ref } }) => (
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              autoFocus
              label={t("create-email-placeholder")}
              placeholder={t("login-email-placeholder")}
              margin="normal"
              type="email"
              name={name}
              onChange={(e) => {
                onChange(e.target.value);
              }}
              error={!!errors.email}
            />
          )}
          name="email"
          control={control}
        />
        <Controller
          render={({ field: { onChange, value, name, ref } }) => (
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              label={t("create-password-placeholder")}
              placeholder={t("login-password-placeholder")}
              margin="normal"
              type="password"
              name={name}
              onChange={(e) => {
                onChange(e.target.value);
              }}
              error={!!errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
          name="password"
          control={control}
        />
        <Box display="flex" justifyContent="center">
          <Link href="#" variant="subtitle2" sx={{ marginTop: theme.spacing(2) }} onClick={onClickOpenModalHandler}>
            {t("forgot-password-link")}
          </Link>
        </Box>
        <Button
          variant="contained"
          disableElevation={true}
          fullWidth
          size="large"
          type="submit"
          sx={{ textTransform: "capitalize", marginTop: theme.spacing(1) }}
        >
          {t("login-account-button")}
        </Button>
      </form>
      <Link href="/" variant="subtitle2" sx={{ marginTop: theme.spacing(2) }}>
        {t("register-link")}
      </Link>
      <RecoveryModal open={openRecoveryModal} onClose={onCloseRecoveryModal}></RecoveryModal>
    </Container>
  );
}

export default SignInPage;
