import { createSlice } from "@reduxjs/toolkit";

let initialState = [
  {
    id: "pd_1",
    name: "prod_1sfsfdsfds",
    price:399,
    des: "azahnjzba",
    qty: 0,
  },
  {
    id: "pd_2",
    name: "prod_2",
    price:34,
    des: "two abkbs",
    qty: 0,
  },
  {
    id: "pd_3",
    name: "prod_3",
    des: "three azahnjzba",
    price:3,
    qty: 0,
  },
  {
    id: "pd_4",
    name: "prod_4",
    des: "four azahnjzba",
    price:39,
    qty: 0,
  },
  {
    id: "pd_5",
    name: "prod_5",
    price:9,
    des: "five azahnjzba",
    qty: 0,
  },
];

const productslice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, action) => {


     state.filter((item)=>{
        if (item.id == action.payload) {
          item.qty++
        }
      })



    console.log(state);



    },
    decrease: (state, action) => {
      console.log("decrease",action.payload);
      state.filter((item)=>{
        if (item.id == action.payload) {
          item.qty--
        }
      })
    },
  },
});

export const { add,decrease } = productslice.actions;
export default productslice.reducer;
