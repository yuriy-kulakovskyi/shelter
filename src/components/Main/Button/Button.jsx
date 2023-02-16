import React from 'react';

const Button = props => {
  return (
    <button className="button">
      {props.content}
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <g clipPath="url(#clip0_4_102)">
        <path d="M9.46494 15.6075C9.20994 15.6975 8.78994 15.6975 8.53494 15.6075C6.35994 14.865 1.49994 11.7675 1.49994 6.51751C1.49994 4.20001 3.36744 2.32501 5.66994 2.32501C7.03494 2.32501 8.24244 2.98501 8.99994 4.00501C9.38527 3.48442 9.88717 3.06131 10.4654 2.76957C11.0437 2.47783 11.6823 2.32558 12.3299 2.32501C14.6324 2.32501 16.4999 4.20001 16.4999 6.51751C16.4999 11.7675 11.6399 14.865 9.46494 15.6075Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_4_102">
        <rect width="18" height="18" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default Button;
