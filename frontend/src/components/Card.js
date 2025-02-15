// src/components/Card.js
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      {title && <h2 className="text-2xl font-heading font-bold mb-4">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
