import { useState, useEffect } from 'react';

function StarRating({ name, item, onRate, rating: initialRating }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(initialRating || 0);

  useEffect(() => {
    setRating(initialRating || 0);
  }, [initialRating]);

  const handleClick = (star) => {
    setRating(star);
    onRate(item, star);
  };

  return (
    <div className="star-rating">
      {[5, 4, 3, 2, 1].reverse().map(star => (
        <span key={star}>
          <input 
            type="radio" 
            id={`${name}${star}`} 
            name={name}
            value={star}
          />
          <label 
            htmlFor={`${name}${star}`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => handleClick(star)}
            style={{ color: star <= (hover || rating) ? '#E0A458' : '#ddd' }}
          >
            ★
          </label>
        </span>
      ))}
    </div>
  );
}

export default StarRating;
