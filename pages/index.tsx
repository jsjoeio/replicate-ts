import { useState } from "react";
import Head from "next/head";
import { OurApp } from "../components/OurApp";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = async (audio: string) => {
    console.log("waht is audio", audio)
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        audio
      }),
    });
    let prediction = await response.json();
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({prediction})
      setPrediction(prediction);
    }
  };

  return (
    <div>
      <Head>
        <title>Next.js + TypeScript + Replicate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>


      <div className="flex justify-center mx-auto w-9/12 pt-12">

      <OurApp handleSubmit={handleSubmit}
      error={error}
      prediction={prediction} />
      </div>


    </div>
  );
}