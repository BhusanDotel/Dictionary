import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import { DictionaryScreen } from "./screen/DictionaryScreen";

export const App = () => {
  return (
    <Box className="flex justify-center">
      <Box className="flex justify-center w-[70%] pt-20">
        <DictionaryScreen />
      </Box>
      <Box className="fixed bottom-4 right-4 ">
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
