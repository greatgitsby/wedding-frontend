
export async function getImageProps() {
  const IMGIX_API_KEY = process.env.IMGIX_API_KEY || "";
  const IMGIX_SOURCE_ID = process.env.IMGIX_SOURCE_ID || "";

  const DOMAIN = "https://owen2moen.imgix.net";
  const URL = `https://api.imgix.com/api/v1/sources/${IMGIX_SOURCE_ID}/assets`;
  const SRC_PATH = "/gallery";

  const imgixResp = await fetch(URL, { headers: { "Authorization": "Bearer " + IMGIX_API_KEY }})
    .then((resp) => resp.json());

  const images = imgixResp.data
    .filter((image: any) => (
      image.attributes.origin_path.startsWith(SRC_PATH)
    ))
    .map((image: any) => ({
      width: image.attributes.media_width,
      height: image.attributes.media_height,
      src: DOMAIN + image.attributes.origin_path
    }));

  return {
    props: {
      images,
    },
  };
}
