import { LOAD_BLOG, LOAD_BLOG_DETAILS } from "../actionTypes/actionTypes"

export const loadBlog = (data) => {
    return {
        type: LOAD_BLOG,
        payload: data
    }
}

export const loadBlogDetails = (data) => {
    return {
        type: LOAD_BLOG_DETAILS,
        payload: data
    }
}