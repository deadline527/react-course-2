import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';

const ExpenseListItem = ({ description, amount, createdAt, id}) => (
    <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>${ (amount / 100).toString() } - {moment(createdAt).format('MMM Do, YYYY')}</p>
    </div>
)

export default ExpenseListItem;