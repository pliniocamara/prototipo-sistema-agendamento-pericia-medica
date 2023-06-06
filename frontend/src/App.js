import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NewExamination from './components/NewExamination';
import ExaminationList from './components/ExaminationList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/agendar-pericia" element={<NewExamination />} />
        <Route path="/listar-pericias" element={<ExaminationList />} />
      </Routes>
    </Router>
  );
}

export default App;