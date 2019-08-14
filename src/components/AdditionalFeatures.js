import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';

import { addFeature } from '../actions';

const AdditionalFeatures = props => {
  const buyItem = item => {
    // dispatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className='content'>
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type='1'>
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    store: state.store,
  };
};

export default connect(
  mapStateToProps,
  { addFeature },
)(AdditionalFeatures);
