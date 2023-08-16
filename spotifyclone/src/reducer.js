export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // token: 'BQDYZVLJZuWqIeJmuJqgBiGq0OS6z-KgYxTzNr4bugoAqRVwRY0KzmHVB5s6ixmoaPF40JLnkVBphyPdL0YtDifZ6eZr9jnQ3ijyFdHYPaSXDJjDinyIDCLsnxIBE_yFj4MMpSwEI1dgEomypsGuPb8iIP9WiAgpR8nIi4GFhK1hufC3H6K4_n-C5Uwr4qeo16KxUcpb02cWq9ht',
};

const reducer = (state, action) => {
console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };    

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        default:
            return state;    
    }
};

export default reducer;