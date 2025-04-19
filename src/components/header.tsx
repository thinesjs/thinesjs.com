import Link from "next/link";
import Container from "./global/container";
import ExportedImage from "next-image-export-optimizer";

const Navbar = async () => {
    return (
        <header className="px-4 h-16  top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
            <Container reverse>
                <div className="flex items-center justify-center h-full mx-auto md:max-w-screen-xl">
                    <div className="flex items-start">
                        <Link href="/" className="flex items-center gap-2">
                            <ExportedImage
                                src="/assets/logo.svg"
                                alt="thinesjs"
                                width={100}
                                height={100}
                                style={{ filter: "invert(100%)" }}
                            />
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;
