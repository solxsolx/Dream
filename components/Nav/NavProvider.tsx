import React from "react";
import Navbar from "./Navbar";

export default function NavProvider({
  children,
}: {
  children: React.ReactNode | React.JSX.Element;
}) {
  return <Navbar>{children}</Navbar>;
}
