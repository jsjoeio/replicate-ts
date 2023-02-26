import React, { useState } from "react";

interface Props {handleSubmit: any}

async function convertBlobToBase64(audioBlob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(audioBlob);
  });
}

const AudioRecorder: React.FC<Props> = ({handleSubmit}) => {
  const [recording, setRecording] = useState(false);
  const [audioData, setAudioData] = useState<Blob | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );

  const handleRecordClick = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    setMediaRecorder(mediaRecorder);
    const chunks: Blob[] = [];

    mediaRecorder.addEventListener("dataavailable", (e) => {
      chunks.push(e.data);
    });

    mediaRecorder.addEventListener("stop", async () => {
      setRecording(false);
      const audioBlob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
      setAudioData(audioBlob);
      try {
        const audioBase64 = await convertBlobToBase64(audioBlob)
        await handleSubmit(audioBase64)
      } catch (error) {
        console.error(error);
      }
    });

    mediaRecorder.start();
    setRecording(true);
  };

  const handleStopClick = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setMediaRecorder(null);
    }
  };

  return (
    <div>
      <button disabled={recording} onClick={handleRecordClick}>
        Record
      </button>
      <button disabled={!recording} onClick={handleStopClick}>
        Stop
      </button>
    </div>
  );
};

export default AudioRecorder;
