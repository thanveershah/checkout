import React, { useEffect, useRef, useState } from 'react';
import Form from './Form/Form';
import ListComments from './ListComments/ListComments';
import './Review.scss';
import sampleComments from './sample-comments.json';

const initialValues = {
   name: '',
   email: '',
   comment: '',
};

const Review = () => {
   const formRef = useRef(null);
   const [allComments, setAllComments] = useState(sampleComments);
   const [selectedRating, setSelectedRating] = useState('');
   const [fields, setFields] = useState(initialValues);

   useEffect(() => {
      window.scrollTo(0, document.body.scrollHeight);
   }, [allComments]);

   const handleChange = event => {
      const { name, value } = event.target;
      setFields(prev => ({
         ...prev,
         [name]: value,
      }));
   };

   /**
    * Sets the value of the Rating
    *
    * @param {String} value
    */
   const handleRating = value => {
      setSelectedRating(value);
   };

   const submitForm = () => {
      setAllComments([...allComments, { ...fields, rating: selectedRating }]);
      clearForm();
   };

   const clearForm = () => {
      setFields(initialValues);
      setSelectedRating('');
      // // Resets the ratings
      // formRef.current.querySelectorAll('.fa-star.checked').forEach(element => {
      //    element.classList.remove('checked');
      // });
   };

   return (
      <section className="review-container">
         <Form
            handleChange={handleChange}
            fields={fields}
            submitForm={submitForm}
            handleRating={handleRating}
            selectedRating={selectedRating}
            ref={formRef}
         />
         <ListComments allComments={allComments} />
      </section>
   );
};

export default Review;
