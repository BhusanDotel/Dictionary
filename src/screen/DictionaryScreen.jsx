import { Box, Button, TextField } from "@mui/material";

export const DictionaryScreen = () => {
  return (
    <Box className="flex">
      <TextField fullWidth size="small" label="Word" />
      <Button variant="contained" size="small">
        Search
      </Button>
    </Box>
  );
};
