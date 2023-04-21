import React from "react";
import { Link } from "react-router-dom";

import logo1 from "../../../assets/img/logo1.png";
import logo2 from "../../../assets/img/logo5.png";
import logo3 from "../../../assets/img/logo3.png";

import {
  InstagramImage,
  WhatsappImage,
  TwitterImage,
  FacebookImage,
} from "../../../assets/svg/Svg";

// This component renders the footer of our application.
const Footer = () => {
  return (
    <ul class="flex flex-col border-t border-customGreen bg-white/20">
      <li class="mx-auto my-4 flex flex-row gap-3  sm:gap-12 lg:gap-52">
        {/* Pages section */}
        <ul class="text-xs md:text-sm">
          <li class="py-2 font-medium text-customGreen2">Pages:</li>
          <li class="py-1 text-white/80">
            <Link to="/home" class="block transition-all duration-150">
              Home
            </Link>
          </li>
          <li class="py-1 text-white/80">
            <Link to="/programs" class="block transition-all duration-150">
              Programs
            </Link>
          </li>
          <li class="py-1 text-white/80">
            <Link to="/instructors" class="block transition-all duration-150">
              Instructors
            </Link>
          </li>
          <li class="py-1 text-white/80">
            <Link to="/news" class="block transition-all duration-150">
              News and Articles
            </Link>
          </li>
          <li class="py-1 text-white/80">
            <Link to="/about-us" class="block transition-all duration-150">
              About Us
            </Link>
          </li>
        </ul>

        {/* Ways of contacting us. */}
        <ul class="text-xs md:text-sm">
          <li class="flex flex-col">
            <ul>
              <li class="py-2 font-medium text-customGreen2">Contact Us:</li>
              <li class="py-1 text-white/60 hover:text-white/90">
                09112223344
              </li>
              <li class="py-1 text-white/60 hover:text-white/90">
                01125654585
              </li>
              <li class="py-1 text-white/60 hover:text-white/90">
                alpha.inform@gmail.com
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li class="py-2 font-medium text-customGreen2">Address:</li>
              <li class="py-1  text-white/60 hover:text-white/90">
                Unit 15, Maziar Complex, Modares Alley, <br />
                in front of Khayam, 18th Street, Sari
              </li>
            </ul>
          </li>
        </ul>

        {/* Our social media. */}
        <ul class="text-xs md:text-sm">
          <li class="py-2 pb-3 font-medium text-customGreen2">Social media:</li>
          <li class="py-1 text-sm text-white/80">
            <ul class="flex flex-col gap-6 md:flex-row">
              <li class="flex flex-row gap-6">
                <InstagramImage />
                <WhatsappImage />
              </li>
              <li class="flex flex-row gap-6">
                <TwitterImage />
                <FacebookImage />
              </li>
            </ul>
          </li>
        </ul>

        {/* Our certificates. */}
        <ul class="flex flex-col gap-3">
          <li class="opacity-80 hover:opacity-100">
            <img src={logo1} class="w-16 md:w-16" />
          </li>
          <li class="pl-3 opacity-80 hover:opacity-100">
            <img src={logo2} class="w-20 md:w-24" />
            <p class="text-xs md:text-sm">samandehi.ir</p>
          </li>
          <li class="pl-3 opacity-80 hover:opacity-100 ">
            <img src={logo3} class="w-24 md:w-32" />
          </li>
        </ul>
      </li>
      <li class="w-full border-t border-white/70 py-3  text-center text-xs text-white/80">
        All Rights of This Website are reserved to{" "}
        <span class="text-customGreen2">Alpha Institute</span>.
      </li>
    </ul>
  );
};

export { Footer };
