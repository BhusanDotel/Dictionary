import Lottie from "react-lottie";
import { Box } from "@mui/material";

import animationData from "../assets/searchlottie.json";

export const LottieSearch = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box className="flex justify-center w-[full] h-[full]">
      <Box className="w-[200px] h-[200px] md:w-[500px] md:h-[500px]">
        <Lottie options={defaultOptions} />
      </Box>
    </Box>
  );
};
