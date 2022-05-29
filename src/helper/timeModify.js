export const increment = (state, type, action) => {
    switch (type) {
        case "hours":
            state[type] >= 0 && state[type] < 12
                ? action({
                    ...state,
                    [type]: state[type] + 1,
                })
                : action(state);
            break;
        case "minutes":
            state[type] >= 0 && state[type] < 60
                ? action({
                    ...state,
                    [type]: state[type] + 1,
                })
                : action(state);
            break;
        case "seconds":
            state[type] >= 0 && state[type] < 60
                ? action({
                    ...state,
                    [type]: state[type] + 1,
                })
                : action(state);
            break;
    }
}
export const decrement = (state, type, action) => {
    switch (type) {
        case "hours":
            state[type] > 0 && state[type] <= 12
                ? action({
                    ...state,
                    [type]: state[type] - 1,
                })
                : action(state);
            break;
        case "minutes":
            state[type] > 0 && state[type] <= 60
                ? action({
                    ...state,
                    [type]: state[type] - 1,
                })
                : action(state);
            break;
        case "seconds":
            state[type] > 0 && state[type] <= 60
                ? action({
                    ...state,
                    [type]: state[type] - 1,
                })
                : action(state);
            break;
    }
}