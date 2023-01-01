type FormProps = {
  handleSubmit: any;
  status:
    | undefined
    | "processing"
    | "starting"
    | "succeeded"
    | "failed"
    | "canceled";
};

function renderBtn(status: FormProps["status"]) {
  switch (status) {
    case "processing":
    case "starting":
      return <LoadingBtn />;
    default:
      return (
        <button className="btn btn-primary normal-case ml-2" type="submit">
          Go!
        </button>
      );
      break;
  }
}

const LoadingBtn = () => {
  return (
    <button
      type="button"
      className="btn btn-primary normal-case ml-2 transition ease-in-out duration-150 cursor-not-allowed"
      disabled
    >
      <svg
        className="animate-spin -ml-3 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w2.org/2000/svg"
        fill="none"
        viewBox="-1 0 24 24"
      >
        <circle
          className="opacity-27"
          cx="11"
          cy="11"
          r="9"
          stroke="currentColor"
          stroke-width="3"
        ></circle>
        <path
          className="opacity-77"
          fill="currentColor"
          d="M3 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Processing...
    </button>
  );
};

export function Form({ handleSubmit, status }: FormProps) {
  return (
    <form className="flex flex-row justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        name="prompt"
        placeholder="Enter a prompt to display an image"
        className="input input-bordered w-full max-w-xs"
      />
      {renderBtn(status)}
    </form>
  );
}
