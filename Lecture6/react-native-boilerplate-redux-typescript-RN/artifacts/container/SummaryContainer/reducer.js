const initialState = {
    result: 0
};
export default function (state = initialState, action) {
    console.log('aaaaaa:', state, action);
    if (action.type === "ADD") {
        return {
            result: state.result + 1,
        };
    }
    if (action.type === "SUB") {
        return {
            result: state.result - 1,
        };
    }
    return state;
}
//# sourceMappingURL=reducer.js.map