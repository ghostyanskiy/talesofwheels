import { useDispatch, useSelector } from "react-redux";
import { fetchNews, getNews } from "../../features/newsSlice/newsSlice";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./News.scss";

export default function News() {
  const news = useSelector(getNews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  console.log(news);
  return (
    <div className="News">
      {news.map((val) => {
        return (
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${val.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              padding: "10px 20px",
            }}
            className="News__content"
            key={val.id}
          >
            <h2>{val.title}</h2>
            <p className="typewriter">
              <Typewriter
                options={{
                  delay: 20,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`${val.description}`)
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(2500)
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
}
