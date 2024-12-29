import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 600,
  height: 315,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  // Font
  //   const interSemiBold = fetch(new URL("./Inter.ttf", import.meta.url)).then(
  //     (res) => res.arrayBuffer()
  //   );

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 100,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        About {params.slug}
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      //   fonts: [
      //     {
      //       name: "Inter",
      //       data: await interSemiBold,
      //       style: "normal",
      //       weight: 400,
      //     },
      //   ],
    }
  );
}