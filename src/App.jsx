import { Box } from "@mui/material";
import { DictionaryScreen } from "./screen/DictionaryScreen";

export const App = () => {
  return (
    <Box className="flex justify-center">
      <Box className="flex justify-center w-[70%]">
        <DictionaryScreen />
      </Box>
    </Box>
  );
};
