import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../Store/Store';
import { itemSlice } from '../ItemSlice/ItemSlice';

export const ItemList: React.FC = () => {
    const items = useSelector((state: RootState) => state.items.items);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {item.name}
                    <button onClick={() => dispatch(itemSlice.actions.setEditItem(item.id))}>Edit</button>
                    <button onClick={() => dispatch(itemSlice.actions.deleteItem(item.id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
