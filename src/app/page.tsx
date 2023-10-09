import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-evenly p-8">
      <div className="w-auto">
        <h1 className="text-[30px] bold ">Welcome to us!</h1>
        <h2 className="bold text-xl">The world is wonderful if you notice it!</h2>
        <p className="text-[25px]">This platform is where you can share the beautiful things you saw today.</p>
      </div>        
        <Image src={"/images/photo.jpg"} alt="me" width={300} height={600} />
      </section>
    
  );
}
