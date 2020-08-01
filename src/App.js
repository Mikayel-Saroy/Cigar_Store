import React from 'react';
import st from './App.module.css';
import Header from "./components/A_Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Cigars from "./components/B_Cigars/Cigars";
import Cigarillos from "./components/C_Cigarillos/Cigarillos";
import Accessories from "./components/D_Accessories/Accessories";
import Cart from "./components/E_Cart/E_Cart";

function App(props) {
    return (
        <BrowserRouter>
            <div className={st.main}>
                <Header/>
                <div className={st.content}>
                    <Route render={() => <Cigars cigarsData={props.state.cigarsData}
                                                 plusButton={props.plusButton}
                                                 minusButton={props.minusButton}/>} path='/cigars'/>
                    <Route render={() => <Cigarillos cigarillosData={props.state.cigarillosData}
                                                     plusButton={props.plusButton}
                                                     minusButton={props.minusButton}/>} path='/cigarillos'/>
                    <Route render={() => <Accessories accessoriesData={props.state.accessoriesData}
                                                      plusButton={props.plusButton}
                                                      minusButton={props.minusButton}/>} path='/accessories'/>
                    <Route render={() => <Cart/>} path='/Cart'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
