import { useState } from "react";

//Mui
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@mui/material/styles";

import i18n from "../../i18n";

export default function LanguageToggle() {
  const theme = useTheme();
  const [alignment, setAlignment] = useState(i18n.language);

  const handleChange = (event, newAlignment) => {
    sessionStorage.setItem("language", newAlignment);
    i18n.changeLanguage(newAlignment);
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      sx={{ margin: theme.spacing(1) }}
    >
      <ToggleButton value="sp" size="small">
        ES
      </ToggleButton>
      <ToggleButton value="en" size="small">
        EN
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
