import React from 'react';
import { useSelector } from 'react-redux'
import {ProjectSlice, selectPostsByProjects } from './ProjectSlice';
import {  useNavigate, useParams } from 'react-router-dom'
import { selectAllProject } from './ProjectSlice';
import { selectProjectById } from './ProjectSlice';
import { useTranslation } from 'react-i18next';
const ProjectPage = () => {
    const {t} = useTranslation();
    const AllProjects = useSelector(selectAllProject);
    const { projectId } = useParams()
    const project = useSelector(state => selectProjectById (state, Number(projectId)))
    const projectTech = project.technologies.map(tech => (
        <li className='project-list-item'>{tech}</li>
        
    ))

    const postTitles = <div key={project.id} className='project-spa'>
           
            <h2 className='project-title'>{t(project.name)} </h2>
            <div className='project-wrap'> 
            <div className='project-img' > 
            <img src={project.img} alt='' />
            </div>
            <div className='project-text'> 
            <p className='project-text-title'> {t(project.description)}</p>
            <p className='project-text-paragraphe'> {t('You can view the project at the link')}
            <a className='project-text-link' href= {project.URL}> {project.name}</a> </p>
            <p className='project-text_description'> {t('Project technologies:')}</p>
            <ul className='project-list'>
            
            {projectTech}
            </ul>
            </div>
            </div>
        </div>
    
    
    return (
        <section>
           {postTitles}
            
        </section>
    )
};

export default ProjectPage;


