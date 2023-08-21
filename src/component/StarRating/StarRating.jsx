import React from 'react';

const StarRating = ({ rating }) => {
  const maxRating = 5;
  // firts it make the value of the star is round value if the value is 4.5 so it make only 4
  const filledStars = Math.floor(rating);
  // It return ture or false value
  const hasHalfStar = rating % 1 !== 0; // Check for half-filled star

  const filledStarIcon = <span className='text-warning'>&#9733;</span>; // Filled star unicode character
  const emptyStarIcon = <span className='text-gray'>&#9733;</span>; // Empty star unicode character
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
