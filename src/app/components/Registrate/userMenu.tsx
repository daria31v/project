import Link from "next/link";

export const UserMenu = () => {
  return (
    <div>
      <span>
        Welcome,
        {/* {user.name}{' '} */}
      </span>

      <Link href="/profile">Profile</Link>

      <button type="button">LogOut</button>
    </div>
  );
};
