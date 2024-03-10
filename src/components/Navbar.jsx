import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import debounce from 'lodash.debounce';
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";


const downloadresume = async () => {
  const filePath = 'src/assets/resume.pdf'; // Replace with the actual path to your PDF file

  try {
    const response = await fetch(filePath);
    const blob = await response.blob();

    // Create a temporary URL for the Blob object
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.pdf'; // Specify the desired file name

    // Programmatically click the anchor element to trigger the download
    link.click();

    // Clean up the temporary URL and anchor element
    URL.revokeObjectURL(url);
    link.remove();
  } catch (error) {
    console.error('Failed to download the PDF file:', error);
  }
};

const Navbar = React.memo(() => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }, 100); // Adjust the debounce delay as needed
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
 
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
              <li className="hover:text-white text-[18px] font-medium cursor-pointer" alt="Download"
              onClick={() => downloadresume()}
              >Resume</li>
        </ul>
      
      
  

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
        <li className="hover:text-white text-[18px] font-medium cursor-pointer"
              onClick={() => downloadresume()}
              >Resume</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
