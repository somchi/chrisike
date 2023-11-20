import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const DropzoneVideo = ({ setFile }: { setFile: Function }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const file = acceptedFiles[0];
      setUploadedFile(file);
      setFile(file);
    },
    [setFile]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      className="border border-dotted rounded-md cursor-pointer border-predefined-border py-10 px-16"
      {...getRootProps()}
    >
      <input {...getInputProps()} type="file" />

      {uploadedFile ? (
        <div className="flex justify-center">
          <video
            width="300"
            height="200"
            controls
            className="max-w-full max-h-48"
          >
            <source src={URL.createObjectURL(uploadedFile)} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="grid justify-center gap-2">
          <span className="text-center text-sm">Drag and drop file</span>
          <span className="text-center">OR</span>
          <span className="text-center">Click to SELECT</span>
        </div>
      )}
    </div>
  );
};
