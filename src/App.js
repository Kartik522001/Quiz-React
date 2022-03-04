import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Start from './components/Start';
import Quiz from './components/Quiz';
import End from './components/End';


export const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path="/start" element={<Quiz />} />
                <Route path="End" element={<End />} />
            </Routes>
        </div>
    )
}

export default App;