import { Metadata } from "next";
import { Container } from "../components/Container/container";

// SEO
export const metadata: Metadata = {
  title: "Gallery | A World in My Lens",
  description: "",
};

export default function Gallery() {
  return (
    <Container>
      <div>
        <h1 className="text-[30px] mt-1 mb-1 text-center">Gallery</h1>
      </div>
    </Container>
  );
}
