import React from 'react';
import st from "./Cigars.module.css";
import {NavLink, Route} from "react-router-dom";
import Montecristo from "./1_Montecristo/Montecristo";
import ArturoFuente from "./2_ArturoFuente/ArturoFuente";


const Cigars = (props) => {
    return (
        <div className={st.main}>
            <div className={st.nav}>
                <div className={st.navInner}>
                    <div><NavLink to='/cigars/montecristo' activeClassName={st.active}>Montecristo</NavLink></div>
                    <div><NavLink to='/cigars/arturofuente' activeClassName={st.active}>Arturo Fuente</NavLink></div>
                    {/*<div><NavLink to='' activeClassName={st.active}>Perdomo Champagne</NavLink></div>*/}
                    {/*<div><NavLink to='' activeClassName={st.active}>2_ArturoFuente Cigars</NavLink></div>*/}
                </div>
            </div>
            <div className={st.list}>
                <Route path='/cigars/montecristo'
                       render={() => <Montecristo montecristoData={props.cigarsData.montecristoData}
                                                  addButton={props.addButton}/>}/>
                <Route path='/cigars/arturofuente'
                       render={() => <ArturoFuente arturoFuenteData={props.cigarsData.arturoFuenteData}
                                                   addButton={props.addButton}/>}/>
            </div>
        </div>
    );
}

export default Cigars;
