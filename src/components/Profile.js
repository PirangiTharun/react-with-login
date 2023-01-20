import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
    console.log(user);
  return (
    isAuthenticated && 
    <div className='profileContainer'>
        <img className='profilePhoto' src={user.picture} alt={user.name} />
        <h1 className='profileName'>{user.name}</h1>
        <table>
            <thead></thead>
            <tbody>
                <tr>
                    <td>Email</td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>Email Verified</td>
                    <td>{user.email_verified?'True':'False'}</td>
                </tr>
                <tr>
                    <td>First Name</td>
                    <td>{user.given_name}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{user.family_name}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Profile