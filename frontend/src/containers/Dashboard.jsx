import { connect } from 'react-redux';
import { useState } from 'react';
import { update_profile } from '../actions/profile';

const Dashboard = ({
    update_profile,
    first_name_global,
    last_name_global,
    phone_global,
    city_global
}) => {
    const [profileUpdated, setProfileUpdated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        city: '',
    });

    const { first_name, last_name, phone, city } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const updateProfile = async () => {
            await update_profile(first_name, last_name, phone, city);
            setProfileUpdated(!profileUpdated);
        };

        updateProfile();
    };

    
    return (
        <div className='container'>
            <h1 className='mt-3'>Welcome to your User Dashboard</h1>
            <p className='mt-3 mb-3'>Update your user profile information below.</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <label className='form-label' htmlFor='first_name'>First Name</label>
                    <input
                        className='form-control'
                        type='text'
                        name='first_name'
                        placeholder={`${first_name_global}`}
                        onChange={e => onChange(e)}
                        value={first_name}
                    />
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='last_name'>Last Name</label>
                    <input
                        className='form-control'
                        type='text'
                        name='last_name'
                        placeholder={`${last_name_global}`}
                        onChange={e => onChange(e)}
                        value={last_name}
                    />
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='phone'>Phone</label>
                    <input
                        className='form-control'
                        type='text'
                        name='phone'
                        placeholder={`${phone_global}`}
                        onChange={e => onChange(e)}
                        value={phone}
                    />
                </div>

                <div className='form-group'>
                    <label className='form-label' htmlFor='city'>City</label>
                    <input
                        className='form-control'
                        type='text'
                        name='city'
                        placeholder={`${city_global}`}
                        onChange={e => onChange(e)}
                        value={city}
                    />
                </div>

                <button className='btn btn-primary mt-3' type='submit'>Update Profile</button>
            </form>

            
            
        </div>


    )
};

const mapStateToProps = state => ({
    first_name_global: state.profile.first_name,
    last_name_global: state.profile.last_name,
    phone_global: state.profile.phone,
    city_global: state.profile.city,
})

export default connect(mapStateToProps, { update_profile })(Dashboard);