import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    const formatCurrency = (value) => {
        switch (currency) {
            case '$':
                return `$${value}`;
            case '€':
                return `€${value}`;
            case '₹':
                return `₹${value}`;
            default:
                return `£${value}`;
        }
    };

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {formatCurrency(budget - totalExpenses)}</span>
        </div>
    );
};

export default Remaining;
