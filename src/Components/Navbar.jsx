"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();
  const router=useRouter() //from next/Navigation
  const links = [
    {
      text: "About",
      path: "/about",
    },
    {
      text: "Services",
      path: "/services",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];
  const handler=()=>{
router.push('/about')
  }
  return (
    <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
      <h6 className="text-3xl">
        Next <span className="text-cyan-700">Hero</span>
      </h6>
      <ul className="flex justify-between items-center space-x-4">
        {links?.map((link) => (
          <li className={`${pathName===link.path && 'text-cyan-700'}`} key={link.path}>
            <Link href={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handler} className="bg-white text-cyan-700 p-4">Login</button>
    </nav>
  );
}
