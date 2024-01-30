'use client'
import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="sticky lg:mx-10">
        <div className="container h-full">
          <div className="flex justify-between items-center h-full">
          <Link href="/">
            <Image 
              src={`${process.env.NEXT_PUBLIC_BASE_URL}images/Ashleigh Kelley.png`}
              width={250}
              height={250} 
              alt="Ashleigh Kelley"
            />
            </Link>
            <ul className="hidden md:flex gap-x-6 text-sky-blue">
              <li className="hover:text-orange">
                <Link href="/">
                  <p>About</p>
                </Link>
              </li>
              <li className="hover:text-orange">
                <Link 
                  className={pathname == "/experience" ? "underline decoration-orange decoration-2" : ""}
                  href="/experience"
                >
                  <p>Experience</p>
                </Link>
              </li>
              <li className="hover:text-orange">
                <Link 
                  className={pathname == "/interests" ? "underline decoration-orange decoration-2" : ""}
                  href="/interests"
                >
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