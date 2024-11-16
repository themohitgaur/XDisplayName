import React, { useState } from 'react';
function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName} ${lastName}`);
      setErrorMessage('');
    } else {
      setFullName('');
      setErrorMessage('Both fields are required to submit the form.');
    }
  };

  return (
    <div>
      <h2>Full Name Display </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {fullName && (
        <div>
          <h2>Full Name: {fullName}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
