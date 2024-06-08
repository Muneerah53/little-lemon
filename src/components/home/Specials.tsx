import { Link } from 'react-router-dom';
import { ReactComponent as DeliveryIcon } from '../../assests/icons/delivery.svg';
interface SpecialsDish {
  name: string;
  price: number;
  description: string;
  img: string;
}
export const Specials = () => {
  const specials: SpecialsDish[] = [
    {
      name: 'Greek Salad',
      price: 12.99,
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      img: 'greek-salad.jpg',
    },
    {
      name: 'Bruchetta',
      price: 16.99,
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.',
      img: 'bruchetta.svg',
    },
    {
      name: 'Lemon Dessert',
      price: 6.99,
      description:
        'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      img: 'lemon-dessert.jpg',
    },
  ];

  const renderSpecials = (dish: SpecialsDish) => {
    return (
      <div className="specials-item">
        <img src={'/imgs/' + dish.img} alt={dish.name} />
        <div className="specials-item__content">
          <div className="specials-item__header">
            <h3>{dish.name}</h3>
            <p>{`$${dish.price}`}</p>
          </div>
          <div className="specials-item__description">
            <p>{dish.description}</p>
          </div>
          <Link className="specials-item__button" to="/#order">
            Order a delivery <DeliveryIcon />
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className="specials">
      <div className="specials-title">
        <h2>Specials</h2>
        <button className="primaryBtn">Online Menu</button>
      </div>

      <div className="specials-list">
        {specials.map((dish) => renderSpecials(dish))}
      </div>
    </div>
  );
};
