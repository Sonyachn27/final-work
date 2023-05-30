import React from 'react';


import {createSlice, createSelector, nanoid}  from "@reduxjs/toolkit";

const initialState =[
    
        {  id:0, 
         job: "CURSOR.EDUCATION 'FRONT-END BASIC'",
         period: '2022'
        },
        {  id:1, 
         job: "CURSOR.EDUCATION 'FRONT-END ADVANCED'",
         period: '2023'
        }
     
     
    ];

const WorksSlice = createSlice({
    name:'job',
    initialState,
    reducers:{
        skillAdd:{
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(job, period){
                return{
                    payload:{
                        id: nanoid(),
                        job,
                        period
                    }
                }
            }
        },
      
    }
})

export const selectWorks = (state) => state.job;

export const { skillAdd, changeLanguage} = WorksSlice.actions;
export default WorksSlice.reducer;


