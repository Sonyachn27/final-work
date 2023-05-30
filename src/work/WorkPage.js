import React from 'react';
import { selectWorks } from './work';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const WorkPage = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const AllJob = useSelector(selectWorks);

    const renderJob = AllJob.map(job => (
       <div className='job' > 
        <h2>{t(job.job)}</h2>
        <span> I studied in : {job.period} year</span>
        </div>
    ))
    return (
        <section> 
       {renderJob}
       </section>
    );
};

export default WorkPage;