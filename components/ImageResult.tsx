import Image from "next/image";

type ImageResultProps = {
  prediction: {
    output: string;
    status: string;
  }
}
 

export function ImageResult({ prediction }: ImageResultProps) {
  console.log(prediction)
  return (
    <>
      {prediction && (
        <div>
          {prediction.output && (
            <div className="relative w-80 h-auto mx-auto mt-8">
              <Image
               fill
               sizes="100vw"
               style={{
                 objectFit: 'cover',
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
