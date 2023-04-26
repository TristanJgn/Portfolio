import "./NavigationDots.scss";

function NavigationDots({ active }) {
  return (
    <div className="navigation-sidebar">
      {["home", "about", "skills", "projects", "contact"].map((item, index) => (
        // eslint-disable-next-line
        <a
          className={`navigation-sidebar__dot ${
            active === item ? "navigation-sidebar__dot--active" : ""
          }`}
          href={`#${item}`}
          key={item + index}
        />
      ))}
    </div>
  );
}

export default NavigationDots;
