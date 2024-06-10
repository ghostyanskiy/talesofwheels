/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import { getFAQ } from "../../features/faqSlice/faqSlice";
import "./About.scss";
import Translate from "../../i18n/Translate";

export default function About() {
  const faq = useSelector(getFAQ);
  return (
    <div className="About">
      <h2 className="About__title">{Translate("AboutUs")}</h2>
      <div className="About__main">
        <div className="About__content">
          <p>{Translate("AboutUs1")}</p>
          <img src="./images/bugatti.png" alt="" />
          <p>{Translate("AboutUs2")}</p>
        </div>
      </div>
      <div className="About__faqs">
        <h2>FAQs</h2>
        <ul>
          {faq.map((val) => {
            return (
              <li key={val.id}>
                <h3>{Translate(`${val.textKey1}`)}</h3>
                <span>{Translate(`${val.textKey2}`)}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
