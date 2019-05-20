export const DELETE_POST = "DELETE_POST"
export const ADD_POSTS = "ADD_POSTS"



export const deletePost = (id) => {
    return {
        type : DELETE_POST,
        id
    }
}

export const addPosts = (posts) => {
    return {
        type : ADD_POSTS,
        posts:posts

    }
}