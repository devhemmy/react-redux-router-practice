const initState = {
    posts: []
}

const rootReducer = (state = initState , action) => {
    
    switch(action.type){
        case "ADD_POSTS":
            
            return {
                ...state,
                posts:action.posts
                
            }
            
            case "DELETE_POST":
                return{
                    ...state,
                    posts: state.posts.filter(post => post.id !== action.id)
                }
                
            default :
            return {
                ...state
            }
    }
}


export default rootReducer