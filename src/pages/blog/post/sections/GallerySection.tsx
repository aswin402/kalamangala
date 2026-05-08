/* GallerySection — image mosaic wrapper */
import { ImageMosaic } from "../components/ImageMosaic";

interface Props {
  images: string[];
}

export function GallerySection({ images }: Props) {
  return (
    <section className="blog-detail__gallery-wrap">
      <ImageMosaic images={images} />
    </section>
  );
}
