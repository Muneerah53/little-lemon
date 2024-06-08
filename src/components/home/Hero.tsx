export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.{' '}
        </p>
        <button className="primaryBtn">Book A Table</button>
      </div>
      <div className="hero__image">
        {' '}
        <img src={'/imgs/restauranfood.jpg'} alt="Little Lemon restaurant" />
      </div>
    </div>
  );
};
