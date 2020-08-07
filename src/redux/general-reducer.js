const generalReducer = (state, action) => {
    const reCountCartTotals = () => {
        let totalItems = 0;
        let totalPrice = 0;
        for (let key of state.cartData) {
            totalItems += key.count;
            totalPrice += (key.price * key.count);
        }
        if (totalItems < 10) {
            state.headerData.countWidth = "30px";
        } else if (totalItems < 100) {
            state.headerData.countWidth = "37px";
        } else {
            state.headerData.countWidth = "47px";
        }
        state.cartCheckoutData.totalItems = totalItems;
        state.cartCheckoutData.totalPrice = totalPrice;
    };

    if (action.type === 'PLUS-BUTTON') {
        if (action.location === 'c_1') {
            state.cigarsData.montecristoData[action.id - 1].count += 1;
        } else if (action.location === 'c_2') {
            state.cigarsData.arturoFuenteData[action.id - 1].count += 1;
        } else if (action.location === 'c_3') {
            state.cigarsData.macanudoData[action.id - 1].count += 1;
        } else if (action.location === 'c_4') {
            state.cigarsData.lagloriacubanaData[action.id - 1].count += 1;
        } else if (action.location === 'c_5') {
            state.cigarsData.elreydelmundoData[action.id - 1].count += 1;
        } else if (action.location === 'c_6') {
            state.cigarsData.romeoyjulietaData[action.id - 1].count += 1;
        } else if (action.location === 'c_7') {
            state.cigarsData.hupmannData[action.id - 1].count += 1;
        } else if (action.location === 'c_8') {
            state.cigarsData.tatuajeData[action.id - 1].count += 1;
        } else if (action.location === 'cl_1') {
            state.cigarillosData.swisherSweetsData[action.id - 1].count += 1;
        } else if (action.location === 'cl_2') {
            state.cigarillosData.djarumFilteredData[action.id - 1].count += 1;
        } else if (action.location === 'cl_3') {
            state.cigarillosData.whiteOwlData[action.id - 1].count += 1;
        } else if (action.location === 'cl_4') {
            state.cigarillosData.cheyenneFilteredData[action.id - 1].count += 1;
        } else if (action.location === 'cl_5') {
            state.cigarillosData.villigerData[action.id - 1].count += 1;
        } else if (action.location === 'a_1') {
            state.accessoriesData.cigarCuttersData[action.id - 1].count += 1;
        } else if (action.location === 'a_2') {
            state.accessoriesData.cigarCasesData[action.id - 1].count += 1;
        } else if (action.location === 'a_3') {
            state.accessoriesData.cigarLightersData[action.id - 1].count += 1;
        } else if (action.location === 'a_4') {
            state.accessoriesData.cigarAshtraysData[action.id - 1].count += 1;
        }
    } else if (action.type === 'MINUS-BUTTON') {
        if (action.location === 'c_1') {
            if (state.cigarsData.montecristoData[action.id - 1].count > 1) {
                state.cigarsData.montecristoData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'c_2') {
            if (state.cigarsData.arturoFuenteData[action.id - 1].count > 1) {
                state.cigarsData.arturoFuenteData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'c_3') {
            if (state.cigarsData.macanudoData[action.id - 1].count > 1) {
                state.cigarsData.macanudoData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'c_4') {
            if (state.cigarsData.lagloriacubanaData[action.id - 1].count > 1) {
                state.cigarsData.lagloriacubanaData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'c_5') {
            if (state.cigarsData.elreydelmundoData[action.id - 1].count > 1) {
                state.cigarsData.elreydelmundoData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'c_6') {
            if (state.cigarsData.romeoyjulietaData[action.id - 1].count > 1) {
                state.cigarsData.romeoyjulietaData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'c_7') {
            if (state.cigarsData.hupmannData[action.id - 1].count > 1) {
                state.cigarsData.hupmannData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'c_8') {
            if (state.cigarsData.tatuajeData[action.id - 1].count > 1) {
                state.cigarsData.tatuajeData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'cl_1') {
            if (state.cigarillosData.swisherSweetsData[action.id - 1].count > 1) {
                state.cigarillosData.swisherSweetsData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'cl_2') {
            if (state.cigarillosData.djarumFilteredData[action.id - 1].count > 1) {
                state.cigarillosData.djarumFilteredData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'cl_3') {
            if (state.cigarillosData.whiteOwlData[action.id - 1].count > 1) {
                state.cigarillosData.whiteOwlData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'cl_4') {
            if (state.cigarillosData.cheyenneFilteredData[action.id - 1].count > 1) {
                state.cigarillosData.cheyenneFilteredData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'cl_5') {
            if (state.cigarillosData.villigerData[action.id - 1].count > 1) {
                state.cigarillosData.villigerData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'a_1') {
            if (state.accessoriesData.cigarCuttersData[action.id - 1].count > 1) {
                state.accessoriesData.cigarCuttersData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'a_2') {
            if (state.accessoriesData.cigarCasesData[action.id - 1].count > 1) {
                state.accessoriesData.cigarCasesData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'a_3') {
            if (state.accessoriesData.cigarLightersData[action.id - 1].count > 1) {
                state.accessoriesData.cigarLightersData[action.id - 1].count -= 1;
            }
        } else if (action.location === 'a_4') {
            if (state.accessoriesData.cigarAshtraysData[action.id - 1].count > 1) {
                state.accessoriesData.cigarAshtraysData[action.id - 1].count -= 1;
            }
        }
    } else if (action.type === 'ADD-TO-CART') {
        let currentItem = {};
        if (action.location === 'c_1') {
            currentItem = state.cigarsData.montecristoData[action.id - 1];
        } else if (action.location === 'c_2') {
            currentItem = state.cigarsData.arturoFuenteData[action.id - 1];
        } else if (action.location === 'c_3') {
            currentItem = state.cigarsData.macanudoData[action.id - 1];
        } else if (action.location === 'c_4') {
            currentItem = state.cigarsData.lagloriacubanaData[action.id - 1];
        } else if (action.location === 'c_5') {
            currentItem = state.cigarsData.elreydelmundoData[action.id - 1];
        } else if (action.location === 'c_6') {
            currentItem = state.cigarsData.romeoyjulietaData[action.id - 1];
        } else if (action.location === 'c_7') {
            currentItem = state.cigarsData.hupmannData[action.id - 1];
        } else if (action.location === 'c_8') {
            currentItem = state.cigarsData.tatuajeData[action.id - 1];
        } else if (action.location === 'cl_1') {
            currentItem = state.cigarillosData.swisherSweetsData[action.id - 1];
        } else if (action.location === 'cl_2') {
            currentItem = state.cigarillosData.djarumFilteredData[action.id - 1];
        } else if (action.location === 'cl_3') {
            currentItem = state.cigarillosData.whiteOwlData[action.id - 1];
        } else if (action.location === 'cl_4') {
            currentItem = state.cigarillosData.cheyenneFilteredData[action.id - 1];
        } else if (action.location === 'cl_5') {
            currentItem = state.cigarillosData.villigerData[action.id - 1];
        } else if (action.location === 'a_1') {
            currentItem = state.accessoriesData.cigarCuttersData[action.id - 1];
        } else if (action.location === 'a_2') {
            currentItem = state.accessoriesData.cigarCasesData[action.id - 1];
        } else if (action.location === 'a_3') {
            currentItem = state.accessoriesData.cigarLightersData[action.id - 1];
        } else if (action.location === 'a_4') {
            currentItem = state.accessoriesData.cigarAshtraysData[action.id - 1];
        }

        let newItem = {
            id: state.cartCheckoutData.uniqueID,
            img: currentItem.img,
            name: currentItem.name,
            price: currentItem.price,
            count: currentItem.count,
        };
        state.cartCheckoutData.uniqueID += 1;
        state.cartData.unshift(newItem);

        reCountCartTotals();
    } else if (action.type === 'REMOVE-FROM-CART') {
        let newCartData = [];
        for (let i = 0; i < state.cartData.length; i++) {
            if (state.cartData[i].id !== action.id) {
                newCartData.push(state.cartData[i]);
            }
        }
        state.cartData = newCartData;

        reCountCartTotals()
    }
    return state;
};

export default generalReducer;


export const plusButtonActionCreator = (location, id) => ({
    type: 'PLUS-BUTTON',
    location: location,
    id: id,
});
export const minusButtonActionCreator = (location, id) => ({
    type: 'MINUS-BUTTON',
    location: location,
    id: id,
});
export const addToCartActionCreator = (location, id) => ({
    type: 'ADD-TO-CART',
    location: location,
    id: id,
});
export const removeFromCartActionCreator = (id) => ({
    type: 'REMOVE-FROM-CART',
    id: id,
});