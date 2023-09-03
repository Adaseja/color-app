import React from 'react';
import './title.css';

const colorClasses = {
  red: 'red',
  blue: 'blue',
  green: 'green',
};

const Title = (props) => {
  const titleClass = colorClasses[props.color] || ''; // Use an empty string if the color is not recognized

  return (
    <h1 className={titleClass}>Tytuł Strony</h1>
  );
}

export default Title;
