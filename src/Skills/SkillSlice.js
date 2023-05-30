import React from 'react';
import myphoto from '../myphoto.jpg'
import {createSlice, createSelector, nanoid}  from "@reduxjs/toolkit";

const initialState =[
    { 
    id:0,
    name: 'Kolomiiets Olena',
    content: "Highly motivated junior web developer with a passion for creating innovative, user-friendly websites. Proven ability to develop websites that are both visually appealing and functional. Utilized SASS to create efficient and reusable code.",
    
    img: myphoto,
    skill: [
        'HTML - The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.',
        'CSS - Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
        'Javascript -  often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users devices.',
        'SASS - is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.',
        'Responsive web design (RWD) or responsive design is an approach to web design that aims to make web pages render well on a variety of devices and window or screen sizes from minimum to maximum display size to ensure usability and satisfaction'
    ]
}
]
const SkillSlice = createSlice({
    name:'skills',
    initialState,
    reducers:{
        skillAdd:{
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(skillId, name, content, skill){
                return{
                    payload:{
                        id: nanoid(),
                        name,
                        content,
                        skill
                    }
                }
            }
        },
    }
})

export const selectSkills = (state) => state.skills;
export default SkillSlice.reducer;