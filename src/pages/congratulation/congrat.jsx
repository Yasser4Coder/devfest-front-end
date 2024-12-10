import { Check } from "lucide-react";
import Card from "../../components/Card";
import photo from "../../images/Group 309.png";

export default function CongartPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-[#4CAF50] p-4">
            <Check className="h-6 w-6 text-white" />
          </div>
        </div>
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900">
          Congratulations!
        </h1>

        {/* Description */}
        <p className="text-base text-gray-600">
          Your application has been approved. Please select your
          <br />
          preferred payment method
        </p>

        {/* Offer Selection Text */}
        <p className="pt-4 text-sm text-gray-500">*select your prefer offer</p>

        {/* Payment Methods would go here */}
        <div className="mt-8 space-y-4">
          {/* if yo want to Add payment method options here */}
          
        </div>
      </div>
    </div>
  );
}
