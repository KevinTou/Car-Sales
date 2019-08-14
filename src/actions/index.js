export const addFeature = feature => {
  return {
    type: 'ADD_FEATURE',
    payload: feature,
  };
};

export const removeAFeature = feature => {
  return {
    type: 'REMOVE_FEATURE',
    payload: feature,
  };
};
