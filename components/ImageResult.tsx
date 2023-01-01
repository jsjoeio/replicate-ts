import Image from "next/image";

type ImageResultProps = {
  prediction: {
    output: string;
    status: string;
  }
}
 

// https://3000--dev--egghead--jsjoeio--apps.dev.coder.com/_next/image?url=https%3A%2F%2Freplicate.delivery%2Fpbxt%2FIAI6LT6jmNrcGJ2lF3EgmLObspTMpGUIT4mZ2WQVFTvnL6DE%2Fout-0.png&w=2048&q=75
export function ImageResult({ prediction }: ImageResultProps) {
  return (
    <>
      {prediction && (
        <div>
          {prediction.output && (
            //     position: relative;
            <div className="relative w-80 h-auto mx-auto mt-8">
              <Image
                fill
                src={prediction.output[prediction.output.length - 1]}
                alt="output"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
