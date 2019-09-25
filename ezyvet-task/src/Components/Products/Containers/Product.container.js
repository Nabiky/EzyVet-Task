import { bindActionCreators } from 'redux';
import { connectWithLifecycle } from 'react-lifecycle-component';

import { showData } from '../../../Store/actionCreators/catalogActions';

import Products from '../Products';

const mapDispatchToProps = dispatch => bindActionCreators({
     componentDidMount: () => showData() }, dispatch);

const mapStateToProps = state => ({
    catalog: state.catalog,
    cart: state.cart,
});
export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(Products);
