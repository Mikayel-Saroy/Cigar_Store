import React from 'react';
import ShowItems from "../../X_Generals/ShowItems/ShowItems";


const RomeoYJulieta = (props) => {
    const renderItems = (data) => data.map(item => <ShowItems id={item.id}
                                                              img={item.img}
                                                              name={item.name}
                                                              amount={item.amount}
                                                              color={item.color}
                                                              size={item.size}
                                                              price={item.price}
                                                              count={item.count}
                                                              location='c_6'
                                                              dispatch={props.dispatch}
                                                              key={props.id}
    />)

    return (
        <div>
            {renderItems(props.romeoyjulietaData)}
        </div>
    );
}

export default RomeoYJulieta;
