import Navbar from '../components/Navbar';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/auth';
import { useEffect } from 'react';
import { load_user } from '../actions/profile';

const Layout = ({ children, checkAuthenticated }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);

    return (
        <Fragment>
            <Navbar />
            { children }
        </Fragment>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);