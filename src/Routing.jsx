import React from 'react';
import { HeaderAppBar } from './components/HeaderAppBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Skaters } from './pages/Skaters';
import { Footer } from './components/Footer';
import { Goalies } from './pages/Goalies';
import { Schedule } from './pages/Schedule';
import { About } from './pages/About';

export const Routing = ({ isMobileSize }) => {
    return (
        <BrowserRouter>
            <HeaderAppBar isMobileSize={isMobileSize} />
            <Routes>
                <Route path='/nextUP/' element={<Landing />} />
                <Route
                    path='nextUP/skaters'
                    element={<Skaters isMobileSize={isMobileSize} />}
                />
                <Route path='nextUP/goalies' element={<Goalies />} />
                <Route path='nextUP/schedule' element={<Schedule />} />
                <Route path='nextUP/about' element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
