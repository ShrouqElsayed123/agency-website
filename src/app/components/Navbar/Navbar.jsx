import Link from 'next/link';
import React from 'react'

const Navbar = () => {
      const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "About",href: "/"  }, 
    { name: "Contact", href: "/contact" },
    { name: "Dashboard",href: "/"  } 
  ];
  return (
   <nav>
    <h1>SHA</h1>
    <ul>
        {
            links.map((link)=>(
                <li  key={link.name}>
                    <Link href={link.href}  >{link.name}</Link>
                </li>
            ))
        }
    </ul>
   </nav>
  )
}

export default Navbar
