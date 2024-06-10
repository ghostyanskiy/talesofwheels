import { useSelector } from "react-redux";
import Translate from "../../i18n/Translate";
import { getContact } from "../../features/contactSlice/contactSlice";
import "./Contact.scss";

export default function Contact() {
  const contact = useSelector(getContact);
  return (
    <div className="Contact">
      <div className="Contact__info">
        <h2>{Translate("ContactTitle")}</h2>
        <ul className="Contact__ul">
          {contact.map((val) => {
            return (
              <li key={val.id}>
                <h2>{Translate(`${val.textKey1}`)}</h2>
                <span></span>
                <p>{Translate(`${val.textKey2}`)}</p>
                <p>{Translate(`${val.textKey3}`)}</p>
                <p>{Translate(`${val.textKey4}`)}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
