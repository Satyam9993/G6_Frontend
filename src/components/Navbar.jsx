import React from 'react'
import { Link } from 'react-router-dom'
import { UserIcon } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const username = useSelector(state => state.user.username);
    return (
        <>
            <header className="text-gray-800 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-black p-2 bg-yellow-300 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/" className="mr-5 hover:text-gray-900">First Link</Link>
                        <Link to="/" className="mr-5 hover:text-gray-900">Second Link</Link>
                        <Link to="/" className="mr-5 hover:text-gray-900">Third Link</Link>
                    </nav>
                    <Link to="/profile" className="ml-0 flex">
                        <h3 className='mr-1 text-gray-500 font-bold'>Hi👋, {username || "Tom"} </h3>
                        <UserIcon className='size-6 text-gray-600' />
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Navbar
