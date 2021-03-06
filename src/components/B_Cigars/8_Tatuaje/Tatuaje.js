import React from 'react';
import ShowItems from "../../X_Generals/ShowItems/ShowItems";


const Tatuaje = (props) => {
    const renderItems = (data) => data.map(item => <ShowItems id={item.id}
                                                              img={item.img}
                                                              name={item.name}
                                                              amount={item.amount}
                                                              color={item.color}
                                                              size={item.size}
                                                              price={item.price}
                                                              count={item.count}
                                                              location='c_8'
                                                              dispatch={props.dispatch}
                                                              key={props.id}
    />);

    return (
        <div>
            {renderItems(props.tatuajeData)}
        </div>
    );
}

export default Tatuaje;
