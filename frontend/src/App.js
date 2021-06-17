import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';



function App() {
    const [projects, setProjects] = useState(["Dev. de app", "Dev FrontEnd"]);

    useEffect(() => {
        api.get('tasks').then(response => {
            console.log(response)
        })
    }, []);


    function handleAddProject() {
        
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    }
    return (
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}
export default App;