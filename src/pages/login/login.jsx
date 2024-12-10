import React, { useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../images/caat-removebg-preview 1.png";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white p-4 md:p-6">
      <div className="mx-auto max-w-md">
        <div className="mb-8">
          <Link to={"/"} className="inline-flex text-gray-600">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </div>

        <div className="mb-12 text-center">
          <img
            src={logo}
            alt="CAAT Logo"
            width={180}
            height={80}
            className="mx-auto mb-4"
          />
          <div className="relative mb-8 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Upgrade to Comprehensive
              <br />
              Motor Insurance Plan
              <Star className="ml-2 inline-block h-6 w-6 text-indigo-600" />
            </h1>
          </div>
          <p className="text-gray-600">
            Fill or Update your information and we&apos;ll get your vehicle
            covered in no time.
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 "
            >
              Email address*
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              required
              className="block w-full rounded-md border border-gray-300 px-4 py-3 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password*
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                className="block w-full rounded-md border border-gray-300 px-4 py-3 text-sm "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
              >
                Show
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600"
            />
            <label
              htmlFor="terms"
              className="text-sm leading-none text-gray-600"
            >
              I agree to terms & conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3F51B5] text-white py-2 font-semibold rounded-md hover:bg-[#303F9F]"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
