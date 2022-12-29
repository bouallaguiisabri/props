import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
const { FullName, Bio, Profession, handleName } = props;

return (
    <div className='profile'>
    <img src={props.children} alt={FullName}  className="photo"/>
    <h1>{FullName}</h1>
    <p>{Bio}</p>
    <p>{Profession}</p>
    <button onClick={() => handleName(FullName)}>Click me</button>
    </div>
);
};
Profile.defaultProps={FullName:"sabri"}
Profile.prototype={FullName:PropTypes.number}
export default Profile;
