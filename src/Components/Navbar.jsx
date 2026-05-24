import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="flex items-center gap-5 justify-between max-w-[1330px] mx-auto">
                <div className="">
                    <h1 className="text-xl font-bold">
                        <Link href="/" className="">
                            My App
                        </Link>
                    </h1>
                </div>
                <div className="*:bg-white *:text-black *:rounded-md *:px-5 *:py-1.5 *:hover:underline flex gap-5">
                    <Link href="/" className="">
                        Home
                    </Link>
                    <Link href="/foods" className="">
                        Foods
                    </Link>
                    <Link href="/reviews" className="">
                        Reviews
                    </Link>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;