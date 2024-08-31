import Lottie from "react-lottie";
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
    <Lottie options={defaultOptions} style={{ height: 500, width: 500 }} />
  );
};
