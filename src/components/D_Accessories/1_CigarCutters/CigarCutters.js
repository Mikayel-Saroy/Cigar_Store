import React from 'react';
import ShowItems from "../../X_Generals/ShowItems/ShowItems";


const CigarCutters = (props) => {
    const renderItems = (data) => data.map(item => <ShowItems id={item.id}
                                                              img={item.img}
                                                              name={item.name}
                                                              amount={item.amount}
                                                              color={item.color}
                                                              size={item.size}
                                                              price={item.price}
                                                              count={item.count}
                                                              location='a_1'
                                                              plusButton={props.plusButton}
                                                              minusButton={props.minusButton}
    />)

    return (
        <div>
            {renderItems(props.cigarCuttersData)}
        </div>
    );
}

export default CigarCutters;
