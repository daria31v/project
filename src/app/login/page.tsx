import { Metadata } from "next";
import { ContainerComponent } from "../components/ContainerComponent/containerComponent";

export default function Login() {
  return (
    <ContainerComponent>
      <div>
        <h1 className="text-[30px] mt-1 mb-1 text-center">Login page</h1>
      </div>
    </ContainerComponent>
  );
}
