interface StateTypes{
    intro: boolean,
    stack: boolean,
    more: boolean,
}

interface ActionTypes{
    type: string,
}

export default function MainReducer(state: StateTypes, action: ActionTypes) {
    switch (action.type) {
        case "Intro":
            return {
                ...state,
                intro: true,
                stack: false,
                more: false,
            };
        case "Stack":
            return {
                ...state,
                intro: false,
                stack: true,
                more: false,
            };
        case "More":
            return {
                ...state,
                intro: false,
                stack: false,
                more: true,
            };
        default:
            break;
    }
    return state;
}