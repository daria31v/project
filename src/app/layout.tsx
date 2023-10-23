import { Metadata } from "next";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "A World in My Lens",
  description:
    "This is unique platform created for those who appreciate relaxation, travel, and the beauty around them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" >
       {/* className="dark" */}
      
        <body className=" text-primary md:mx-28 sm:mx-6 bg-[#fff] dark:bg-secondary">
          <Header />
          <main className="w-full font-main">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
