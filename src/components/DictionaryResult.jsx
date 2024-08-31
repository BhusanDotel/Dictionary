/* eslint-disable react/prop-types */
import React from "react";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";

export const DictionaryResult = ({ meanings, pronunciations }) => {
  const [currentAccent, setCurrentAccent] = React.useState(
    pronunciations[0]?.accent
  );

  const currentAccentAudio = React.useMemo(() => {
    return pronunciations.find((el) => el?.accent === currentAccent)?.audio;
  }, [currentAccent, pronunciations]);

  return (
    <Box>
      <Box className="flex items-center gap-5 mt-5">
        <audio
          className="w-[150px] md:w-[300px]"
          src={currentAccentAudio}
          controls
        ></audio>

        <Box className="w-20">
          <FormControl fullWidth>
            <Select
              size="small"
              fullWidth
              id="demo-simple-select"
              value={currentAccent}
              label="Age"
              onChange={(e) => {
                setCurrentAccent(e.target.value);
              }}
            >
              {pronunciations?.map((el, index) => (
                <MenuItem key={index} value={el?.accent}>
                  {el?.accent}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box className="flex flex-col gap-5 mt-5">
        {meanings?.map((meaningItems, index) => {
          return (
            <Box key={index}>
              <MeaningContainer meaningItems={meaningItems} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const MeaningContainer = ({ meaningItems }) => {
  return (
    <Box className="flex flex-col">
      <Typography variant="h5">{meaningItems?.type}</Typography>
      <Box className="pl-4">
        {meaningItems?.definitions?.map((el, index) => {
          return (
            <Box key={index}>
              <Typography>
                {index + 1}. {el}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
