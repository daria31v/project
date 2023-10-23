import Link from "next/link";

export const Navigation = () => {  
  return (
     <nav className="xl:flex grid xl:mt-0 gap-8 font-bold text-base xl:ml-28">
          <Link href="/">Welcome</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blog & Tips</Link>
          <Link href="/partners">Our partners</Link>
        </nav>
  );
};