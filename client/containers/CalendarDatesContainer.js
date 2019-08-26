import { connect } from 'react-redux';
import CalendarDates from '../components/CalendarDates';
import actionCreators from '../actions/CalendarDates';

const mapStateToProps = (state) => ({
  currentMonth: state.currentMonth,
  currentYear: state.currentYear,
  bookedDates: state.bookedDates,
  selectedStartDate: state.selectedStartDate,
  selectedEndDate: state.selectedEndDate,
  startDateView: state.startDateView,
});

const mapDispatchToProps = (dispatch) => ({
  changeSelectedStartDate: (day, month, year) => {
    dispatch(actionCreators.changeSelectedStartDate({ day, month, year }));
  },
  changeSelectedEndDate: (day, month, year) => {
    dispatch(actionCreators.changeSelectedEndDate({ day, month, year }));
  },
});

const CalendarDatesContainer = connect(mapStateToProps, mapDispatchToProps)(CalendarDates);

export default CalendarDatesContainer;