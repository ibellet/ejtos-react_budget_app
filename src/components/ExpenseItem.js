import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    // Convert the cost to the selected currency
    const displayCost = `${currency}${props.cost}`;

    return (
        <tr>
            <td>{props.name}</td>
            <td>{displayCost}</td>
            <td>
                <button
                    onClick={increaseAllocation}
                    style={{
                        backgroundColor: 'green',
                        color: 'white',
                        borderRadius: '50%', // Make the button circular
                        width: '40px', // Set the width and height to create a circle
                        height: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        marginRight: '10px' // Add margin for spacing
                    }}
                >
                    +
                </button>
            </td>
            <td>
                <button
                    onClick={decreaseAllocation}
                    style={{
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '50%', // Make the button circular
                        width: '40px', // Set the width and height to create a circle
                        height: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    -
                </button>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense} /></td>
        </tr>
    );
};

export default ExpenseItem;
