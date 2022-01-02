import React, { forwardRef, useEffect, useState } from 'react';
import Rating from '../../../components/Rating/Rating';

const Form = forwardRef(({ handleChange, submitForm, fields, handleRating, selectedRating }, ref) => {
   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

   useEffect(() => {
      if (Object.values(fields).every(data => data !== '') && selectedRating !== '') {
         setIsButtonDisabled(false);
      } else {
         setIsButtonDisabled(true);
      }
   }, [fields, selectedRating]);

   return (
      <form className="input-fields" noValidate ref={ref}>
         <h2>Please Leave A Review</h2>
         <label htmlFor="name">
            <input type="text" id="name" name="name" value={fields.name} onChange={handleChange} required />
            <span>Name</span>
         </label>
         <label htmlFor="email">
            <input type="text" id="email" name="email" value={fields.email} onChange={handleChange} required />
            <span>Email</span>
         </label>

         <Rating handleRating={handleRating} selectedRating={selectedRating} />

         <label htmlFor="comment">
            <textarea
               name="comment"
               onChange={handleChange}
               value={fields.comment}
               id="comment"
               rows="5"
               required
            ></textarea>
            <span>Comment</span>
         </label>

         <button type="button" onClick={submitForm} disabled={isButtonDisabled}>
            Submit
         </button>
      </form>
   );
});

export default Form;
