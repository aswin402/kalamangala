/* ImageMosaic — 3-col / 2-row grid with grayscale on two images */
interface Props {
  images: string[];
}

export function ImageMosaic({ images }: Props) {
  // Expects at least 4 images; pad if fewer
  const imgs = [...images];
  while (imgs.length < 4) imgs.push(images[0]);

  return (
    <div className="blog-detail__mosaic">
      {/* Row 1: big left (2-col) + small right (1-col, grayscale) */}
      <div className="blog-detail__mosaic-row blog-detail__mosaic-row--top">
        <img
          src={imgs[0]}
          alt="Gallery 1"
          className="blog-detail__mosaic-img blog-detail__mosaic-img--wide"
          loading="lazy"
        />
        <img
          src={imgs[1]}
          alt="Gallery 2"
          className="blog-detail__mosaic-img blog-detail__mosaic-img--grayscale"
          loading="lazy"
        />
      </div>
      {/* Row 2: small left (1-col, grayscale) + big right (2-col) */}
      <div className="blog-detail__mosaic-row blog-detail__mosaic-row--bottom">
        <img
          src={imgs[2]}
          alt="Gallery 3"
          className="blog-detail__mosaic-img blog-detail__mosaic-img--grayscale"
          loading="lazy"
        />
        <img
          src={imgs[3]}
          alt="Gallery 4"
          className="blog-detail__mosaic-img blog-detail__mosaic-img--wide"
          loading="lazy"
        />
      </div>
    </div>
  );
}
