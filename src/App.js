import Layout from "./component/Layout";
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import ProjectList from "./project/ProjectPage";
import Header from "./component/Header";
import Project from "./project/Project";
import ProjectPage from "./project/ProjectPage";
import './App.css'
import SkillsPage from "./Skills/SkillsPage";
import WorkPage from "./work/WorkPage";
import ContactsPage from "./Contact/ContactPage";
import './style/wokr.css'

import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';
import './style/header.css'
import './style/renderedProjects.css'
import './style/projectPage.css'
import './style/contact.css'
import './style/skill.css'
import './style/mobile.css'
function App() {
  
  return (
    <I18nextProvider i18n={i18n}> 
    <Routes> 
   <Route path="/final-work/" element={<Layout />}> 
      
    <Route index element={<Project />} />
    
      <Route path=":projectId" element={<ProjectPage />} />
    <Route path="/final-work/about" element={<SkillsPage />} />
    <Route path="/final-work/job" element={<WorkPage />} />
    <Route path="/final-work/contacts" element={<ContactsPage />} />
    </Route>
    </Routes>
 
    </I18nextProvider>
    
  );
 
}

export default App;
