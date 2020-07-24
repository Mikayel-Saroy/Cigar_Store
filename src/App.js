import React from 'react';
import st from './App.module.css';
import Header from "./components/A_Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Cigars from "./components/B_Cigars/Cigars";
import Cigarillos from "./components/C_Cigarillos/Cigarillos";
import Accessories from "./components/D_Accessories/Accessories";

function App() {
    return (
        <BrowserRouter>
            <div className={st.main}>
                <Header/>
                <div className={st.content}>
                    <Route component={Cigars} path='/cigars' />
                    <Route component={Cigarillos} path='/cigarillos' />
                    <Route component={Accessories} path='/accessories' />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
