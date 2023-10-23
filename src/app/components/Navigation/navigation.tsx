import Link from "next/link";

export const Navigation = () => {  
  return (
     <nav className="xl:flex gap-8 justify-evenly font-bold text-base ml-28">
          <Link href="/">Welcome</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blog & Tips</Link>
          <Link href="/partners">Our partners</Link>
        </nav>
  );
};