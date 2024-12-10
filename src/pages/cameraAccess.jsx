import { Camera } from "lucide-react";
import { Link } from "react-router-dom";

export default function CameraAccess() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-between p-6">
        <div className="mt-12 space-y-6">
          <div className="flex flex-col items-start space-y-4">
            <Camera className="h-12 w-12 text-purple-500" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight">
              We'll need to access your camera before continuing
            </h1>
            <p className="text-lg text-gray-600">
              Before you can continue, we just need to verify a few details
              about you.
            </p>
          </div>
        </div>
        <div className="pb-12">
          <Link to="/">
            <button
              variant="default"
              className="mt-4 w-full border border-black rounded-full p-6 text-base font-medium"
            >
              NOT RIGHT NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
