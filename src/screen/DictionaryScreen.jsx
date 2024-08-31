import React from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";

import { LottieSearch } from "../components/LottieSearch";

export const DictionaryScreen = () => {
  const [word, setWord] = React.useState("");
  const [result, setResult] = React.useState({
    meanings: [],
    pronunciations: [],
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSearch = async () => {
    if (!word || isLoading) return;
    setIsLoading(true);
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        if (!res?.data) return;
        const data = res?.data[0];
        const _meanings =
          data?.meanings?.map((type) =>
            type?.definitions?.map((el) => {
              return { type: type.partOfSpeech, definition: el.definition };
            })
          ) || [];

        const _soundings =
          data?.phonetics?.map((el) => {
            return { accent: extractAccent(el?.audio), audio: el.audio };
          }) || [];

        setResult({ meanings: _meanings, pronunciations: _soundings });
      });

    setIsLoading(false);
  };

  const extractAccent = (url) => {
    const baseName = url.split(".mp3")[0];
    const accentPart = baseName.split("/").pop();
    const accentCode = accentPart.split("-").pop().toUpperCase();

    return accentCode;
  };

  return (
    <Box className="flex flex-col shadow-2xl rounded-3xl p-10">
      <Box className="flex gap-5">
        <TextField
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
          fullWidth
          size="small"
          label="Enter word"
        />
        <Button
          onClick={handleSearch}
          sx={{ width: "150px" }}
          variant="contained"
          size="small"
        >
          Search
        </Button>
      </Box>

      {isLoading && <LottieSearch />}
      {result && JSON.stringify(result)}
    </Box>
  );
};
