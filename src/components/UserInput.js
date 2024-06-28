import React, { useState, useEffect } from 'react';

const UserInput = ({ setUsername }) => {
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    const storedName = localStorage.getItem('username');
    if (storedName) {
      setName(storedName);
      setUsername(storedName);
      setIsEditing(false);
    }
  }, [setUsername]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(name);
    localStorage.setItem('username', name);
    setIsEditing(false);
  };

  const handleChangeName = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Enter your name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <button type="submit" className="btn">Set Name</button>
        </form>
      ) : (
        <button onClick={handleChangeName} className="btn change-name-btn">Change Name</button>
      )}
    </div>
  );
};

export default UserInput;
