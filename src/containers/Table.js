import { connect } from 'react-redux';
import Table from '../components/Table';

const mapStateToProps = (store, props) => {
  return {
    title: 'BAH'
  }
}

export default connect(mapStateToProps)(Table);