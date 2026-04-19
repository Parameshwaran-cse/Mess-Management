import StarRating from './StarRating';

function FoodCard({ item, onRate, rating }) {
  return (
    <div className="food-card">
      <h4>{item.name}</h4>
      <StarRating name={item.id} item={item.name} onRate={onRate} rating={rating} />
    </div>
  );
}

export default FoodCard;
