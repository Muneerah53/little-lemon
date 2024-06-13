interface Testimonial {
  name: string;

  comment: string;
  img?: string;
}

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Lucas W.',

      img: 'person1.jpeg',
      comment:
        'Great place for Mediterranean cuisine lovers. The dishes are thoughtfully prepared, and the presentation is beautiful. The vegetarian options are excellent.',
    },
    {
      name: 'Isabella G.',

      img: 'person2.jpeg',
      comment:
        'Wonderful flavors and a warm, inviting ambiance. The pita bread is always fresh and pairs perfectly with their dips. Definitely a place to return to!',
    },
    {
      name: 'David P.',

      img: 'person3.jpeg',
      comment:
        'Little Lemon is a standout restaurant in Chicago. The menu is creative, and every dish is bursting with flavor. Highly recommend!',
    },
  ];

  const renderTestimonialCard = (person: Testimonial) => {
    return (
      <div className="testimonials-card">
        <div className="testimonials-card__header">
          <img
            src={`/imgs/${person.img}`}
            className="testimonials-card__image"
            alt={`${person.name}`}
          />
          <div className="testimonials-card__info">
            <h3>{person.name}</h3>
            <p>{'★★★★★'}</p>
          </div>
        </div>
        <div className="testimonials-card__content">
          <p>{person.comment}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((person, _idx) => {
          return renderTestimonialCard(person);
        })}
      </div>
    </section>
  );
};
