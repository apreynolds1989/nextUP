import React from 'react';
import { HeaderAppBar } from './components/HeaderAppBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TakeYourShot } from './pages/TakeYourShot';
import { Players } from './pages/Players';
import { Footer } from './components/Footer';
import { Schedule } from './pages/Schedule';
import { About } from './pages/About';

export const Routing = ({ isMobileSize }) => {
    return (
        <BrowserRouter>
            <HeaderAppBar isMobileSize={isMobileSize} />
            <Routes>
                <Route
                    path='/nextUP/'
                    element={<Players isMobileSize={isMobileSize} />}
                />
                <Route
                    path='nextUP/schedule'
                    element={<Schedule isMobileSize={isMobileSize} />}
                />
                <Route path='nextUP/about' element={<About />} />
                <Route path='nextUP/takeYourShot' element={<TakeYourShot />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
