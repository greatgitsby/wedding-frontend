export interface AuthFlowImageProps {
  images: string[];
}

export function getImages() {
  
}

export async function getAuthFlowImageProps() {
  const fs = await import("fs");
  const basePath = "public/img/portraits";
  const baseUrl = "/img/portraits/";
  const images: string[] = fs.readdirSync(basePath).filter((f) => {
    return !f.startsWith(".");
  }).map((f) => baseUrl+f);

  return {
    props: {
      images,
    },
  };
}