"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import LogoImage from '/public/logo.svg';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

function Header() {

    const path = usePathname();
    useEffect(() => {
        console.log(path);
    },[])

    return (
        <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
                <Image src={LogoImage} alt="Logo" width={50} height={50} className="w-12 h-12" />
                <h1 className="text-2xl font-bold text-gray-800">AInterview</h1>
            </div>

            {/* Navigation Links */}
            <nav>
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <li className={`hover:text-[#7F46FC] transition duration-300 cursor-pointer ${path == '/dashboard' && 'text-[#7F46FC]'}`}>Dashboard</li>

                    <li className={`hover:text-[#7F46FC] transition duration-300 cursor-pointer ${path == '/dashboard/question' && 'text-[#7F46FC]'}`}>Question</li>

                    <li className={`hover:text-[#7F46FC] transition duration-300 cursor-pointer ${path == '/dashboard/upgrade' && 'text-[#7F46FC]'}`}>Upgrade</li>

                    <li className={`hover:text-[#7F46FC] transition duration-300 cursor-pointer ${path == '/dashboard/how' && 'text-[#7F46FC]'}`}>How it Works?</li>
                </ul>
            </nav>

            {/* User Profile Button */}
            <div className="flex items-center">
                <UserButton afterSignOutUrl="/" />
            </div>
        </header>
    );
}

export default Header;
