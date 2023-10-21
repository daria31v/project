import Link from "next/link";

export const AuthNav = () => {
  return (
    <div className="xl:ml-28 flex gap-[21px] text-secondary font-bold font-general text-base">
      <Link href="/login">Log In</Link>
      <Link href="/register">Join us</Link>
    </div>
  );
};
