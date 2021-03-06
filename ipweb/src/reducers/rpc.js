const initialState = {
    awb: {},
    ae: {},
    ccm: {},
    items: [],
    loading: false,
    need_update: true,
    error: null
};

export default function toCheck(state = initialState, action) {
    switch(action.type) {
        case 'GET_AWB_PARAMS':
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: false,
                awb: action.payload,
                need_update: false
            };
        case 'SET_AWB_PARAMS':
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: false,
                awb: [],
                need_update: true
            };
        case 'GET_AE_PARAMS':
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: false,
                ae: action.payload
            };
        case 'GET_CCM_PARAMS':
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: false,
                ccm: action.payload
            };
        case "FETCH_TO_CHECK_BEGIN":
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case "FETCH_TO_CHECK_SUCCESS":
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                items: action.payload
            };

        case "FETCH_TO_CHECK_FAILURE":
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
                };

        default:
                // ALWAYS have a default case in a reducer
                return state;
    }
}