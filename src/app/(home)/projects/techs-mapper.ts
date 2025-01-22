import { Tech } from "@/types/techs";
import { StaticImageData } from "next/image";
import typescript from "@/assets/images/techs/typescript.png";
import react from "@/assets/images/techs/react.png";
import vite from "@/assets/images/techs/vite.png";
import java from "@/assets/images/techs/java.svg";
import spring from "@/assets/images/techs/spring.png";
import postgresql from "@/assets/images/techs/postgresql.png";
import jwt from "@/assets/images/techs/jwt.png";
import maven from "@/assets/images/techs/maven.webp";
import tailwindcss from "@/assets/images/techs/tailwindcss.png";

export const techImgSrcMap: Record<Tech, StaticImageData> = {
  typescript,
  react,
  vite,
  spring,
  maven,
  java,
  postgresql,
  jwt,
  tailwindcss,
};
