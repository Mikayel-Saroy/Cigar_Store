import c_mt_1 from "./IMG/c1_Montecristo/c_mt_1.png";
import c_mt_2 from "./IMG/c1_Montecristo/c_mt_2.png";
import c_mt_3 from "./IMG/c1_Montecristo/c_mt_3.png";
import c_mt_4 from "./IMG/c1_Montecristo/c_mt_4.png";
import c_mt_5 from "./IMG/c1_Montecristo/c_mt_5.png";
import c_mt_6 from "./IMG/c1_Montecristo/c_mt_6.png";
import c_mt_7 from "./IMG/c1_Montecristo/c_mt_7.png";
import c_mt_8 from "./IMG/c1_Montecristo/c_mt_8.png";
import c_mt_9 from "./IMG/c1_Montecristo/c_mt_9.png";
import c_mt_10 from "./IMG/c1_Montecristo/c_mt_10.png";
import c_af_1 from "./IMG/c2_Arturo_Fuente/c_af_1.png";
import c_af_2 from "./IMG/c2_Arturo_Fuente/c_af_2.png";
import c_af_3 from "./IMG/c2_Arturo_Fuente/c_af_3.png";
import c_af_4 from "./IMG/c2_Arturo_Fuente/c_af_4.png";
import c_af_5 from "./IMG/c2_Arturo_Fuente/c_af_5.png";
import c_af_6 from "./IMG/c2_Arturo_Fuente/c_af_6.png";
import c_af_7 from "./IMG/c2_Arturo_Fuente/c_af_7.png";
import c_af_8 from "./IMG/c2_Arturo_Fuente/c_af_8.png";
import c_af_9 from "./IMG/c2_Arturo_Fuente/c_af_9.png";
import c_af_10 from "./IMG/c2_Arturo_Fuente/c_af_10.png";

let store = {
    _state: {
        cigarsData: {
            montecristoData: [
                {
                    id: 1,
                    img: c_mt_1,
                    name: "1_Montecristo Classic Churchill",
                    amount: 20,
                    color: "Light Brown",
                    size: "7 × 54",
                    price: 264,
                    count: 1
                },
                {
                    id: 2,
                    img: c_mt_2,
                    name: "1_Montecristo Vintage '93 Club Cabinet No. 20",
                    amount: 25,
                    color: "Medium Brown",
                    size: "6.88 × 39",
                    price: 148,
                    count: 1
                },
                {
                    id: 3,
                    img: c_mt_3,
                    name: "1_Montecristo Vintage '93 Club Cabinet No. 50",
                    amount: 25,
                    color: "Medium Brown",
                    size: "6 × 50",
                    price: 174,
                    count: 1
                },
                {
                    id: 4,
                    img: c_mt_4,
                    name: "1_Montecristo Classic Robusto",
                    amount: 20,
                    color: "Light Brown",
                    size: "5 × 52",
                    price: 228,
                    count: 1
                },
                {
                    id: 5,
                    img: c_mt_5,
                    name: "1_Montecristo Classic Rothchilde Tubo",
                    amount: 15,
                    color: "Light Brown",
                    size: "5 × 52",
                    price: 157,
                    count: 1
                },
                {
                    id: 6,
                    img: c_mt_6,
                    name: "1_Montecristo Classic Toro",
                    amount: 20,
                    color: "Light Brown",
                    size: "6 × 52",
                    price: 240,
                    count: 1
                },
                {
                    id: 7,
                    img: c_mt_7,
                    name: "1_Montecristo Classic Especial No. 1",
                    amount: 20,
                    color: "Light Brown",
                    size: "6.62 × 44",
                    price: 217,
                    count: 1
                },
                {
                    id: 8,
                    img: c_mt_8,
                    name: "1_Montecristo Classic Especial No. 3",
                    amount: 20,
                    color: "Light Brown",
                    size: "5.5 × 44",
                    price: 204,
                    count: 1
                },
                {
                    id: 9,
                    img: c_mt_9,
                    name: "1_Montecristo Platinum Series Habana No. 2 Belicoso",
                    amount: 27,
                    color: "Medium Brown",
                    size: "6.12 × 52",
                    price: 336,
                    count: 1
                },
                {
                    id: 10,
                    img: c_mt_10,
                    name: "1_Montecristo Platinum Series Limited Edition",
                    amount: 15,
                    color: "Medium Brown",
                    size: "5 × 50",
                    price: 135,
                    count: 1
                },
            ],
            arturoFuenteData: [
                {
                    id: 1,
                    img: c_af_1,
                    name: "Arturo Fuente 8-5-8",
                    amount: 25,
                    color: "Medium Brown",
                    size: "6 × 47",
                    price: 139,
                    count: 1,
                },
                {
                    id: 2,
                    img: c_af_2,
                    name: "Arturo Fuente 8-5-8",
                    amount: 25,
                    color: "Dark Brown",
                    size: "6 × 47",
                    price: 139,
                    count: 1,
                },
                {
                    id: 3,
                    img: c_af_3,
                    name: "Arturo Fuente 8-5-8 Candela",
                    amount: 25,
                    color: "Light Green",
                    size: "6 × 47",
                    price: 139,
                    count: 1,
                },
                {
                    id: 4,
                    img: c_af_4,
                    name: "Arturo Fuente Breva Royal",
                    amount: 130,
                    color: "Dark Brown",
                    size: "5.5 × 42",
                    price: 130,
                    count: 1,
                },
                {
                    id: 5,
                    img: c_af_5,
                    name: "Arturo Fuente Breva Royal",
                    amount: 50,
                    color: "Medium Brown",
                    size: "5.5 × 42",
                    price: 130,
                    count: 1,
                },
                {
                    id: 6,
                    img: c_af_6,
                    name: "Arturo Fuente Canone",
                    amount: 20,
                    color: "Medium Brown",
                    size: "8.5 × 52",
                    price: 153,
                    count: 1,
                },
                {
                    id: 7,
                    img: c_af_7,
                    name: "Arturo Fuente Canone",
                    amount: 20,
                    color: "Dark Brown",
                    size: "8.5 × 52",
                    price: 153,
                    count: 1,
                },
                {
                    id: 8,
                    img: c_af_8,
                    name: "Arturo Fuente Cazadores",
                    amount: 30,
                    color: "Medium Brown",
                    size: "6 × 50",
                    price: 110,
                    count: 1,
                },
                {
                    id: 9,
                    img: c_af_9,
                    name: "Arturo Fuente Chateau Fuente",
                    amount: 20,
                    color: "Light Brown",
                    size: "4.5 × 50",
                    price: 105,
                    count: 1,
                },
                {
                    id: 10,
                    img: c_af_10,
                    name: "Arturo Fuente Chateau Fuente",
                    amount: 20,
                    color: "Dark Brown",
                    size: "4.5 × 50",
                    price: 105,
                    count: 1,
                },

            ],
        },
    },
    _subscriberCall() {

    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._subscriberCall = observer;
    },

    addButton(location, id) {
        if (location === 'c_1') {
            this._state.cigarsData.montecristoData[id - 1].count += 1;
        } else if (location === 'c_2') {
            this._state.cigarsData.arturoFuenteData[id - 1].count += 1;
        } else if (location === 'c_3') {

        } else if (location === 'c_4') {

        } else if (location === 'c_5') {

        } else if (location === 'c_6') {

        } else if (location === 'c_7') {

        } else if (location === 'c_8') {

        } else if (location === 'c_9') {

        } else if (location === 'c_10') {

        }
        this._subscriberCall(this._state);
    },
};

export default store;