import { createSlice, createAsyncThunk, nanoid, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [
   {
        id: 0, 
        name: 'First Project',
         URL: 'https://sonyachn27.github.io/cursor/lesson16/',
         img: 'https://sonyachn27.github.io/cursor/lesson16/images/Rectangle16.png',
         description: 'Landing page is the best way to get online and grow your business',
         
        technologies: ['HTML', 'SCC', "SASS",'CrossBrowser', 'Responsive']
        },
    {
        id: 1, 
        name: 'Flowers Market',
         URL: 'https://sonyachn27.github.io/Flowers-market/',
         img: 'https://sonyachn27.github.io/Flowers-market/images/florist-makes-beautiful-bouquet-studio.png',
         description: 'Landing page for flowers market',
         technologies: ['HTML', 'SCC', "SASS",'CrossBrowser', 'Responsive', 'Javascript', 'Swiper']
    },
    {
        id: 2, 
        name: 'Parallax',
         URL: 'https://sonyachn27.github.io/Parallax/',
         img: 'https://st2.depositphotos.com/1003525/8878/i/600/depositphotos_88782856-free-stock-photo-winter-mountains-and-sunny-green.jpg',
         description: 'Little magic with Parallax effect',
         technologies: ['HTML', 'SCC', "SASS", 'Responsive', 'Javascript', ]
        },
    {
        id: 3, 
        name: 'SPA',
         URL: 'https://sonyachn27.github.io/',
         img: 'https://xdn.tf.rs/2019/11/22/beba-joda-830x553.jpg',
         description: "A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.",
         
         technologies: ['HTML', 'SCC', 'Javascript', 'React', 'React Router' ]
    }
]

const projectSlice = createSlice({
    name:'project',
    initialState,
    reducers:{
        projectAdd:{
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(projectId, name, URL, img){
                return{
                    payload:{
                        id: nanoid(),
                        name,
                        URL,
                        img
                    }
                }
            }
        },
       
     }
})


export const selectAllProject = (state) => state.project;

export const selectPostsByProjects = createSelector (
    [selectAllProject, (state, projectId) => projectId],
    (projects, projectId) => projects.filter(post => post.userId === projectId)
)
export const selectProjectById = (state, projectId) =>
    state.project.find(project => project.id === projectId)

export default projectSlice.reducer