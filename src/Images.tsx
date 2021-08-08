interface ImageWithBlurEncoding {
  src: string;
  blurSrc: string;
}

export interface AuthFlowImageProps {
  images: ImageWithBlurEncoding[];
}

export function getImages() {
  
}

export async function getAuthFlowImageProps() {
  const fs = await import("fs");
  const sharp = await import("sharp");

  const placeholderImgWidth = 20;
  const basePath = "public/img/portraits";
  const baseUrl = "/img/portraits/";

  const images: string[] = fs.readdirSync(basePath).filter((f) => {
    return !f.startsWith(".");
  });

  const theImages: ImageWithBlurEncoding[] = [];

  for (const image of images) {
    const fullPath = basePath + "/" + image;
    const sharpImage = sharp.default(fullPath);
    const sharpMetadata = await sharpImage.metadata();
    
    if (sharpMetadata.width && sharpMetadata.height) {
      const imgAspectRatio = sharpMetadata.width / sharpMetadata.height;
      const placeholderImgHeight = Math.round(placeholderImgWidth / imgAspectRatio);
      const imgBase64 = await sharpImage
        .resize(placeholderImgWidth, placeholderImgHeight)
        .toBuffer()
        .then(
          buffer => `data:image/${sharpMetadata.format};base64,${buffer.toString('base64')}`
        );

      theImages.push({
        src: baseUrl + image,
        blurSrc: imgBase64
      });
    }
  }

  return {
    props: {
      images: theImages,
    },
  };
}