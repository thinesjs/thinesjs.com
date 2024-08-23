import Footer from '@/components/footer';
import Navbar from '@/components/header';
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
};

export default HomeLayout