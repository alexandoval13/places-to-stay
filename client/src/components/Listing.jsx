import React, { useState, useEffect } from 'react';
import ReacDOM from 'react-dom';

const Listing = (props) => {
  return (
    <a href={props.url}>
      <div>
        <img class="small" src={props.photo}></img>
      </div>
    </a>
  );
};


export default Listing;