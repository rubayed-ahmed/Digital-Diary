import { loadBlog } from "../actions/blogAction"

const fetchBlogsData = () => {
    return async(dispatch, getState) => {
        const res = await fetch("http://localhost:5000/blogs")
        const data = await res.json()

        if(data.length) {
            dispatch(loadBlog(data))
    }
    }
}

export default fetchBlogsData;