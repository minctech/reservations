const selectedStartDate = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_START_DATE':
      return action.selectedStartDate || null;
    default:
      return state;
  }
};

const selectedEndDate = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_END_DATE':
      return action.selectedEndDate || null;
    default:
      return state;
  }
};

export default { selectedStartDate, selectedEndDate };
