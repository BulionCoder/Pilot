import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:3004/expenses?_expand=tour")
            .then(r => r.json())
            .then(data => setExpenses(data))
            .finally(() => setIsLoading(false))
    }, []
    );

    return (
        <div className='container pilots-display-flex'>
            {expenses && expenses.map(expense =>
                <Card
                    title={expense.title}
                    extra={<a href={`http://localhost:3000/tours/${expense.tour.id}/expenses/${expense.id}`}>Edit</a>}
                    key={expense.id}
                    hoverable={true}>
                    <strong>{expense.price} {expense.currency}</strong>
                    <p>{expense.tour.tourCode} {expense.tour.title}</p>
                </Card>)
            }
        </div>
    )
}

export default Expenses;