import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <nav className=" bg-[#0a122e] text-white flex items-center justify-around px-4 md:px-10  py-3">
            {/* Logo Section */}
            <div className="flex  items-center gap-2">
                <Image src={"/logo.png"} width={250} height={200} alt="logo" />
                
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-2xl">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/category">Category</Link>
                </li>
                <li>
                    <Link href="/contact">Contact us</Link>
                </li>
                
            </ul>

            

            {/* Mobile Hamburger Menu */}
            <Sheet>
                <SheetTrigger className="md:hidden">
                    <Menu className="text-3xl" />
                </SheetTrigger>
                <SheetContent side="right" className="bg-white text-green-900 p-6 ">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>
                            <ul className="mt-6 space-y-6 text-3xl font-semibold ">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/category">Category</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact us</Link>
                                </li>
                               
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
Header();