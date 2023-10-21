import Link from "next/link";

export const AuthNav = () => {
  return (
    <div className="flex gap-[21px] text-blue font-bold">
      <Link href="/login">Log In</Link>
      <Link href="/register">Join us</Link>
    </div>
  );
};
