export async function getImageProps() {
  const fs = await import("fs");

  const basePath = "public/img/portraits";

  const images: string[] = fs.readdirSync(basePath).filter((f) => {
    return !f.startsWith(".");
  }).sort();

  return {
    props: {
      images,
    },
  };
}
