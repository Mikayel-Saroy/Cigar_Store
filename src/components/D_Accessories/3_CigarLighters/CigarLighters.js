import React from 'react';
import ShowItems from "../../X_Generals/ShowItems/ShowItems";


const CigarLighters = (props) => {
    const renderItems = (data) => data.map(item => <ShowItems id={item.id}
                                                              img={item.img}
                                                              name={item.name}
                                                              amount={item.amount}
                                                              color={item.color}
                                                              size={item.size}
                                                              price={item.price}
                                                              count={item.count}
                                                              location='a_3'
                                                              plusButton={props.plusButton}
                                                              minusButton={props.minusButton}
    />)

    return (
        <div>
            {renderItems(props.cigarLightersData)}
        </div>
    );
}

export default CigarLighters;
