import Head from "next/head";
import { Hero, About, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elizabeth Peshia Nutrition</title>
        <meta
          name="description"
          content="Elizabeth Peshia: Registered Dietitian providing 1:1 nutrition counseling. Specializes in building healthy eating habits, diabetes management, and weight loss."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Elizabeth Peshia Nutrition" />
        <meta
          property="og:description"
          content="Registered Dietitian providing 1:1 nutrition counseling. Passionate about empowering others with lifelong knowledge about the foods they eat."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.epnutritionrd.com/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dflipazxf/image/upload/v1692615411/Elizabeth%20Peshia/og-image_c7zxwo.jpg"
        />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}
