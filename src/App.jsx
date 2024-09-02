import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import { DictionaryScreen } from "./screen/DictionaryScreen";

export const App = () => {
  return (
    <Box className="flex flex-col items-center gap-4 md:gap-10">
      <Box className="flex justify-center w-[90%] md:w-[70%] pt-20">
        <DictionaryScreen />
      </Box>
      <Box className="flex justify-center pb-4 w-full">
        <Box>
          <IconButton
            onClick={() => {
              window.open("https://github.com/BhusanDotel");
            }}
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              window.open("https://www.instagram.com/bhusan_theog/");
            }}
            aria-label="Instagram"
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
