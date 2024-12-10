import React, { useState } from "react";
import logo from "../../images/caat-removebg-preview 1.png";
import img from "../../images/ArrowLeft.png";
import { IoCloudUploadOutline } from "react-icons/io5";
import FileBase64 from "react-file-base64";
import axios from "axios";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [driveLicense, setDriveLicense] = useState("");
  const [vehicleRegistrations, setVehicleRegistrations] = useState("");
  const [authorization, setAuthorization] = useState("");
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/register/newUser", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        cpassword: formData.cpassword,
        driveLicense: driveLicense,
        vehicleRegistrations: vehicleRegistrations,
        authorization: authorization,
      });
      setMessage("Registration successful!");
      setTimeout(() => setMessage(false), 3000);
    } catch (err) {
      setErrorMessage("Failed to register. Please try again.");
      setTimeout(() => setErrorMessage(""), 5000);
    }
  };

  return (
    <div className="w-full mt-5 flex items-center justify-center">
      <div
        className="absolute top-5 left-10 cursor-pointer"
        onClick={handleBack}
      >
        <img src={img} alt="Go Back" />
      </div>
      <div className="flex flex-col items-center gap-5">
        <img src={logo} alt="Logo" />
        <h1 className="text-2xl font-semibold">
          Upgrade to Comprehensive Motor Insurance Plan
        </h1>
        <p className="text-gray-500">
          Fill or update your information, and we’ll get your vehicle covered in
          no time.
        </p>
        <div className="w-full flex items-center">
          {[1, 2, 3, 4].map((step) => (
            <React.Fragment key={step}>
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  currentStep >= step
                    ? "bg-blue-600 text-white"
                    : "border border-gray-400 text-gray-400"
                }`}
              >
                {step}
              </div>
              {step < 4 && (
                <div
                  className={`h-1 flex-1 ${
                    currentStep > step ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          {currentStep === 1 && (
            <div className="mb-10 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 capitalize">first Name*</label>
                <input
                  className="w-full h-14 border border-gray-500 rounded-lg px-4"
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 capitalize">email*</label>
                <input
                  className="w-full h-14 border border-gray-500 rounded-lg px-4"
                  type="email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 capitalize">password*</label>
                <input
                  className="w-full h-14 border border-gray-500 rounded-lg px-4"
                  type="password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 capitalize">
                  confirm password*
                </label>
                <input
                  className="w-full h-14 border border-gray-500 rounded-lg px-4"
                  type="password"
                  onChange={(e) =>
                    setFormData({ ...formData, cpassword: e.target.value })
                  }
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <p className="text-gray-700">I agree to terms & conditions</p>
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 h-14 rounded-lg text-white w-full"
              >
                Next
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="mb-10 flex flex-col gap-10">
              <div className="flex flex-col items-center gap-4 shadow p-6">
                <p className="text-xl font-bold">Driver's License</p>
                <label className="w-3/4 p-4 flex flex-col items-center gap-2 cursor-pointer bg-transparent border-dashed border-2 border-blue-600 text-blue-600 rounded-lg">
                  <IoCloudUploadOutline className="text-4xl" />
                  <FileBase64
                    multiple={false}
                    onDone={({ base64 }) => setDriveLicense(base64)}
                  />
                  <p>Drag your file(s) or browse</p>
                  <p className="text-sm">Max 6 MB, supported: .jpg, .png</p>
                </label>
              </div>
              <div className="flex flex-col items-center gap-4 shadow p-6">
                <p className="text-xl font-bold">Vehicle Registrations</p>
                <label className="w-3/4 p-4 flex flex-col items-center gap-2 cursor-pointer bg-transparent border-dashed border-2 border-blue-600 text-blue-600 rounded-lg">
                  <IoCloudUploadOutline className="text-4xl" />
                  <FileBase64
                    multiple={false}
                    onDone={({ base64 }) => setVehicleRegistrations(base64)}
                  />
                  <p>Drag your file(s) or browse</p>
                  <p className="text-sm">Max 6 MB, supported: .jpg, .png</p>
                </label>
              </div>
              <div className="flex flex-col items-center gap-4 shadow p-6">
                <p className="text-xl font-bold">Authorization</p>
                <label className="w-3/4 p-4 flex flex-col items-center gap-2 cursor-pointer bg-transparent border-dashed border-2 border-blue-600 text-blue-600 rounded-lg">
                  <IoCloudUploadOutline className="text-4xl" />
                  <FileBase64
                    multiple={false}
                    onDone={({ base64 }) => setAuthorization(base64)}
                  />
                  <p>Drag your file(s) or browse</p>
                  <p className="text-sm">Max 6 MB, supported: .jpg, .png</p>
                </label>
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 h-14 rounded-lg text-white w-full"
              >
                Next
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="mb-10 flex flex-col items-center gap-10">
              <p className="p-4 border-2 border-gray-500">
                To verify your identity, please take a clear selfie holding your
                driver's license.
              </p>
              <label className="w-full cursor-pointer bg-blue-600 text-white h-14 rounded-lg flex items-center justify-center">
                Allow Camera Access
                <input type="file" accept="image/*" className="hidden" />
              </label>
              <button
                type="submit"
                className="bg-blue-600 h-14 rounded-lg text-white w-full"
              >
                Submit
              </button>
            </div>
          )}
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {message && <p className="text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
