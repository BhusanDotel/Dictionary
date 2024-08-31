import Lottie from "react-lottie";
import animationData from "../assets/notFound.json";

export const NotFound = () => {
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
