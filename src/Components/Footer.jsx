// Footer.jsx
import { FaXTwitter, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-12 lg:px-50 sm:px-30 px-10">
      <div className="md:max-w-7xl md:mx-auto flex flex-wrap md:flex-row justify-between sm:items-center  items-start md:items-start gap-6 md:gap-0">
        
        {/* Left Column - Brand */}
        <div className=" space-y-2">
          <h3 className="text-[15px] leading-[155%] font-medium text-[#FAF7F5]">Brand</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="text-[12px] leading-[155%] font-medium text-[#FAF7F5] transition-colors hover:text-[#FFFFFF] hover:underline">About</a></li>
            <li><a href="#" className="text-[12px] leading-[155%] font-medium text-[#FAF7F5] transition-colors hover:text-[#FFFFFF] hover:underline">Work at Suno</a></li>
            <li><a href="#" className="text-[12px] leading-[155%] font-medium text-[#FAF7F5] transition-colors hover:text-[#FFFFFF] hover:underline">Blog</a></li>
            <li><a href="#" className="text-[12px] leading-[155%] font-medium text-[#FAF7F5] transition-colors hover:text-[#FFFFFF] hover:underline">Pricing</a></li>
          </ul>
        </div>

        {/* Center Column - Support */}
        <div className=" space-y-2">
          <h3 className="text-[16px] leading-[155%] font-medium text-[#FAF7F5]">Support</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="text-[12px] leading-[155%] font-medium text-[#FAF7F5] transition-colors hover:text-[#FFFFFF] hover:underline">Help</a></li>
            <li><a href="#" className="text-[12px] leading-[155%] font-medium text-[#FAF7F5] transition-colors hover:text-[#FFFFFF] hover:underline">Contact Us</a></li>
            <li><a href="#" className="text-[12px] leading-[155%] font-medium text-[#FAF7F5] transition-colors hover:text-[#FFFFFF] hover:underline">Community Guidelines</a></li>
            <li><a href="#" className="text-[12px] leading-[155%] font-medium text-[#FAF7F5] transition-colors hover:text-[#FFFFFF] hover:underline">FAQs</a></li>
            <li><a href="#" className="text-[12px] leading-[155%] font-medium text-[#FAF7F5] transition-colors hover:text-[#FFFFFF] hover:underline">Terms of Service</a></li>
            <li><a href="#" className="text-[12px] leading-[155%] font-medium text-[#FAF7F5] transition-colors hover:text-[#FFFFFF] hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Column - Social Icons */}
        <div className="flex space-x-6 justify-center md:justify-end text-2xl">
          <a href="#" className="hover:opacity-80 transition"><FaXTwitter /></a>
          <a href="#" className="hover:opacity-80 transition"><FaInstagram /></a>
          <a href="#" className="hover:opacity-80 transition"><FaTiktok /></a>
          <a href="#" className="hover:opacity-80 transition"><FaDiscord /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-[12px] leading-[155%] font-medium text-[#FAF7F5] transition-colors hover:text-[#FFFFFF] hover:underline my-16 text-center">
        © 2025 Suno, Inc.
      </div>
    </footer>
  );
}
