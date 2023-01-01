import Image from "next/image";

type ImageResultProps = {
  prediction: {
    output: string;
    status: string;
  };
};

export function ImageResult({ prediction }: ImageResultProps) {
  return (
    <>
      {prediction && (
        <div>
          {prediction.output && (
            <div className="relative mx-auto w-96 h-96 mt-6">
              <Image
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "50% 50%",
                }}
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
