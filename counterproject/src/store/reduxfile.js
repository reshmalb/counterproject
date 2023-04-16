import {createSlice,configureStore} from '@reduxjs/toolkit'

 const initialCounterState={counter:0,showCounter:true}
//USING REDUX TOOLKIT
const counterSlice=createSlice({
    name:'counter',
   initialState:initialCounterState,
    reducers:{
                increment(state){
                 state.counter++
            },
            decrement(state){
                state.counter--;
            },
            increase(state,action){
                state.counter=state.counter+action.payload;
            },
            decrease(state,action){
               state.counter=state.counter-action.payload;
            },
            toggleCounter(state){
                state.showCounter=!state.showCounter
            }

       } 
   })

   const initialAuthState={isAuthentiacted:false}

   const authSlice=createSlice({
    name:'Authentication',
    initialState:initialAuthState,
    reducers:{
            login(state){
                state.isAuthentiacted=true;
            },
            logout(state){
                state.isAuthentiacted=false
            }
    }
   })





// const counterReducer=(state=initialstate,action)=>{
//     if(action.type==='increment'){
//         return{
//             counter:state.counter+1,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type==='decrement'){
//         return{
//             counter:state.counter-1,
//             showCounter:state.showCounter

//         }
        
//     }
//     if(action.type==='increase'){
//         return{
//             counter:state.counter+action.counter,
//             showCounter:state.showCounter

//         }
//     }
//     if(action.type==='decrease'){
//         return{
//             counter:state.counter-action.counter,
//             showCounter:state.showCounter

//         }
        
//     }
//     if(action.type==='toggle'){
//         return{
//             counter:state.counter,
//             showCounter:!state.showCounter

//         }
//     }
//     return state;
// }


const store=configureStore({
    reducer:{counter:counterSlice.reducer,
              auth:authSlice.reducer}  
});
export const counterActions=counterSlice.actions;
export const authActions=authSlice.actions;

export default store;