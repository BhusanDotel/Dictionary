import { Box, Button, TextField } from "@mui/material";
import { LottieSearch } from "../components/LottieSearch";

export const DictionaryScreen = () => {
  return (
    <Box className="flex">
      <TextField fullWidth size="small" label="Word" />
      <Button variant="contained" size="small">
        Search
      </Button>

      <LottieSearch />
    </Box>
  );
};
