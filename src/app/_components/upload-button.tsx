'use client';

import { UploadButton as UTUploadButton } from "../utils/uploadthing";

export function UploadButton() {
  return (
    <UTUploadButton
      endpoint="imageUploader"
      appearance={{
        button: "bg-sky-300 hover:bg-sky-400 text-gray-400 px-8 py-2text-lg font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg",
        allowedContent: "hidden"
      }}
      content={{
        button: "Upload Photos"
      }}
      onClientUploadComplete={(res) => {
        window.location.reload();
      }}
      onUploadError={(error: Error) => {
        alert(`Upload failed: ${error.message}`);
      }}
    />
  );
}