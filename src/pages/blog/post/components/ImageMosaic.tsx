/* ImageMosaic — 2-row mosaic grid */
import { type FC } from "react";

interface Props {
  images: string[];
}

export const ImageMosaic: FC<Props> = ({ images }) => {
  const imgs = [...images];
  while (imgs.length < 4) imgs.push(images[0]);

  return (
    <div className="flex flex-col gap-2.5">
      <div className="grid gap-2.5 grid-cols-[2fr_1fr]">
        <img
          src={imgs[0]}
          alt="Gallery 1"
          className="w-full h-[clamp(200px,26vw,360px)] object-cover rounded-lg"
          loading="lazy"
        />
        <img
          src={imgs[1]}
          alt="Gallery 2"
          className="w-full h-[clamp(200px,26vw,360px)] object-cover rounded-lg grayscale"
          loading="lazy"
        />
      </div>
      <div className="grid gap-2.5 grid-cols-[1fr_2fr]">
        <img
          src={imgs[2]}
          alt="Gallery 3"
          className="w-full h-[clamp(220px,28vw,420px)] object-cover rounded-lg grayscale"
          loading="lazy"
        />
        <img
          src={imgs[3]}
          alt="Gallery 4"
          className="w-full h-[clamp(220px,28vw,420px)] object-cover rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};
