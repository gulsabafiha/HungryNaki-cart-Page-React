import React from "react";
import "./Comment.css";

const Comment = () => {
  return (
    <div className="container">
      <textarea className="comment-box" placeholder="Order Comments"></textarea>
      <div className='row mb-5'>
        <div className='col-lg-3'>
        <input className="input-field" placeholder="Pre-Order"></input>
        </div>
        <div className='col-lg-9'>
        <button class="button  primary ">
          Place Order.Pay Tk.2039.Proceed To Online Payment
        </button>
        </div>
        
      </div>
    </div>
  );
};
export default Comment;
