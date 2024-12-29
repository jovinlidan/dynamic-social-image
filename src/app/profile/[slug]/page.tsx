"use client";

// import Head from "next/head";
// import Image from "next/image";
import { redirect, useParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // const { username } = props;
  const params = useParams();
  const username = params.slug;

  // console.log(params.slug);
  // const ogImageUrl = `http://dynamic-social-image.vercel.com/api/og?username=${username}`; // Replace with your domain

  useEffect(() => {
    redirect(`https://testing.com/referral?ref=${username}`);
  }, [username]);

  return <div>Profile Page</div>;

  // return (
  //   <>
  //     <Head>
  //       <title>GitHub Profile: {username}</title>
  //       <meta
  //         name="description"
  //         content={`Check out the GitHub profile of ${username}`}
  //       />
  //       <meta property="og:title" content={`GitHub Profile of ${username}`} />
  //       <meta
  //         property="og:description"
  //         content={`Dynamically generated profile image for ${username}`}
  //       />
  //       <meta property="og:image" content={ogImageUrl} />
  //       <meta property="og:image:width" content="1200" />
  //       <meta property="og:image:height" content="630" />
  //       <meta name="twitter:card" content="summary_large_image" />
  //       <meta name="twitter:title" content={`GitHub Profile of ${username}`} />
  //       <meta
  //         name="twitter:description"
  //         content={`Dynamically generated profile image for ${username}`}
  //       />
  //       <meta name="twitter:image" content={ogImageUrl} />
  //     </Head>
  //     <main
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         height: "100vh",
  //         textAlign: "center",
  //       }}
  //     >
  //       <Image
  //         src={ogImageUrl}
  //         alt={`${username}'s GitHub profile`}
  //         width={128}
  //         height={128}
  //         style={{ borderRadius: "50%" }}
  //       />
  //       <p>Share this page on X to see the dynamic image preview!</p>
  //     </main>
  //   </>
  // );
}
