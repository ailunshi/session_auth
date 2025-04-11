import Navbar from '../components/Navbar';
import { Fragment } from 'react';

const Layout = ({ children }) => (
    <Fragment>
        <Navbar />
        { children }
    </Fragment>
);

export default Layout;