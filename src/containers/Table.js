import { connect } from 'react-redux';
import Table from '../components/Table';

const mapStateToProps = (store, props) => {
  return {
    title: 'BAH',
    rows: [['a','b','c','d','e','f'],['a','b','c','d','e','f'],['a','b','c','d','e','f']]
  }
}

export default connect(mapStateToProps)(Table);