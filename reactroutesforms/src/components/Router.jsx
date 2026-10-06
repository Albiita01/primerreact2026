import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cine from './Cine';
import Musica from './Musica';
import Home from './Home';
import FormSimple from './FormSimple';
import Collatz from './Collatz';
import TablaMultiplicar from './TablaMultiplicar';
import TablaMultiplicarV2 from './TablaMultiplicarV2';
import SeleccionMultiple from './SeleccionMultiple';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cine" element={<Cine />} />
                    <Route path="/musica" element={<Musica />} />
                    <Route path="/form" element={<FormSimple />} />
                    <Route path="/collatz" element={<Collatz />} />
                    <Route path="/tabla" element={<TablaMultiplicar />} />
                    <Route path="/tablaV2" element={<TablaMultiplicarV2 />} />
                    <Route path="/seleccion" element={<SeleccionMultiple />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
