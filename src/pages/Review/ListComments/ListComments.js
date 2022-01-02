import React, { Fragment, memo } from 'react';
import Rating from '../../../components/Rating/Rating';
import './ListComments.scss';
const ListComments = ({ allComments }) => {
   return (
      <section className="list-comments-container">
         {allComments.map((data, index) => (
            <article className="list" key={index}>
               <div>
                  <img
                     src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                     alt="Profile Picture"
                  />
               </div>
               <div className="list-right-section">
                  <div className="top-header">
                     <div className="title-section">
                        <div className="title">{data.name} </div>
                        <div className="sub-title">{data.email}</div>
                     </div>
                     <Fragment>
                        <Rating label={false} rating={data.rating} />
                     </Fragment>
                  </div>
                  <p className="description">{data.comment}</p>
               </div>
            </article>
         ))}
      </section>
   );
};

export default memo(ListComments);
