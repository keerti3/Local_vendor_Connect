import { useState } from 'react';

export default function Form() {

// States for registration
const [username, setUserName] = useState('');
const [password, setPassword] = useState('');
const [phoneno, setPhoneNo] = useState('');
const [email, setEmail] = useState('');
const [address, setAddress] = useState('');
const [usertype, setUserType] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleUserName = (e) => {
	setUserName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePhoneNo = (e) => {
	setPhoneNo(e.target.value);
	setSubmitted(false);
};

const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

const handleAddress = (e) => {
    setAddress(e.target.value);
    setSubmitted(false);
  };

const handleUserType = (e) => {
    setUserType(e.target.value);
    setSubmitted(false);
  };

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (username === '' || password === '' || phoneno === '' || email === '' || address==='' || usertype==='') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {username} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (

	<div className="form">
	<div className="label">
		<h1>Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		<label className="label">UserName:</label>
		<input onChange={handleUserName} className="input"
		value={username} type="text" /><br></br><br></br>

		<label className="label">Password:</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" /><br></br><br></br>

		<label className="label">PhoneNo: </label>
		<input onChange={handlePhoneNo} className="input"
		value={phoneno} type="phoneno" /><br></br><br></br>

        <label className="label">Email: </label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" /><br></br><br></br>

        <label className="label">Address: </label>
		<input onChange={handleUserName} className="input"
		value={address} type="text" /><br></br><br></br>

        <label className="label">UserType: </label>
		<input onChange={handleUserName} className="input"
		value={usertype} type="text" /><br></br><br></br>

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
	</div>
);
}
