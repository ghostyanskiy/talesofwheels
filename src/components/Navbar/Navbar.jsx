import { RiMenu3Line, RiCloseFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getNavbar } from "../../features/navbarSlice/navbarSlice";
import { Drawer, List, ListItem } from "@mui/material";
import { useState } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const navbar = useSelector(getNavbar);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar sticky">
      <div className="Navbar__logo">
        <Link to="/">
          <h2>TALES OF WHEELS</h2>
        </Link>
      </div>
      <div className="Drawer">
        <Drawer
          variant="persistent"
          anchor="bottom"
          open={isOpen}
          onClick={toggleMenu}
        >
          <List className={`Navbar__list ${isOpen ? "open" : "close"}`}>
            {navbar.map((value, index) => (
              <ListItem
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  padding: "0",
                }}
                key={index}
                className={`Navbar__list-item ${
                  isOpen ? "animated" : "not-animated"
                }`}
              >
                <Link
                  className={`Navbar__src ${value.class}`}
                  style={{
                    animationName: isOpen ? value.animation : "none",
                    animationDuration: isOpen ? value.duration : "none",
                  }}
                  to={value.link}
                >
                  <span className="counter">0 {index + 1}</span>
                  {value.text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        {isOpen ? (
          <RiCloseFill className="Drawer__logo" onClick={toggleMenu} />
        ) : (
          <RiMenu3Line className="Drawer__logo" onClick={toggleMenu} />
        )}
      </div>
    </div>
  );
}
