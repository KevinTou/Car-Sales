import React from 'react';
import { connect } from 'react-redux';
import { removeAFeature } from '../actions';

const AddedFeature = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeAFeature(item);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className='button' onClick={() => removeFeature(props.feature)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null,
  { removeAFeature },
)(AddedFeature);
