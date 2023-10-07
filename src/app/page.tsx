import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Welcome!</h1>
        <h2>Slogan</h2>
        <Image src={"/images/photo.jpg"} alt="me" width={300} height={600} />
      </div>
    </main>
  );
}
