import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layouts } from "./components";
import { About, Brands, Contact, History, Home, News } from "./pages";
import Provider from "./i18n/Provider";
import { useState } from "react";
import { LOCALES } from "./i18n/locale";
import { RiArrowUpDoubleFill } from "@remixicon/react";
import { useEffect } from "react";
import CustomCursor from "./components/Cursor";
import "./App.scss";

function App() {
  const [languages, setLanguages] = useState(LOCALES.ENGLISH);
  const [isVisible, setIsVisible] = useState(false);
  const handleChange = (e) => {
    setLanguages(LOCALES[e.target.value]);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="brands" element={<Brands />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <Provider locale={languages}>
      <CustomCursor />
      <div className="App">
        <RouterProvider router={router} />
        <div className="App__background-video">
          <video loop autoPlay muted>
            <source src="./videos/background.mp4" />
          </video>
        </div>
        <div className="App__language">
          <select name="language" id="language" onChange={handleChange}>
            {Object.keys(LOCALES).map((elem) => {
              return (
                <option key={elem} value={elem}>
                  {elem}
                </option>
              );
            })}
          </select>
        </div>
        <div
          className={`scroll-to-top ${isVisible ? "visible" : ""}`}
          onClick={scrollToTop}
        >
          <RiArrowUpDoubleFill />
        </div>
      </div>
    </Provider>
  );
}

export default App;
