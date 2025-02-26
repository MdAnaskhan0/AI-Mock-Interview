import React from 'react';
import Image from 'next/image';
import LogoImage from '/public/logo.svg';
import { UserButton } from '@clerk/nextjs';

function Header() {
    return (
        <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
                <Image src={LogoImage} alt="Logo" width={50} height={50} className="w-12 h-12" />
                <h1 className="text-2xl font-bold text-gray-800">AInterview</h1>
            </div>

            {/* Navigation Links */}
            <nav>
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li className="hover:text-[#7F46FC] transition duration-300 cursor-pointer">Dashboard</li>
                    <li className="hover:text-[#7F46FC] transition duration-300 cursor-pointer">Question</li>
                    <li className="hover:text-[#7F46FC] transition duration-300 cursor-pointer">Upgrade</li>
                    <li className="hover:text-[#7F46FC] transition duration-300 cursor-pointer">How it Works?</li>
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
