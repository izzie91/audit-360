import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

//Mui
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const defaultValues = {
  email: "",
  password: "",
};

function SingUpPage() {
  const theme = useTheme();
  const { t } = useTranslation();

  // useForm hook + MUI
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values) => {
    console.log(values);
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
        sx={{ color: theme.palette.grey[700], marginTop: theme.spacing(5) }}
      >
        {t("create-account-header")}
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
              placeholder={t("create-email-placeholder")}
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
              placeholder={t("create-password-placeholder")}
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
        <Button
          variant="contained"
          disableElevation={true}
          fullWidth
          size="large"
          type="submit"
          sx={{ textTransform: "capitalize", marginTop: theme.spacing(1) }}
        >
          {t("create-account-button")}
        </Button>
      </form>
    </Container>
  );
}

export default SingUpPage;
