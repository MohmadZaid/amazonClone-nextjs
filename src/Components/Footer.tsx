import Image from "next/image";
import logo from "/public/images/logo.png";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
      <Image className="w-24" src={logo} alt="logo" />
      <p className="text-sm -mt-4">
        All Right Reserved  &nbsp;
        <Link
          className="hover:text-white hover:underline decoration-[1px] duration-300 cursor-pointer"
          href="https://zaidportfolio-6f577.web.app/"
          target="_blank"
        >
          @Zaid Shaikh
        </Link>
      </p>
    </div>
  );
};

export default Footer;
