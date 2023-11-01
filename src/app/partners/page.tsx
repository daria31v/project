import { Metadata } from "next";
import { ContainerComponent } from "../components/ContainerComponent/containerComponent";

// SEO
export const metadata: Metadata = {
  title: "Partners | A World in My Lens",
  description: "",
};

export default function Partners() {
  return (
    <ContainerComponent>
      <div>
        <h1 className="text-[30px] mt-1 mb-1 text-center">Our partners</h1>
      </div>
    </ContainerComponent>
  );
}
