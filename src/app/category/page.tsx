import Link from "next/link"
import Image from 'next/image';


const categories = [
  {
    title: "Robotics and Automation",
    description: "Manufacturing robots, autonomous vehicles, and AI-powered automation.",
    image: "/rpa.png",
  },
  {
    title: "Augmented Reality (AR) and Virtual Reality (VR)",
    description: "Immersive gaming, training simulations, and virtual collaboration tools.",
    image: "/downloadvr.png",
  },
  {
    title: "Software Development and Programming",
    description: "App development, open-source frameworks, and DevOps.",
    image: "/software1.png",
  },
  {
    title: "Biotechnology",
    description: "Genetic engineering, medical devices, and bioinformatics.",
    image: "/biotech.png",
  },
  {
    title: "Renewable Energy and Green Tech",
    description: "Solar power, wind turbines, and sustainable technologies.",
    image: "/greentech.png",
  },
];

export default function Category() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section: Categories */}
        <div className="mt-10 col-span-2 space-y-6">
          {categories.slice(0, 5).map((category, index) => (
            <div
              key={index}
              className="flex bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={100}
                height={100}
                className="rounded-lg flex-shrink-0"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: About and Top Stories */}
        <div className="space-y-6 mt-10">
          {/* About Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-gray-600">
              Welcome to my blog! Here, I explore the latest trends and insights across various technology domains. Stay updated with my posts and share your thoughts.
            </p>
          </div>

          {/* Top Stories Card */}

          <div className="bg-white rounded-lg shadow p-6 ">
            <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
            <ul className="space-y-4">
              <li className="border-b pb-2 text-gray-700 hover:text-gray-900 hover:underline cursor-pointer">
                Autonomous Agentic AI
              </li>
              <li className="border-b pb-2 text-gray-700 hover:text-gray-900 hover:underline cursor-pointer">
                The Evolution of Artificial Intelligence
              </li>
              <li className="border-b pb-2 text-gray-700 hover:text-gray-900 hover:underline cursor-pointer">
                Why DeepSeek is the Game-Changer in Artificial Intelligence?
              </li>
              <li className="border-b pb-2 text-gray-700 hover:text-gray-900 hover:underline cursor-pointer">
                The Rise of Blockchain in Digital Identity
              </li>
              <li className="border-b pb-2 text-gray-700 hover:text-gray-900 hover:underline cursor-pointer">
                The Rise of AI-Driven Cybersecurity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
Category

