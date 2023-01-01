import { Error } from "./Error";
import { Form } from "./Form";
import { ImageResult } from "./ImageResult";

type OurAppProps = {
  handleSubmit: any;
  error: any;
  prediction: any;
};


export function OurApp({ handleSubmit, error, prediction }: OurAppProps) {
  return (
    <div className="container mx-auto flex flex-col justify-center m-24 align-center">
      <h1 className="text-center mb-8 font-bold text-3xl">Stable Diffusion Destroyer</h1>
      <Form
        handleSubmit={handleSubmit}
        status={prediction && prediction.status}
      />
      <Error error={error} />
      <ImageResult prediction={prediction} />
    </div>
  );
}
