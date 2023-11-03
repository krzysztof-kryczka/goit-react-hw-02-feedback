import React from 'react';
import PropTypes from 'prop-types';

import css from './Section.module.css';

const Section = props => {
  const { title, children } = props;

  return (
    <div className={css.feedback}>
      <h2 className={css.feedback__title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
