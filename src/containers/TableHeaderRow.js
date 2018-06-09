import { connect } from 'react-redux';
import TableHeaderRow from '../components/TableHeaderRow';

const mapStateToProps = (store, props) => {
  return {
    headerRow: ['TimeStamp','Origin','Trip','Destination','Scheduled Time','Lateness']
  }
}

export default connect(mapStateToProps)(TableHeaderRow);