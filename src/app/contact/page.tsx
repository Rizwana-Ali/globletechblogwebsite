import Link from "next/link"

export default function Contact () {
  return (
    <main className="bg-gray-200 text-blue-950 pt-10 pb-10">
    <div className="container mx-auto my-10 px-4 md:px-0 md:w-2/3 lg:w-1/2">
    <div className="p-6 space-y-8 shadow-xl bg-white rounded-lg">
        <h4 className="text-center font-bold text-3xl md:text-5xl ">
                Contact Me
            </h4>

            <form>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <input
                        type="text"
                        className="bg-white text-black border border-spacing-9 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-teal-400"
                        placeholder="First Name"/>

                
                    <input
                        type="text"
                        className="bg-white text-black border border-spacing-9 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-teal-400"
                        placeholder="Last Name"/>

                    
                    <input
                        type="email"
                        className="bg-white text-black border border-spacing-9 px-4 py-2 rounded col-span-1 md:col-span-2 focus:outline-none focus:ring focus:ring-teal-400"
                        placeholder="Email"/>

                
                    <input
                        type="tel"
                        className="bg-white text-black border border-spacing-9 px-4 py-2 rounded col-span-1 md:col-span-2 focus:outline-none focus:ring focus:ring-teal-400"
                        placeholder="Phone"/>

                
                    <textarea
                        cols= {10}
                        rows= {5}
                        className="bg-white text-black border border-spacing-9 px-4 py-2 rounded col-span-1 md:col-span-2 focus:outline-none focus:ring focus:ring-teal-400"
                        placeholder="Write Your Message"></textarea>

                    
                    <input
                        type="submit"
                        value="Send Message"
                        className="bg-blue-950 text-white font-bold py-2 px-4 rounded col-span-1 md:col-span-2 hover:bg-teal-500 cursor-pointer transition"/>
                </div>
            </form>
            <div className="text-center pt-5 text-white">
                <h1>&copy; 2024 || All Rights Reserved...</h1>
            </div>
        </div>
    </div>
</main>
);
}
 Contact
