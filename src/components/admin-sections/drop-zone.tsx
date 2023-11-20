import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const DropZone = ({ setFile }: { setFile: Function }) => {
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
      <input {...getInputProps()} type="image" alt="" />

      {uploadedFile ? (
        <div className="flex justify-center">
          <img
            src={URL.createObjectURL(uploadedFile)}
            alt="Uploaded"
            className="max-w-full max-h-48"
            height={192}
            width={200}
          />
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
