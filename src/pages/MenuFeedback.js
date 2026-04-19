import { useState, useEffect } from 'react';
import FoodCard from '../components/common/FoodCard';
import Modal from '../components/common/Modal';
import { api } from '../services/api';

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
  const [modalType, setModalType] = useState('success');
  const [modalMessage, setModalMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRating = (item, value) => {
    setRatings({ ...ratings, [item]: value });
  };

  const handleAlternate = (meal, value) => {
    setAlternates({ ...alternates, [meal]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await api.feedback.submit(ratings, alternates);
      setModalType('success');
      setModalMessage('Thank you for your valuable feedback. We\'ll work on improving the menu based on your ratings.');
      setModalOpen(true);
      setRatings({});
      setAlternates({});
    } catch (error) {
      setModalType('error');
      setModalMessage(error.message || 'Failed to submit feedback. Please try again.');
      setModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <section className="section">
        <h3>Breakfast</h3>
        <div className="food-cards">
          {MEALS.breakfast.items.map(item => (
            <FoodCard key={item.id} item={item} onRate={handleRating} rating={ratings[item.name]} />
          ))}
        </div>
        <div className="alternate-box">
          <label>Suggest alternate for least-rated breakfast item</label>
          <select value={alternates.breakfast || ''} onChange={(e) => handleAlternate('breakfast', e.target.value)}>
            <option value="">Select alternate</option>
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
            <FoodCard key={item.id} item={item} onRate={handleRating} rating={ratings[item.name]} />
          ))}
        </div>
        <div className="alternate-box">
          <label>Suggest alternate for least-rated lunch item</label>
          <select value={alternates.lunch || ''} onChange={(e) => handleAlternate('lunch', e.target.value)}>
            <option value="">Select alternate</option>
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
            <FoodCard key={item.id} item={item} onRate={handleRating} rating={ratings[item.name]} />
          ))}
        </div>
        <div className="alternate-box">
          <label>Suggest alternate for least-rated dinner item</label>
          <select value={alternates.dinner || ''} onChange={(e) => handleAlternate('dinner', e.target.value)}>
            <option value="">Select alternate</option>
            {MEALS.dinner.alternates.map(alt => (
              <option key={alt} value={alt}>{alt}</option>
            ))}
          </select>
        </div>
      </section>

      <button className="btn" onClick={handleSubmit} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Feedback'}
      </button>

      <Modal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalType === 'success' ? 'Feedback Submitted!' : 'Error'}
        message={modalMessage}
        type={modalType}
      />
    </main>
  );
}

export default MenuFeedback;
