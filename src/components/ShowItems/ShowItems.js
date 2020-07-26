import React from 'react';
import st from './ShowItems.module.css';
import minus_sign from './minus_sign.png';
import plus_sign from './plus_sign.png';

const ShowItems = (props) => {
    const addFunction = () => {
        props.addButton(props.location, props.id);
    }

    return (
        <div>
            <div className={st.main}>
                <div className={st.left}>
                    <img src={props.img} alt='img'/>
                </div>
                <div className={st.mid}>
                    <h5>{props.name}</h5>
                    <p className={st.midPrice}>Box of {props.amount} - <b>${props.price}</b></p>
                    <p className={st.midInfo}><b>Wrapper:</b> {props.color}, <b>Size:</b> {props.size}</p>
                </div>
                <div className={st.right}>
                    <div className={st.price}>
                        <p>${props.price * props.count}</p>
                    </div>
                    <div className={st.select}>
                        <div className={st.selectMinus}>
                            <img src={minus_sign} alt='IMG'/>
                        </div>
                        <div className={st.selectCount}>
                            <p>{props.count}</p>
                        </div>
                        <div className={st.selectPlus} onClick={addFunction}>
                            <img src={plus_sign} alt='IMG'/>
                        </div>
                    </div>
                    <div className={st.addButton}>
                        <p>Add to Cart</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default ShowItems;
