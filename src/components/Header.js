import React from 'react';

const Header = ({ username }) => {
  return (
    <h2>
      Expense Tracker {username && `of ${username}`}
    </h2>
  );
};

export default Header;
