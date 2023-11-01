import { Container } from "@/app/components/Container/container";
import { Metadata } from "next";

// SEO
export const metadata: Metadata = {
  title: "CreatePost | A World in My Lens",
  description: "",
};

export default async function CreatePost() {
  return (
    <Container>
      <div>Create New Post</div>
    </Container>
  );
}
