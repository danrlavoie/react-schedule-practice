// This is where we store all the status strings for referencing.
// I don't know the exact classifications of all these strings, but I imagine
// that some strings are "normal", some are "abnormal", and some are "alerts".
// So we'll store that data for applying CSS classes.

const StatusConstants = {
  ON_TIME: 'On Time',
  NOW_BOARDING: 'Now Boarding',
  ALL_ABOARD: 'All Aboard',
  DELAYED: 'Delayed',
  CANCELLED: 'Cancelled',
  INFO_TO_FOLLOW: 'Info to follow',
  TBD: 'TBD',
  LATE: 'Late',
  ARRIVING: 'Arriving',
  ARRIVED: 'Arrived',
  DEPARTED: 'Departed',
  HOLD: 'Hold',
  END: 'End',
};

export default StatusConstants;