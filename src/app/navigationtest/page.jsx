"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const NavigationTestPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.replace("/");
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Home
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
