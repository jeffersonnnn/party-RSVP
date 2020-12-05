import React, { useReducer } from 'react';
import GuestContext from './guestContext';
import guestReducer from './guestReducer';
import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH
} from '../types';

const GuestState = (props) => {
    const initialState = {
        filterGuest: true,
        search: null,
        guests: [
            {
                id: 1,
                name: "Jefferson Ighalo",
                phone: "2348032253206",
                dietary: "vegan",
                isConfirmed: false
            },
            {
                id: 2,
                name: "Onoayen Ighalo",
                phone: "234903223221",
                dietary: "non-vegan",
                isConfirmed: true
            },
            {
                id: 3,
                name: "Irene Ighalo",
                phone: "2348142034332",
                dietary: "vegan",
                isConfirmed: true
            },
            {
                id: 4,
                name: "Prosper Ighalo",
                phone: "2349023908756",
                dietary: "pescatarian",
                isConfirmed: false
            }
        ]
    }
    const [state, dispatch] = useReducer(guestReducer, initialState)

    // actions
    const toggleFilter = () => {
        dispatch({
            type: TOGGLE_FILTER
        })
    }

    const searchGuest = (guest) => {
        dispatch({
            type: SEARCH_GUEST,
            payload: guest
        })
    }

    const clearGuest = () => {
        dispatch({
            type: CLEAR_SEARCH
        })
    }
    
    return (
        <GuestContext.Provider
            value={{
                guests: state.guests,
                filterGuest: state.filterGuest,
                search: state.search,
                toggleFilter,
                searchGuest,
                clearGuest
            }}
        >
            {props.children}
        </GuestContext.Provider>
    )
}

export default GuestState
