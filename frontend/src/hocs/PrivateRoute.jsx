import { connect } from 'react-redux';
import { Navigate } from 'react-router';

const PrivateRoute = ({ isAuthenticated, children }) => {
    return isAuthenticated ? children : <Navigate to='/login'/>;
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(PrivateRoute);