import { configureStore } from "@reduxjs/toolkit"
import projectReducer from '../project/ProjectSlice'
import skillsReducer from '../Skills/SkillSlice'
import jobReducer from '../work/work'
import contactReducer from '../Contact/ContactSlice'



const store = configureStore({
    reducer:{
        project: projectReducer,
        skills: skillsReducer,
        job: jobReducer,
        contact:contactReducer
    }
})


export default store