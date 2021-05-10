const INCREMENT ="INCREMENT";
const REDUCE= "REDUCE"
export {
    INCREMENT,
    REDUCE
}

const add = num=>({
    type:"INCREMENT",
    num
});
const reduce = num =>({
    type:"REDUCE",
    num
})
// const add =  (dispatch,num) => {
//     dispatch({
//         type:"INCREMENT",
//         num
//     })
// };
// const  reduce =  (dispatch,num) => {
//     dispatch({
//         type:"REDUCE",
//         num
//     })
// }

export {
    add,
    reduce
}