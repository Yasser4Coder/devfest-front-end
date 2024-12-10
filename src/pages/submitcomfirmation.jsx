import { Link } from "react-router-dom";

function TwentyFourIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-6"
    >
      <path
        d="M40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0ZM40 72C22.3269 72 8 57.6731 8 40C8 22.3269 22.3269 8 40 8C57.6731 8 72 22.3269 72 40C72 57.6731 57.6731 72 40 72Z"
        fill="black"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="black"
        fontSize="24"
        fontWeight="bold"
      >
        24
      </text>
    </svg>
  );
}

function ConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <TwentyFourIcon />
        <h1 className="text-2xl font-bold">
          Thanks for submitting your details!
        </h1>
        <p className="text-gray-600">
          We&apos;re reviewing your information and will have your results ready
          within 24 hours. Stay tuned for an update soon!
        </p>
        <button className="bg-[#3B3D8A] hover:bg-[#2E2F6C] text-white px-8 py-2 rounded-full w-full max-w-xs">
          <Link to="/">back to home page</Link>
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
