// components/LottieLoop.tsx
"use client";

import Lottie from "lottie-react";
import animationData from "../../../public/images/about-us/lottie-botella.json"; // puedes ajustar esta ruta

export default function BotellaLottie({ style }) {
  return <Lottie animationData={animationData} loop autoplay style={style} />;
}
