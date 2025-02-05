
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { LuInstagram } from "react-icons/lu";
import { IoIosCall } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#0a122e] text-gray-400">
      {/* Newsletter Section */}
      <div className="bg-white text-center py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800">Newsletter</h2>
        <p className="text-gray-600 mt-2">
          Subscribe to my newsletter for the latest blog posts, tips, & travel guides. Let&apos;s stay updated!
        </p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Email..."
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-black text-white px-6 py-2 w-full sm:w-auto rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-gray-800">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-center py-6 border-t border-gray-700 px-4 sm:px-6 lg:px-8">

         <div className="flex gap-4 pt-5 justify-center mr-5 mb-4  md:text-center ">
      
              <h3 className="border-2 border-white rounded-full p-2">
                <BsFacebook />
              </h3>
              <h3 className="border-2 border-white rounded-full p-2">
                <LuInstagram />
              </h3>
              <h3 className="border-2 border-white rounded-full p-2">
                <GrLinkedin />
              </h3>
              <h3 className="border-2 border-white rounded-full p-2">
                <IoIosCall />
              </h3>
            </div>
 
        <p className="text-sm">
          {/* © The Technology Website 2024 */}
         Copyright © 2024 by Rizwana Ali. All Rights<br/> Reserved.
        </p>
        <div className="flex flex-wrap justify-center space-x-4 mt-2 text-white">
          <a href="/blog" className="hover:underline">
            Blog
          </a>
          <a href="/category" className="hover:underline">
            Category
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          
        </div>
      
      </div>

      <div className="text-center text-xs text-gray-500 py-4 px-4 sm:px-6 lg:px-8">
      This technology website provides the latest tech updates and guides in an easy-to-understand way<br/> It helps users stay informed about innovations and trends in the tech world.   
      </div>
    </footer>
  );
}
Footer