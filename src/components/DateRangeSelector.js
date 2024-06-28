import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, Slider, Button } from '@mui/material';
import { GlobalContext } from '../context/GlobalState';

const DateRangeSelector = () => {
    const { transactions, setFilteredTransactions } = useContext(GlobalContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [range, setRange] = useState([1, 30]);

    const filterTransactions = () => {
        const filtered = transactions.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return transactionDate >= new Date(startDate.setHours(0, 0, 0, 0)) && transactionDate <= new Date(endDate.setHours(23, 59, 59, 999));
        });
        setFilteredTransactions(filtered);
    };

    const handleRangeChange = (event, newValue) => {
        setRange(newValue);
        const newEndDate = new Date();
        const newStartDate = new Date();
        newStartDate.setDate(newEndDate.getDate() - newValue[1]);
        setStartDate(newStartDate);
        setEndDate(newEndDate);
    };

    const handleShow = () => {
        filterTransactions();
    };

    const handleClear = () => {
        setStartDate(new Date());
        setEndDate(new Date());
        setRange([1, 30]);
        setFilteredTransactions(transactions); // Reset to show all transactions
    };

    return (
        <div className="date-range-selector">
            <div className="date-picker">
                <label>Start Date:</label>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </div>
            <div className="date-picker">
                <label>End Date:</label>
                <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
            </div>
            <div className="range-slider">
                <label>Range (Days):</label>
                <Box sx={{ width: 300 }}>
                    <Slider
                        value={range}
                        onChange={handleRangeChange}
                        valueLabelDisplay="auto"
                        min={1}
                        max={365}
                    />
                </Box>
            </div>
            <div className="buttons">
                <Button variant="contained" color="primary" onClick={handleShow}>Show</Button>
                <Button variant="contained" color="secondary" onClick={handleClear}>Clear</Button>
            </div>
        </div>
    );
};

export default DateRangeSelector;
