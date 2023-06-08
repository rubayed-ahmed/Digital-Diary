import { loadBlogDetails } from "../actions/blogAction"

const fetchBlogDetails = id => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blogs/${id}`)
        const data = await res.json()

        if(data.length) {
            dispatch(loadBlogDetails(data))
        }
    }
}

export default fetchBlogDetails;