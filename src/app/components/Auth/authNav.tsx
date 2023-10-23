import Link from "next/link";

export const AuthNav = () => {
  return (
    <div className="xl:ml-48 flex gap-[21px] text-secondary font-bold text-base">
      <Link href="/login">Log In</Link>
      <Link href="/registration">Join us</Link>
    </div>
  );
};
