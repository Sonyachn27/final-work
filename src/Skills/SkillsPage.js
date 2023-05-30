import React from 'react';
import {SkillSlice, selectSkills} from './SkillSlice';

import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const SkillsPage = () => {
    const dispatch = useDispatch()
    const AllSkills = useSelector(selectSkills)
    
     const {t} = useTranslation(); 



    const renderSkills = AllSkills.map(skill => (
        
        <div  className='skill-spa'>
        
           <div className='skills-wrap'> 
           <img className='img-user img-skill' src={skill.img} />
           
            <div className='skill-content'> 
            <h2>{t( skill.name  )} </h2>
            <p> {t(skill.content)}</p>
            <h3 className='skill-title'> {t('My skills')} </h3>
            <ul className='skills-list'>{skill.skill.map(sk =>(
                <li className='skills-list_item'> {t(sk)}</li>
            ))}</ul>
            </div>
            </div>
        </div>
    ))
    return (
        <section className='skills'>
            {renderSkills}
        </section>
    );
};

export default SkillsPage;