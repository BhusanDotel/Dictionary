import Lottie from "react-lottie";
import animationData from "../assets/searchlottie.json"; // Ensure correct path

export const LottieSearch = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} />;
};
