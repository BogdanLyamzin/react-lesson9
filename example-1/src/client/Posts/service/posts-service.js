import instance from "../../../shared/services/basic-http-service";

export const getAllPosts = ()=> {
    return instance.get("/posts");
}

export const getOnePost = (id)=> {
    return instance.get(`/posts/${id}`);
}

export const addPost = (newPost) => {
    return instance.post("/posts", newPost)
}