import React from 'react';
import st from './App.module.css';
import Header from "./components/A_Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Cigars from "./components/B_Cigars/Cigars";
import Cigarillos from "./components/C_Cigarillos/Cigarillos";
import Accessories from "./components/D_Accessories/Accessories";

function App(props) {
    return (
        <BrowserRouter>
            <div className={st.main}>
                <Header/>
                <div className={st.content}>
                    <Route render={() => <Cigars cigarsData={props.state.cigarsData}
                                                 addButton={props.addButton}/>} path='/cigars' />
                    <Route render={() => <Cigarillos/>} path='/cigarillos' />
                    <Route render={() => <Accessories/>} path='/accessories' />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
