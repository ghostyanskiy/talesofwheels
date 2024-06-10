/* eslint-disable react/no-unescaped-entities */
import Translate from "../../i18n/Translate";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { getSponsors } from "../../features/sponsorsSlice/sponsorsSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";

export default function Home() {
  const sponsors = useSelector(getSponsors);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="Home">
      <div className="Home__offer">
        <div className="Home__offer-top">
          <h2>
            {Translate("HomeTitleFirst")}
            <br />
            {Translate("HomeTitleSecond")}
          </h2>
          <p>{Translate("HomeTextAuthor")}</p>
          <h3>
            {Translate("HomeInfoFirst")}
            <br /> {Translate("HomeInfoSecond")}
          </h3>
        </div>
      </div>
      <div className="Home__info">
        <div className="Home__info-text">
          <h2>{Translate("HomeWhoAre")}</h2>
          <p>
            {Translate("HomeInfoText1")} <br />
            <br /> {Translate("HomeInfoText2")} <br />
            <br /> {Translate("HomeInfoText3")}
            <br />
            <br />
            {Translate("HomeInfoText4")}
          </p>
        </div>
        <div className="Home__info-image">
          <img src="./images/hoonigan.webp" alt="hoonigan" />
        </div>
      </div>
      <div className="Home__sponsors">
        <Slider {...settings}>
          {sponsors.map((val) => (
            <div key={val.id}>
              <img className="Home__sponsors-img" src={val.img} alt={val.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
