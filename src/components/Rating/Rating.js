import React, { memo, useEffect, useRef } from 'react';
import './Rating.scss';

const rateCount = 5;
const Rating = ({ label = true, handleRating, rating, selectedRating }) => {
   const spanRef = useRef([]);

   /**
    * Trigger displayRating() if rating is passed as props
    * This will display the ratings in the comments
    */
   useEffect(() => {
      if (rating) {
         displayRating();
      }
   }, [rating]);

   /**
    * Removed ratings from the dom, if ratings state is empty
    */
   useEffect(() => {
      if (selectedRating === '') {
         clearRating();
      }
   }, [selectedRating]);

   /**
    * Highlights the star when clicked
    *
    */
   const getCurrentRating = event => {
      const selectedRate = rating ? rating : event.target.getAttribute('data-rate');
      handleRating(selectedRate);
      spanRef.current.forEach(element => {
         if (element.getAttribute('data-rate') <= selectedRate) {
            element.classList.add('checked');
            return;
         }
         element.classList.remove('checked');
      });
   };

   /**
    * Display rating for the existing comments sections
    */
   const displayRating = () => {
      spanRef.current.forEach(element => {
         if (element.getAttribute('data-rate') <= rating) {
            element.classList.add('checked');
            return;
         }
      });
   };

   const clearRating = () => {
      spanRef.current.forEach(element => {
         element.classList.remove('checked');
      });
   };

   return (
      <div className="rating-container">
         {label && <label className="rating-label">Rate: </label>}
         {Array(rateCount)
            .fill('')
            .map((_, index) => (
               <span
                  tabIndex={rating ? '-1' : '4'}
                  key={index}
                  ref={val => (spanRef.current[index] = val)}
                  style={{ pointerEvents: rating ? 'none' : 'all' }}
                  className="fa fa-star"
                  data-rate={index + 1}
                  onClick={getCurrentRating}
               />
            ))}
      </div>
   );
};

export default memo(Rating);
