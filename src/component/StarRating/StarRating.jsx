import React from 'react';

const StarRating = ({ rating }) => {
  const maxRating = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0; // Check for half-filled star

  const filledStarIcon = <span className='text-warning'>&#9733;</span>; // Filled star unicode character
  const emptyStarIcon = <span>&#9734;</span>; // Empty star unicode character
  const halfStarIcon = <span className='text-warning'>&#9733;</span>; // Half-filled star unicode character

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(filledStarIcon);
  }
  if (hasHalfStar) {
    stars.push(halfStarIcon);
  }
  for (let i = stars.length; i < maxRating; i++) {
    stars.push(emptyStarIcon);
  }

  return (
    <div className="star-rating">
      {stars.map((star, index) => (
        <span key={index} className="star">
          {star}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
