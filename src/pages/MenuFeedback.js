import { useState } from 'react'; //changed
import FoodCard from '../components/common/FoodCard';
import Modal from '../components/common/Modal';

const MEALS = {
  breakfast: {
    items: [
      { id: 'b-idli', name: 'Idli' },
      { id: 'b-dosa', name: 'Dosa' }
    ],
    alternates: ['Pongal', 'Upma', 'Rava Dosa']
  },
  lunch: {
    items: [{ id: 'l-sambar', name: 'Sambar' }],
    alternates: ['Dal Fry', 'Kootu', 'Veg Kurma']
  },
  dinner: {
    items: [{ id: 'd-chapati', name: 'Chapati' }],
    alternates: ['Veg Stew', 'Paneer Curry', 'Channa Masala', 'Mixed Veg Gravy']
  }
};

function MenuFeedback() {
  const [ratings, setRatings] = useState({});
  const [alternates, setAlternates] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleRating = (item, value) => {
    setRatings({ ...ratings, [item]: value });
  };

  const handleAlternate = (meal, value) => {
    setAlternates({ ...alternates, [meal]: value });
  };

  const handleSubmit = () => {
    setModalOpen(true);
  };

  return (
    <main className="page">
      <section className="section">
        <h3>Breakfast</h3>
        <div className="food-cards">
          {MEALS.breakfast.items.map(item => (
            <FoodCard key={item.id} item={item} onRate={handleRating} />
          ))}
        </div>
        <div className="alternate-box">
          <label>Suggest alternate for least-rated breakfast item</label>
          <select onChange={(e) => handleAlternate('breakfast', e.target.value)}>
            <option>Select alternate</option>
            {MEALS.breakfast.alternates.map(alt => (
              <option key={alt} value={alt}>{alt}</option>
            ))}
          </select>
        </div>
      </section>

      <section className="section">
        <h3>Lunch</h3>
        <div className="food-cards">
          {MEALS.lunch.items.map(item => (
            <FoodCard key={item.id} item={item} onRate={handleRating} />
          ))}
        </div>
        <div className="alternate-box">
          <label>Suggest alternate for least-rated lunch item</label>
          <select onChange={(e) => handleAlternate('lunch', e.target.value)}>
            <option>Select alternate</option>
            {MEALS.lunch.alternates.map(alt => (
              <option key={alt} value={alt}>{alt}</option>
            ))}
          </select>
        </div>
      </section>

      <section className="section">
        <h3>Dinner</h3>
        <div className="food-cards">
          {MEALS.dinner.items.map(item => (
            <FoodCard key={item.id} item={item} onRate={handleRating} />
          ))}
        </div>
        <div className="alternate-box">
          <label>Suggest alternate for least-rated dinner item</label>
          <select onChange={(e) => handleAlternate('dinner', e.target.value)}>
            <option>Select alternate</option>
            {MEALS.dinner.alternates.map(alt => (
              <option key={alt} value={alt}>{alt}</option>
            ))}
          </select>
        </div>
      </section>

      <button className="btn" onClick={handleSubmit}>Submit Feedback</button>

      <Modal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Feedback Submitted!"
        message="Thank you for your valuable feedback. We'll work on improving the menu based on your ratings."
        type="success"
      />
    </main>
  );
}

export default MenuFeedback;
