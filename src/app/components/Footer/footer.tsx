import React from "react";
import facebook from '../../../../public/icon/facebook.svg';
import linkedin from '../../../../public/icon/linkedin.svg';
import twitter from '../../../../public/icon/twitter.svg';
import instagram from '../../../../public/icon/instagram.svg';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container flex mr-auto ml-auto h-[130px] pr-[100px] pl-[100px] pt-7 pb-7 gap-8 justify-between">
      <div className=" font-bold w-[424px] ">
        Create by Gallia est omnis divisa in partes tres, quarum. Fabio vel
        iudice vincam, sunt in culpa qui officia.
      </div>
      {/* <!-- joining --> */}
      <div>
        <h3 className="text-center">Join us</h3>
        <ul className="flex gap-3">
          <li>
            <a href="/instagram" aria-label="instagram">
              <Image src={instagram} alt="instagram Icon" width={20} height={20} />              
            </a>
          </li>
          <li>
            <a href="" aria-label="twitter">
            <Image src={twitter} alt="twitter Icon" width={20} height={20} />
            </a>
          </li>
          <li>
            <a href="" aria-label="facebook">
            <Image src={facebook} alt="facebook Icon" width={20} height={20} />
            </a>
          </li>
          <li>
            <a href="" aria-label="linkedin">
            <Image src={linkedin} alt="linkedin Icon" width={20} height={20} />
            </a>
          </li>
        </ul>
      </div>
      <div>
        {/* subscribe */}
        <h3>Subscribe to the news</h3>
        <form>
          <input type="email" name="email" placeholder="Email" />
          <button type="submit">
            <span className="ml-10 text-blue">News</span>
            {/* <svg width="24" height="24" viewBox="0 0 24 24">
                <use href=""></use>
              </svg> */}
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
