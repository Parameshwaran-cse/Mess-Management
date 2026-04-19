function MessInfo() {
  return (
    <main className="page">
      <section className="section">
        <h3>Mess Timings</h3>
        <table className="timing-table">
          <thead>
            <tr><th>Meal</th><th>Time</th></tr>
          </thead>
          <tbody>
            <tr><td>Breakfast</td><td>7:30 AM – 9:00 AM</td></tr>
            <tr><td>Lunch</td><td>12:30 PM – 2:00 PM</td></tr>
            <tr><td>Dinner</td><td>7:30 PM – 9:00 PM</td></tr>
          </tbody>
        </table>
      </section>

      <div className="info-grid">
        <div className="info-card">
          <h4>Mess Rules</h4>
          <ul>
            <li>Carry hostel ID card</li>
            <li>No food wastage</li>
            <li>Maintain cleanliness</li>
            <li>Follow timings strictly</li>
          </ul>
        </div>

        <div className="info-card">
          <h4>Contact Information</h4>
          <p><strong>Mess Manager:</strong> Mr. Kumar</p>
          <p><strong>Phone:</strong> 9876543210</p>
          <p><strong>Email:</strong> mess@college.edu</p>
        </div>
      </div>
    </main>
  );
}

export default MessInfo;
