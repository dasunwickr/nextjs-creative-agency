import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
