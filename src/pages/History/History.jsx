/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import { getHistory } from "../../features/historySlice/historySlice";
import Translate from "../../i18n/Translate";
import "./History.scss";

export default function History() {
  const history = useSelector(getHistory);
  return (
    <div className="History">
      {history.map((val) => {
        return (
          <div className="History__content" key={val.id}>
            <h2
              style={{
                backgroundImage: `url(${val.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              {Translate(`${val.textKey1}`)}
            </h2>
            <p>{Translate(`${val.textKey2}`)}</p>
          </div>
        );
      })}
    </div>
  );
}
