import { Tech } from "@/types/techs";
import { StaticImageData } from "next/image";
import typescript from "@/assets/images/techs/typescript.png";
import react from "@/assets/images/techs/react.png";
import vite from "@/assets/images/techs/vite.png";

export const techImgSrcMap: Record<Tech, StaticImageData> = {
  typescript,
  react,
  vite,
};
