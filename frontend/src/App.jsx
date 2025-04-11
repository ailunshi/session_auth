import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './hocs/Layout';

import Home from './containers/Home';
import Register from './containers/Register';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

import { Provider } from 'react-redux';
import store from './store';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/register' element={<Register />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/dashboard' element={<Dashboard />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </Provider>
);

export default App;