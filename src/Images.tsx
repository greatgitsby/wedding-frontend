interface ImageWithBlurEncoding {
  src: string;
  blurSrc: string;
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export interface AuthFlowImageProps {
  images: ImageWithBlurEncoding[];
}

export async function getImageProps() {
  const fs = await import("fs");
  const Jimp = await import("jimp/es");

  const placeholderImgWidth = 20;
  const basePath = "public/img/portraits";
  const baseUrl = "/img/portraits/";

  const images: string[] = fs.readdirSync(basePath).filter((f) => {
    return !f.startsWith(".");
  });

  const theImages: ImageWithBlurEncoding[] = [];

  for (const filename of images) {
    const fullPath = basePath + "/" + filename;
    const remoteSrcPath = baseUrl + filename;

    const image = await Jimp.default.read(fullPath);
    
    const imgAspectRatio = image.getWidth() / image.getHeight();
    const placeholderImgHeight = Math.round(placeholderImgWidth / imgAspectRatio);

    const imgBase64 = await image
      .resize(placeholderImgWidth, placeholderImgHeight)
      .getBufferAsync(image.getMIME())
      .then(
        buffer => `data:image/${image.getMIME()};base64,${buffer.toString('base64')}`
      );

    theImages.push({
      src: remoteSrcPath,
      blurSrc: imgBase64
    });
  }

  return {
    props: {
      images: shuffleArray(theImages),
    },
  };
}