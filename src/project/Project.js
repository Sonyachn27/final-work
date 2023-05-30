import React from 'react';
import ProjectList from './ProjectPage';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectAdd, selectAllProject } from './ProjectSlice'; 

import { useNavigate } from 'react-router-dom';
const Project = () => {
    const dispatch = useDispatch()

    const allProject = useSelector(selectAllProject)
    
    const renderedProjects = allProject.map(project => (
       
       <li className='renderProject-list_item' key={project.id}>
            
            <Link  to={`/${project.id}`}>  
            <img className="renderProject-img" src={project.img} alt=''/>
            {project.name} </Link>
        </li>
    ))
    return (
        <section className='renderedProjects'>   
            <ul className='renderProject-list'>{renderedProjects}</ul>
        </section>
    )
};

export default Project;