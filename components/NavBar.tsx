"use client"
import Image from "next/image";
import Logo512 from "@/assets/images/logo512.png"
import Link from "next/link";
import { DrawerBar } from "./Drawer";

export default function NavBar() {

  return (
    <>
      <div className="bg-gradient-to-b from-red-700 from-50% to-transparent to-50% text-white" 
      style={{
        zIndex: 99,
        position: 'sticky',
        top: '0px',
        // transform: `scale(${scale}) translateY(${translateY}px)`,
        // transition: "transform 0.1s ease-out",
      }}
      >
        <div className="h-2"></div>
        <div className="m-auto max-w-[90vw] w-[960px] grid grid grid-cols-3 gap-2" >
          <Link href="#Home">
            <Image src={Logo512} alt="" className=" max-w-[100%] lg:max-w-[50%] m-auto"/> 
          </Link>
          <div className="hidden md:flex my-auto flex-row col-span-2  justify-between gap-4 font-alfa">
            {/* <Link className="navBarLink" href="#Home">Home</Link> */}
            <Link className="navBarLink" href="#AboutUs">About Us</Link>
            <Link className="navBarLink" href="#Butcher&Grocery">Butchery & Grocery</Link>
            <Link className="navBarLink" href="#VisitUs">Visit Us</Link>
            <Link className="navBarLink" href="#Contact">Contact</Link>
          </div>
          <div className="md:hidden text-right col-span-2">
            <DrawerBar/>
          </div>
        </div>
      </div>
    </>
  );
}
