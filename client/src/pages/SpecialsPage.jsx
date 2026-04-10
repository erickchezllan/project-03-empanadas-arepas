import { useEffect, useState } from "react";

function SpecialsPage() {
  const [specials, setSpecials] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({
    customerName: "",
    comment: "",
    rating: 5,
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/specials`)
      .then((res) => res.json())
      .then((data) => setSpecials(data));

    fetch(`${import.meta.env.VITE_API_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  function handleReviewChange(e) {
    const { name, value } = e.target;
    setReviewForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmitReview(e) {
    e.preventDefault();

    const newReview = {
      ...reviewForm,
      createdAt: new Date().toISOString(),
    };

    try {
      await fetch(`${import.meta.env.VITE_API_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      setReviews((prev) => [...prev, newReview]);
      setReviewForm({ customerName: "", comment: "", rating: 5 });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="page">
      <h1>Specials & Reviews</h1>

      <section style={{ marginBottom: "30px" }}>
        <h2>Today's Specials</h2>
        {specials.map((special) => (
          <div key={special.id} style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "16px" }}>
            <h3>{special.title}</h3>
            <p>{special.details}</p>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Customer Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "16px" }}>
            <h4>{review.customerName} - {review.rating}/5</h4>
            <p>{review.comment}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Add Your Review</h2>
        <form onSubmit={handleSubmitReview}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="customerName"
              value={reviewForm.customerName}
              onChange={handleReviewChange}
              required
            />
          </div>
          <div>
            <label>Comment:</label>
            <textarea
              name="comment"
              value={reviewForm.comment}
              onChange={handleReviewChange}
              required
            />
          </div>
          <div>
            <label>Rating:</label>
            <select
              name="rating"
              value={reviewForm.rating}
              onChange={handleReviewChange}
            >
              <option value={5}>5 stars</option>
              <option value={4}>4 stars</option>
              <option value={3}>3 stars</option>
              <option value={2}>2 stars</option>
              <option value={1}>1 star</option>
            </select>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </section>
    </div>
  );
}

export default SpecialsPage;