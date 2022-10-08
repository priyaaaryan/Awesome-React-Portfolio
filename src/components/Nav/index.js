import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import avatarImage from "../../assets/avatar/PriPri.png";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <img
          src={avatarImage}
          className="my-2"
          style={{ width: "20%" }}
          alt="avatar"
        />
        <a data-testid="link" href="/">
          {/* <span role="img" aria-label="camera">
            {" "}
           
          </span>{" "} */}
          Priyaaaryan Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className="mx-2">
            <a
              data-testid="Resume"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
