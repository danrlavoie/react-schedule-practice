import { connect } from 'react-redux';
import TableHeaderRow from '../components/TableHeaderRow';

const mapStateToProps = (store, props) => {
  return {
    headerRow: store.csv.headerRow || []
  }
}

export default connect(mapStateToProps)(TableHeaderRow);