import { ContainerComponent } from "@/app/components/ContainerComponent/containerComponent";
import { Metadata } from "next";

// SEO
export const metadata: Metadata = {
  title: "CreatePost | A World in My Lens",
  description: "",
};

export default async function CreatePost() {
  return (
    <ContainerComponent>
      <div>Create New Post</div>
    </ContainerComponent>
  );
}
