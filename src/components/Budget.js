import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, spending, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    const handleBudgetChange = (event) => {
        const value = event.target.value;
        if (value < spending) {
            setErrorMessage('Budget cannot be lower than total spending');
        } else if (value > 20000) {
            setErrorMessage('Budget cannot exceed £20000');
        } else {
            setErrorMessage('');
            setNewBudget(value);
            dispatch({ type: 'SET_BUDGET', payload: value });
        }
    }

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        setSelectedCurrency(selectedCurrency);
        dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {selectedCurrency}{newBudget}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange} 
            />
            <select value={selectedCurrency} onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};

export default Budget;
