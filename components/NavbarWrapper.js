"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { useAuth } from "@/context/AuthContext";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const { user } = useAuth();

  const shouldShowNav = user && !["/login", "/signup"].includes(pathname);

  return shouldShowNav ? <Navbar /> : null;
}
