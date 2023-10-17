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
      <html lang="en">
        <body className="flex flex-col min-h-screen text-black">
          <Header />
          <main className="container flex-grow ">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
