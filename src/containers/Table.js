import { connect } from 'react-redux';
import { loadDepartures } from '../actions';
import Table from '../components/Table';

const mapStateToProps = (store, props) => {
  return {
    title: 'BAH',
    rows: store.csv.bodyRows || []
  }
}

const mapDispatchToProps = dispatch => ({
  loadDepartures: filename => dispatch(loadDepartures(filename))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);