import { Scada } from "next/font/google";
import { Montserrat } from "next/font/google";

export const lora = Scada({
  subsets: ["latin"],
  preload: true,
  weight: "400",
});
export const montserrat = Montserrat({ subsets: ["latin"], preload: true });
