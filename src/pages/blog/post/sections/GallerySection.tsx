/* GallerySection — image mosaic wrapper */
import { ImageMosaic } from "../components/ImageMosaic";

interface Props {
  images: string[];
}

export function GallerySection({ images }: Props) {
  return (
    <section
      data-reveal
      data-y="20"
      data-duration="1.0"
      className="mx-auto px-[clamp(20px,4vw,64px)] pt-[clamp(24px,3vw,48px)] pb-[clamp(40px,5vw,72px)]"
      style={{ maxWidth: '1380px' }}
    >
      <ImageMosaic images={images} />
    </section>
  );
}
