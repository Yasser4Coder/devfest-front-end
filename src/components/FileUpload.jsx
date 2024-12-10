import React from "react";
import { useState, useCallback } from "react";
import { Upload, XCircle } from "lucide-react";

function FileUpload({ title, paragraph, handleFileChange, namefile }) {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const validateFile = (file) => {
    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "application/zip",
    ];
    if (!validTypes.includes(file.type)) {
      alert("Only .jpg, .png, .svg and .zip files are allowed!");
      return false;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB!");
      return false;
    }
    return true;
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && validateFile(droppedFile)) {
      handleFile(droppedFile);
    }
  }, []);

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && validateFile(selectedFile)) {
      handleFile(selectedFile);
    }
  };

  const handleFile = (selectedFile) => {
    const fileWithProgress = { ...selectedFile, progress: 0 };
    setFile(fileWithProgress);

    // Simulate upload progress
    const interval = setInterval(() => {
      setFile((currentFile) => {
        if (currentFile && currentFile.progress < 100) {
          const newFile = {
            ...currentFile,
            progress: currentFile.progress + 10,
          };
          return newFile;
        }
        clearInterval(interval);
        return currentFile;
      });
    }, 500);
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="w-full max-w-md p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-muted-foreground">{paragraph}</p>
        </div>
      </div>

      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-lg p-8
          flex flex-col items-center justify-center
          ${isDragging ? "border-[#394496] bg-slate-300" : "border-[#394496]"}
        `}
      >
        {!file ? (
          <>
            <Upload className="h-10 w-10 text-primary mb-4" />
            <p className="text-sm text-center">
              Drag your file(s) or{" "}
              <label className="text-[#394496] cursor-pointer hover:underline">
                browse
                <input
                  type="file"
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.svg,.zip"
                  name={namefile}
                  onChange={handleFileChange}
                />
              </label>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Max 10 MB files are allowed
            </p>
          </>
        ) : (
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className=" text-primary px-2 py-1 rounded text-xs">
                  JPG
                </div>
                <span className="text-sm">{file.name}</span>
                <span className="text-sm text-muted-foreground">
                  {(file.size / 1024).toFixed(0)}kb
                </span>
              </div>
              <button onClick={removeFile}>
                <XCircle className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
            <progress value={file.progress} className="h-2" />
          </div>
        )}
      </div>

      <p className="text-sm text-muted-foreground mt-4">
        Only support .jpg, .png and .svg and zip files
      </p>
    </div>
  );
}

export default FileUpload;
