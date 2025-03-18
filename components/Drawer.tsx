"use client"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function DrawerBar() {
  const [open, setOpen ] = useState(false)
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="navBarLink">
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          <div className="flex flex-col">
            <Link className="text-center font-alfa text-black text-2xl py-5" onClick={handleClose} href="#AboutUs">About Us</Link>
            <Link className="text-center font-alfa text-black text-2xl py-5" onClick={handleClose} href="#Butcher&Grocery">Butchery & Grocery</Link>
            <Link className="text-center font-alfa text-black text-2xl py-5" onClick={handleClose} href="#VisitUs">Visit Us</Link>
            <Link className="text-center font-alfa text-black text-2xl py-5" onClick={handleClose} href="#Contact">Contact</Link>
          </div>
        </DrawerHeader>
        <DrawerFooter className="mr-5 mb-5 ml-auto">
          <DrawerClose className="p-2  border-2 rounded-xl ">
            <X/>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
