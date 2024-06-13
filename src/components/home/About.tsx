export const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Based in Chicago, Illinois, Little Lemon is a charming neighborhood
          bistro featuring a locally-sourced menu with daily specials, drawing
          inspiration from Italian, Greek, and Turkish culture. With a rustic
          and relaxed atmosphere and moderate prices, it is popular any time of
          the day.
        </p>
        <p>
          {' '}
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant. To craft the menu, Mario relies on family recipes and his
          experience as a chef in Italy. Adrian does all the marketing for the
          restaurant and led the effort to expand the menu beyond classic
          Italian to incorporate additional cuisines from the Mediterranean
          region.
        </p>
      </div>

      <div className="about__images">
        <img
          src="/imgs/Mario and Adrian A.jpg"
          alt="Mario and Adrian"
          className="chefsImage"
        />
        <img
          src="/imgs/restaurant.jpg"
          alt=" Little Lemon restaurant"
          className="restaurantImage"
        />
      </div>
    </section>
  );
};
