import React from 'react';
import myphoto from '../myphoto.jpg'
import {createSlice, createSelector, nanoid}  from "@reduxjs/toolkit";

const initialState =[
    { 
    id:0,
    name: 'Kolomiiets Olena',
    phone: "+38098-110-48-66",
    email: 'sonyachna27@gmail.com',
    img: myphoto,
    telegram: 'https://t.me/Olenasonyachna',
    
}
]
const ContactSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{
        skillAdd:{
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(contactId, name, phone, email,img, telegram){
                return{
                    payload:{
                        id: nanoid(),
                        name,
                        phone,
                        email,
                        img,
                        telegram
                    }
                }
            }
        },
    }
})

export const selectContacts = (state) => state.contact;

export default ContactSlice.reducer;