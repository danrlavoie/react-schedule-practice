import { connect } from 'react-redux';
import { loadCSV } from '../actions';
import Table from '../components/Table';

const mapStateToProps = (store, props) => {
  return {
    title: 'BAH',
    rows: [['a','b','c','d','e','f'],['a','b','c','d','e','f'],['a','b','c','d','e','f']]
  }
}

const mapDispatchToProps = dispatch => ({
  loadCSV: filename => dispatch(loadCSV(filename))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);