/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import { getFooter } from "../../features/footerSlice/footerSlice";
import { Link } from "react-router-dom";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
  RiPinterestFill,
  RiYoutubeFill,
  RiLinkedinFill,
} from "@remixicon/react";

import "./Footer.scss";
import Translate from "../../i18n/Translate";

export default function Footer() {
  const Icons = [
    <RiFacebookFill key="facebook" />,
    <RiTwitterFill key="twitter" />,
    <RiInstagramFill key="instagram" />,
    <RiPinterestFill key="pinterest" />,
    <RiYoutubeFill key="youtube" />,
    <RiLinkedinFill key="linkedin" />,
  ];

  const footer = useSelector(getFooter);

  return (
    <div className="Footer">
      <h2>
        {Translate("FooterInfo1")} <br /> {Translate("FooterInfo2")}
        <br /> {Translate("FooterInfo3")}
        <br /> {Translate("FooterInfo4")} <br />
        {Translate("FooterInfo5")}
        <br /> {Translate("FooterInfo6")}
        <br />
        {Translate("FooterInfo7")} <br /> {Translate("FooterInfo8")}
      </h2>
      <p>© 2024 Tales of Wheels</p>
      <div className="Footer__links">
        <ul>
          {footer.map((link) => (
            <li key={link.id}>
              <Link to={link.link}>{Translate(link.textKey)}</Link>
            </li>
          ))}
        </ul>
        <ul className="Footer__logos">
          {Icons.map((icon, index) => (
            <li key={index}>
              <Link>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
