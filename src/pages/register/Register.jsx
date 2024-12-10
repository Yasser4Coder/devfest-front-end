import React, { useState, useRef } from "react";
import logo from "../../images/caat-removebg-preview 1.png";
import img from "../../images/ArrowLeft.png";
import img2 from "../../images/Camera Icon.png";
import { IoCloudUploadOutline } from "react-icons/io5";

const Register = () => {
  const [file, setFile] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [cameraAccessGranted, setCameraAccessGranted] = useState(false);
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const videoRef = useRef(null);

  const [galleryImage, setGalleryImage] = useState(null);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setCameraAccessGranted(true);
      alert("Camera access granted!");
      // You can display the camera stream in a <video> element here
      stream.getTracks().forEach((track) => track.stop()); // Stop stream after granting access
    } catch (error) {
      alert(
        "Unable to access camera. Please allow camera access in browser settings."
      );
    }
  };

  const handleGallerySelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setGalleryImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full mt-[20px] relative flex items-center justify-center overflow-x-hidden">
      
      <div
        className="absolute top-[5%] cursor-pointer left-[10%]"
        onClick={handleBack}
      >
        <img src={img} alt="Go Back" />
      </div>
      <div className="flex flex-col items-center gap-[20px]">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="text-2xl font-semibold">
          Upgrade to Comprehensive Motor Insurance Plan
        </h1>
        <p className="text-[#828282]">
          Fill or update your information, and we’ll get your vehicle covered in
          no time.
        </p>
        <div className="w-full flex items-center">
          {[1, 2, 3, 4].map((step) => (
            <React.Fragment key={step}>
              <div
                className={`min-w-[25.6px] min-h-[25.6px] flex items-center justify-center rounded-full ${
                  currentStep >= step
                    ? "bg-[#394496] text-white"
                    : "border-[1px] border-[#828282] text-[#828282]"
                }`}
              >
                {step}
              </div>
              {step < 4 && (
                <div
                  className={`line h-[2px] w-full ${
                    currentStep > step ? "bg-[#394496]" : "bg-[#D3DCE6]"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {currentStep === 1 && (
          <form className="mb-[50px] w-full flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[15px] w-full">
              <label className="text-[#696F79] text-lg">Your fullname*</label>
              <input
                className="text-[#696F79] w-full h-[55px] border-[1px] border-[#696F79] rounded-lg pl-[20px]"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-[15px] w-full">
              <label className="text-[#696F79] text-lg">Email address*</label>
              <input
                className="text-[#696F79] w-full h-[55px] border-[1px] border-[#696F79] rounded-lg pl-[20px]"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-[15px] w-full">
              <label className="text-[#696F79] text-lg">Create password*</label>
              <input
                className="text-[#696F79] w-full h-[55px] border-[1px] border-[#696F79] rounded-lg pl-[20px]"
                type="password"
              />
            </div>
            <div className="flex flex-col gap-[15px] w-full">
              <label className="text-[#696F79] text-lg">
                Confirm password*
              </label>
              <input
                className="text-[#696F79] w-full h-[55px] border-[1px] border-[#696F79] rounded-lg pl-[20px]"
                type="password"
              />
            </div>
            <div className="flex items-center gap-[20px]">
              <input className="w-[20px] h-[20px]" type="checkbox" />
              <h1 className="text-[#696F79]">I agree to terms & conditions</h1>
            </div>
            <div
              className="cursor-pointer bg-[#394496] h-[55px] rounded-lg flex items-center justify-center text-lg text-white"
              onClick={handleNext}
            >
              Next
            </div>
          </form>
        )}

        {currentStep === 2 && (
          <form className="mb-[50px] w-full flex flex-col gap-[90px]">
            <div className="w-full flex flex-col items-center justify-center shadow-xl">
              <p className="text-xl font-bold py-[20px]">
                Upload drive’s license
              </p>
              <p>Please upload your valid driver's license</p>
              <label
                htmlFor="gallery-input"
                className="w-[70%] mt-[20px] p-[20px] flex-col gap-[15px] cursor-pointer bg-transparent border-dashed border-[1px] border-[#394496] text-[#394496] rounded-lg flex items-center justify-center"
              >
                <IoCloudUploadOutline className="text-4xl" />
                <input
                  id="gallery-input"
                  type="file"
                  accept="image/*"
                  onChange={handleGallerySelect}
                  className="hidden"
                />
                <p>Drag your file(s) or browse</p>
                <p>Max 10 MB files are allowed</p>
              </label>
              <p className="text-md py-[20px]">
                Only support .jpg, .png and .svg and zip files
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center shadow-xl">
              <p className="text-xl font-bold py-[20px]">
                Upload vehicle registration (Carte Grise)
              </p>
              <p>Please upload your valid driver's license</p>
              <label
                htmlFor="gallery-input"
                className="w-[70%] mt-[20px] p-[20px] flex-col gap-[15px] cursor-pointer bg-transparent border-dashed border-[1px] border-[#394496] text-[#394496] rounded-lg flex items-center justify-center"
              >
                <IoCloudUploadOutline className="text-4xl" />
                <p>Drag your file(s) or browse</p>
                <p>Max 10 MB files are allowed</p>

                <input
                  id="gallery-input"
                  type="file"
                  accept="image/*"
                  onChange={handleGallerySelect}
                  className="hidden"
                />
              </label>
              <p className="text-md py-[20px]">
                Only support .jpg, .png and .svg and zip files
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center shadow-xl">
              <p className="text-xl font-bold py-[20px]">authorization</p>

              <label
                htmlFor="gallery-input"
                className="w-[70%] mt-[20px] p-[20px] flex-col gap-[15px] cursor-pointer bg-transparent border-dashed border-[1px] border-[#394496] text-[#394496] rounded-lg flex items-center justify-center"
              >
                <IoCloudUploadOutline className="text-4xl" />
                <p>Drag your file(s) or browse</p>
                <p>Max 10 MB files are allowed</p>

                <input
                  id="gallery-input"
                  type="file"
                  accept="image/*"
                  onChange={handleGallerySelect}
                  className="hidden"
                />
              </label>
              <p className="text-md py-[20px]">
                Only support .jpg, .png and .svg and zip files
              </p>
            </div>

            <div
              className="w-full cursor-pointer bg-[#394496] h-[55px] rounded-lg flex items-center justify-center text-lg text-white"
              onClick={handleNext}
            >
              Next
            </div>
          </form>
        )}

        {currentStep === 3 && (
          <form className="mb-[50px] items-center max-w-full flex flex-col gap-[80px]">
            <h1 className="max-w-[542.81px] p-[18px] border-[2px] border-[#696F79]">
              To verify your identity, please take a clear selfie while holding
              your driver's license next to your face. Ensure both your face and
              the license details are fully visible and in focus*
            </h1>

            <div className="w-full">
              {isWebcamActive ? (
                <video
                  ref={videoRef}
                  className="w-full max-w-[542.81px] border-[2px] border-[#696F79]"
                  autoPlay
                />
              ) : (
                <img
                  src={galleryImage || img2}
                  alt="Preview"
                  className="w-full max-w-[542.81px] border-[2px] border-[#696F79]"
                />
              )}
            </div>

            <div className="w-full">
              {/* ALLOW CAMERA ACCESS */}
              <div
                className="w-full cursor-pointer bg-[#394496] h-[55px] rounded-lg flex items-center justify-center text-lg text-white"
                onClick={handleCameraAccess}
              >
                ALLOW CAMERA ACCESS
              </div>

              {/* TAKE FROM GALLERY */}
              <label
                htmlFor="gallery-input"
                className="w-full mt-[20px] cursor-pointer bg-transparent border-[1px] border-[#394496] text-[#394496] h-[55px] rounded-lg flex items-center justify-center text-lg"
              >
                TAKE FROM GALLERY
                <input
                  id="gallery-input"
                  type="file"
                  accept="image/*"
                  onChange={handleGallerySelect}
                  className="hidden"
                />
              </label>
            </div>

            <button
              className="w-full cursor-pointer bg-[#394496] h-[55px] rounded-lg flex items-center justify-center text-lg text-white"
              onClick={handleNext}
            >
              Submit
            </button>
          </form>
        )}

        {currentStep === 4 && (
          <div>
            {/* Step 4 content */}
            <h1>Step 4</h1>
            <div
              className="cursor-pointer bg-[#394496] h-[55px] rounded-lg flex items-center justify-center text-lg text-white"
              onClick={handleBack}
            >
              Submit
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
