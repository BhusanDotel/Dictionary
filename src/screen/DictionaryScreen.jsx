import React from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";

import { LottieSearch } from "../components/LottieSearch";
import { DictionaryResult } from "../components/DictionaryResult";
import { NotFound } from "../components/NotFound";

export const DictionaryScreen = () => {
  const [word, setWord] = React.useState("");
  const [meanings, setMeanings] = React.useState([]);
  const [pronunciations, setPronunciations] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSearch = async () => {
    if (!word || isLoading) return;
    setError(false);
    setMeanings([]);
    setPronunciations([]);
    setIsLoading(true);
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        setIsLoading(false);
        if (!res?.data) return;
        const data = res?.data[0];

        const _meanings = [];
        data?.meanings?.forEach((type) => {
          if (
            !_meanings.some((item) => {
              return item?.type === type?.partOfSpeech;
            })
          ) {
            _meanings.push({
              type: type?.partOfSpeech,
              definitions: type?.definitions?.map((el) => el.definition),
            });
          }
        }) || [];

        setMeanings(_meanings);

        const _soundings =
          data?.phonetics
            ?.map((el) => {
              return { accent: extractAccent(el?.audio), audio: el.audio };
            })
            .filter((el) => !!el?.accent) || [];

        setPronunciations(_soundings);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  };

  const extractAccent = (url) => {
    const baseName = url.split(".mp3")[0];
    const accentPart = baseName.split("/").pop();
    const accentCode = accentPart.split("-").pop().toUpperCase();

    return accentCode;
  };

  return (
    <Box className="flex flex-col shadow-2xl lg:min-w-[900px] lg:min-h-[600px] rounded-3xl p-10">
      <Box className="flex gap-5">
        <TextField
          onChange={(e) => {
            e.preventDefault();
            setWord(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && handleSearch();
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
      {!!meanings?.length && !isLoading && (
        <DictionaryResult meanings={meanings} pronunciations={pronunciations} />
      )}
      {error && <NotFound />}
    </Box>
  );
};
