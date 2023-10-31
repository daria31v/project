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
        {/* className="dark" */}

        <body className="container mx-auto my-0 text-primary bg-bg-white dark:bg-secondary">
          <Header />
          <main className="container font-main bg-opacity-30 xl:px-24 md:px-10 px-3">
            {children}</main>
         <Footer />
        </body>
      </html>
    </>
  );
}
