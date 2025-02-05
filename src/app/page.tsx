
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-200 text-blue-950 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12">
        <div className="text-center md:text-left max-w-lg">
          <h1 className="font-bold text-3xl md:text-4xl leading-tight">
            Transform, Build, and Manage<br /> your Technology
          </h1>
          <p className="mt-5 text-gray-700">
            Unlock the full potential of your business by transforming, building, and managing your technology infrastructure.
          </p>
        </div>
        <div className="mt-10 md:mt-0">
          <Image src="/technology3.png" width={500} height={300} alt="Technology" className="rounded-lg" />
        </div>
      </div>

      <div className="text-center py-12 px-6">
        <h2 className="font-bold text-3xl">Welcome to Global Tech.</h2>
        <p className="mt-5 text-gray-700 leading-relaxed">
          Welcome to Global Tech, your gateway to cutting-edge innovation and technology solutions. We specialize in delivering world-class
          services and products that drive efficiency, enhance performance, and empower businesses to thrive in the digital age.
          <br />Join us in shaping the future with technology that knows no boundaries.
        </p>
      </div>

      <div className="mt-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-8">Our Featured Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Image src="/aiimage.png" width={400} height={250} alt="AI Analytics" className="rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Revolutionizing Decision-Making: AI-Powered Analytics in 2025</h3>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Image src="/aiimage2.jpg" width={400} height={250} alt="Autonomous AI" className="rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Recent Developments in Autonomous Agentic AI</h3>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Image src="/aiimage3.jpg" width={400} height={250} alt="AI Chatbots" className="rounded-lg" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">The Role of Autonomous Agents and Chatbots in Modern Business</h3>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
Home























