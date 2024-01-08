import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <div className="w-full h-10 sticky top-10 bg-dark-blue">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
          <Link 
            href="/"
          >
            <Image 
              src={`${process.env.NEXT_PUBLIC_BASE_URL}images/Ashleigh Kelley.png`}
              width={250}
              height={250} 
              alt="Ashleigh Kelley"
            />
            </Link>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/experience">
                  <p>Experience</p>
                </Link>
              </li>
              <li>
                <Link href="/interests">
                  <p>Interests</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;