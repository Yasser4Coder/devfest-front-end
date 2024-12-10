import { Menu } from "lucide-react";
import logoCaat from "../../images/caat-removebg-preview 1.png";
import car from "../../images/image 7.png";

export default function Home2() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Menu className="h-6 w-6" />
        </button>
        <img src={logoCaat} alt="CAAT Logo" className="h-20" />
        <div className="w-10 h-10 rounded-full bg-gray-200" />
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-xl mb-8">Welcome back,</h1>

        {/* Insurance Upgrade Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Left Card */}
          <div className="rounded-3xl bg-[#3F51B5] p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">
                Upgrade your Motor Insurance Plan
              </h2>
              <p className="mb-6 text-white/80">
                Enjoy more coverage on the Comprehensive Motor Insurance
              </p>
              <button className="px-6 py-2 bg-white text-[#3F51B5] rounded-full hover:bg-gray-100">
                Upgrade Now
              </button>
            </div>
            <div className="text-xl flex items-center gap-[12px]">
              <img src={car} alt="Mercedes" />
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl bg-[#4DD0E1] p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">
              Upgrade your Motor Insurance Plan
            </h2>
            <p className="mb-6 text-white/80">
              Enjoy more coverage on the Comprehensive Motor Insurance
            </p>
            <button className="px-6 py-2 bg-white text-[#4DD0E1] rounded-full hover:bg-gray-100">
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Insured Cars */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Insured Cars</h2>
              <button className="text-blue-600 hover:underline">See all</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                  <img
                    src={car}
                    alt="Benz CL250"
                    className="w-full h-32 object-contain mb-4"
                  />
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Benz CL250</h3>
                    <span className="text-sm text-gray-600">3 Claims</span>
                  </div>
                </div>
              ))}
              <button className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300 hover:bg-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                  <span className="text-2xl text-gray-600">+</span>
                </div>
                <span className="text-sm text-gray-600">Add New Car</span>
              </button>
            </div>
          </section>

          {/* Recent Claims */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Claims</h2>
              <button className="text-blue-600 hover:underline">See all</button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">LA002903017</div>
                      <div className="font-medium">
                        Broken Windshield & Side Mirror
                      </div>
                      <div className="text-sm text-gray-500">
                        Lagos Island East | 07 Jun 2023 | 11:34pm
                      </div>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
