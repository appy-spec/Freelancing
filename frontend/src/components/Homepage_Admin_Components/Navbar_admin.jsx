// import React from 'react';
// import { FaSearch, FaBell, FaHeart, FaQuestionCircle, FaUser } from 'react-icons/fa'; // Icons for the right side
// import { Menu, X } from "lucide-react"; // You may want to continue using lucide-react for the mobile drawer icons
// import { useState } from "react";
// import logo from "../../assets/logo.png"; // Assuming you want to use a logo or text
// import { navItems } from "../../constants"; // Navigation items from your constants

// const Navbar_admin = () => {
//     const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    
//     const toggleNavbar = () => {
//         setMobileDrawerOpen(!mobileDrawerOpen);
//     }

//     return (
//         <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
//             <div className="container px-4 mx-auto relative text-sm">
//                 <div className="flex justify-between items-center">
//                     {/* Left Section: Logo */}
//                     <div className="flex items-center space-x-6">
//                         <img className="h-10 w-10" src={logo} alt="logo" />
//                         <div className="text-orange-600 font-bold text-xl">Freelancia</div>

//                         {/* Menu Items */}
//                         <nav className="hidden lg:flex space-x-4">
//                             {navItems.map((item, index) => (
//                                 <div key={index} className="text-white-700 hover:text-orange-500 cursor-pointer">
//                                     {item.label} <span className="text-xs">&#9662;</span>
//                                 </div>
//                             ))}
//                         </nav>
//                     </div>

//                     {/* Middle Section: Search Bar */}
//                     <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
//                         <FaSearch className="text-gray-500" />
//                         <input
//                             type="text"
//                             placeholder="Search"
//                             className="justify-center bg-transparent outline-none text-gray-700 "
//                         />
//                     </div>

//                     {/* Right Section: Icons */}
//                     <div className="hidden lg:flex items-center space-x-6">
//                         <FaQuestionCircle className="text-white-700 cursor-pointer" />
//                         <FaHeart className="text-white-700 cursor-pointer" />
//                         <FaBell className="text-white-700 cursor-pointer" />
//                         <FaUser className="text-white-700 cursor-pointer" />
//                     </div>

//                     {/* Mobile Drawer Toggle Button */}
//                     <div className="lg:hidden md:flex flex-col justify-end">
//                         <button onClick={toggleNavbar}>
//                             {mobileDrawerOpen ? <X /> : <Menu />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Drawer Menu */}
//                 {mobileDrawerOpen && (
//                     <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
//                         <ul>
//                             {navItems.map((item, index) => (
//                                 <li key={index} className="py-4">
//                                     <a href={item.href}>{item.label}</a>
//                                 </li>
//                             ))}
//                         </ul>
//                         <div className="flex space-x-6">
//                             <a href="#" className="py-2 px-3 border rounded-md">
//                                 Sign In
//                             </a>
//                             <a href="#" className="py-2 px-3 border p-5 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
//                                 Create Account
//                             </a>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar_admin;

import React from 'react';
import { FaSearch, FaBell, FaHeart, FaQuestionCircle, FaUser } from 'react-icons/fa'; // Icons for the right side
import { Menu, X } from "lucide-react"; // Mobile drawer icons
import { useState } from "react";
import logo from "../../assets/logo.png"; // Logo import
import { navItems } from "../../constants"; // Navigation items

const Navbar_admin = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    {/* Left Section: Logo */}
                    <div className="flex items-center space-x-6">
                        <img className="h-10 w-10" src={logo} alt="logo" />
                        <div className="text-orange-600 font-bold text-xl">Freelancia</div>

                        {/* Menu Items */}
                        <nav className="hidden lg:flex space-x-4">
                            {navItems.map((item, index) => (
                                <div key={index} className="text-white-700 hover:text-orange-500 cursor-pointer">
                                    {item.label} <span className="text-xs">&#9662;</span>
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-6 ml-auto">
                        {/* Search Bar */}
                        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
                            <FaSearch className="text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="justify-center bg-transparent outline-none text-gray-700"
                            />
                        </div>

                        {/* Icons */}
                        <div className="hidden lg:flex items-center space-x-6">
                            <FaQuestionCircle className="text-white-700 cursor-pointer" />
                            <FaHeart className="text-white-700 cursor-pointer" />
                            <FaBell className="text-white-700 cursor-pointer" />
                            <FaUser className="text-white-700 cursor-pointer" />
                        </div>
                    </div>

                    {/* Mobile Drawer Toggle Button */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer Menu */}
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className="py-2 px-3 border rounded-md">
                                Sign In
                            </a>
                            <a href="#" className="py-2 px-3 border p-5 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                                Create Account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar_admin;
