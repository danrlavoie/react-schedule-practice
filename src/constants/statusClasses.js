import StatusConstants from './status';


export const StatusClassConstants = {
  NORMAL_STRINGS: [
    StatusConstants.ON_TIME,
    StatusConstants.NOW_BOARDING,
    StatusConstants.ALL_ABOARD,
    StatusConstants.ARRIVING,
    StatusConstants.ARRIVED, 
    StatusConstants.END
  ],
  ABNORMAL_STRINGS: [
    StatusConstants.DELAYED,
    StatusConstants.LATE,
    StatusConstants.HOLD
  ],
  ALERT_STRINGS: [
    StatusConstants.CANCELLED,
    StatusConstants.INFO_TO_FOLLOW,
    StatusConstants.TBD,
    StatusConstants.DEPARTED
  ]
};