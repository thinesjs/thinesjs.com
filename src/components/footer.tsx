import Icons from "@/components/global/icons"
import { Heart } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pb-8 w-full max-w-6xl">
        
            <div className="mt-8 md:flex md:items-center">
                <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                    &copy; {new Date().getFullYear()} thinesjs. All rights reserved.
                </p>
            </div>

        </footer>
    )
}

export default Footer