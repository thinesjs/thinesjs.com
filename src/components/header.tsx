import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Container from "./global/container";
import Icons from "./global/icons";
import Image from "next/image";

const Navbar = async () => {
    return (
        <header className="px-4 h-16  top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
            <Container reverse>
                <div className="flex items-center justify-center h-full mx-auto md:max-w-screen-xl">
                    <div className="flex items-start">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/assets/logo.svg"
                                alt="thinesjs"
                                width={100}
                                height={100}
                                // className="w-4 h-4"
                                style={{ filter: 'invert(100%)' }}
                            />
                        </Link>
                    </div>
                    {/* <nav className="hidden md:block items-center">
                        <ul className="flex items-center justify-center gap-8">
                            <Link href="/" className="hover:text-foreground/80 text-sm">Home</Link>
                            <Link href="/about" className="hover:text-foreground/80 text-sm">About</Link>
                            <Link href="/projects" className="hover:text-foreground/80 text-sm">Projects</Link>
                            <Link href="/blog" className="hover:text-foreground/80 text-sm">Blog</Link>
                        </ul>
                    </nav> */}
                </div>
            </Container>
        </header>
    )
};

export default Navbar