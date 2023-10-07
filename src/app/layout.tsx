import { Metadata } from "next";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
// add global.css
// add fonts
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// SEO
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
        <body className={inter.className}>
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
