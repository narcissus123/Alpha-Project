import React from "react";
import { useDropzone } from "react-dropzone";

const DropBox = ({ onDrop }) => {
  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    onDrop,
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
  });

  return (
    <div class="mx-auto h-4/5 w-11/12">
      {/* The getRootProps returns the props required for drag-and-drop functionality. */}
      <div
        {...getRootProps(isDragAccept, isFocused, isDragReject)}
        class="mx-auto mt-3 rounded-md border bg-slate-100 py-6 text-center"
      >
        {/* The getInputProps is used to create the drag-and-drop zone. */}
        <input
          {...getInputProps()}
          class="block h-20 border border-green-500"
        />
        <p>Drag 'n' drop your profile image here</p>
        {/* The open prop allows user to open the file directory to upload files. */}
        <button
          type="button"
          onClick={open}
          class="mt-12 rounded-md border bg-red-500 px-2 py-2 text-sm"
        >
          Click to select file
        </button>
      </div>

      {acceptedFiles.map((image) => (
        <div key={image.path} class="mt-6">
          {image.path} - {image.size} bytes
        </div>
      ))}
    </div>
  );
};

export { DropBox };
