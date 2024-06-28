import React, { useState, useEffect } from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import DateRangeSelector from './components/DateRangeSelector';
import UserInput from './components/UserInput';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Display the splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <img src={`${process.env.PUBLIC_URL}/expense-cartoon.png`} alt="Cartoon Characters Calculating Expenses" />
      </div>
    );
  }

  return (
    <GlobalProvider>
      <div className="container">
        <ThemeSwitcher />
        <Header username={username} />
        <UserInput setUsername={setUsername} />
        <Balance />
        <DateRangeSelector />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
