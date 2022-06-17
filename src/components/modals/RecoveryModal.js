import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

//Mui
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const defaultValues = {
  email: "",
};

export default function RecoveryModal(props) {
  const theme = useTheme();
  const { t } = useTranslation();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  // useForm hook + MUI
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues });

  const handleClose = () => {
    props.onClose();
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: " center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: matchesSm ? "90%" : "60%",
              bgcolor: theme.palette.grey[100],
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              variant="body1"
              color="primary"
              align="center"
              sx={{ color: theme.palette.grey[700], marginBottom: theme.spacing(3) }}
            >
              {t("send-email-label")}
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
              <Button
                variant="contained"
                disableElevation={true}
                fullWidth
                size="large"
                type="submit"
                sx={{ textTransform: "capitalize", marginTop: theme.spacing(1) }}
              >
                {t("send-email-button")}
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
