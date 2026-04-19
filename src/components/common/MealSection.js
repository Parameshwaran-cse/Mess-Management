import StarRating from './StarRating';

function MealSection({ title, items, alternates, onRate, onAlternate }) {
  return (
    <section className="section">
      <h3>{title}</h3>
      <table className="rating-table">
        <thead>
          <tr><th>Food Item</th><th>Rating</th></tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td><StarRating name={item.id} item={item.name} onRate={onRate} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="alternate-box">
        <label>Alternate dish for least-rated {title.toLowerCase()} item</label>
        <select onChange={(e) => onAlternate(title.toLowerCase(), e.target.value)}>
          <option>Select alternate</option>
          {alternates.map(alt => (
            <option key={alt} value={alt}>{alt}</option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default MealSection;
