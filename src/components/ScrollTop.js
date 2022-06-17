import { useState, useEffect } from "react";

//Mui
import Fab from "@mui/material/Fab";
import { useTheme } from "@mui/material/styles";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollTop(props) {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Fab
        size="small"
        onClick={scrollToTop}
        aria-label="add"
        sx={{
          borderRadius: "10%",
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.main,
          opacity: isVisible ? "100%" : "0%",
          position: "fixed",
          top: "50%",
          right: 0,
          "&:hover": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.dark,
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </>
  );
}

export default ScrollTop;
