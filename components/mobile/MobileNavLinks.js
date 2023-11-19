import Link from "next/link";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BsFillPersonFill, BsFillCalendarDayFill, BsFillPhoneVibrateFill } from "react-icons/bs";
import { HiOutlineDocumentText, HiCog } from "react-icons/hi";
import { GrServices } from "react-icons/gr";
const MobileNavLinks = ({ isOpen, setOpen }) => {
  const navLinks = (
    <nav className="text-white flex justify-center flex-col w-11/12 h-3/4 m-auto">
      <div className="nav-links-top flex justify-between items-center flex-col w-95 h-full text-sm">

        <a
          onClick={() => setOpen(false)}
          className="hover:text-amber-600 transition duration-900 flex my-5 flex items-center"
          href="#"
        >
          <BsFillPersonFill />
          &nbsp; Artists
        </a>
        <a
          onClick={() => setOpen(false)}
          className="hover:text-amber-600 transition duration-900 flex my-5 flex items-center"
          href="#"
        >
          <BsFillCalendarDayFill />
          &nbsp; Appointments
        </a>        <a
          onClick={() => setOpen(false)}
          className="hover:text-amber-600 transition duration-900 flex my-5 flex items-center"
          href="#"
        >
          <BsFillPhoneVibrateFill />
          &nbsp; Contact
        </a>
        <div className="flex items-center flex-col justify-center mt-5 mb-2">
          <a href="http://maps.google.com/?q=560  N Mountain Ave Suite E, Upland, California, 91786">560 N Mountain Ave, Upland, CA 91786</a>
          <a className="mt-2" href="tel:9099825347">(909) 982-5347</a>
        </div>
      </div>
    </nav>
  );
  return (
    <div
      className={`z-10 bg-neutral-900 text-white absolute top-20 left-0 right-0 transition duration-500 ease-in-out ${
        isOpen ? "" : "-translate-y-96"
      }`}
    >
      {isOpen && navLinks}
    </div>
  );
};

export default MobileNavLinks;
