import Image from "next/image";

type ImageResultProps = {
  prediction: {
    output: string;
    status: string;
  }
}
 

export function ImageResult({ prediction }: ImageResultProps) {
  return (
    <>
      {prediction && (
        <div>
          {prediction.output && (
            <div>
              <Image
                fill
                src={prediction.output[prediction.output.length - 1]}
                alt="output"
                sizes="100vw"
              />
            </div>
          )}
          <p className="mt-4">status: {prediction.status}</p>
        </div>
      )}
    </>
  );
}
