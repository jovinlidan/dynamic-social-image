import { ImageResponse } from "next/og";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

// export const runtime = "edge";

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
  console.log("process.cwd()", process.cwd());
  const files = await readdir(process.cwd(), { withFileTypes: true });
  const result = files.map((file) => ({
    name: file.name,
    isDirectory: file.isDirectory(),
    isFile: file.isFile(),
  }));

  console.log("Files and directories in:", process.cwd());
  console.table(result);

  const logoData = await readFile(join(process.cwd(), "/Poppins-Medium.ttf"));
  const logoSrc = Uint8Array.from(logoData).buffer;

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
      fonts: [
        {
          name: "Inter",
          data: await logoSrc,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
