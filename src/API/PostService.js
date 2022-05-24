import axios from "axios";

const PostService = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return response.data
    }
    catch (e) {
        throw e;
    }
};

export default PostService;

// export default class PostService {
//     static async getAll() {
//         try {
//             const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
//             return response.data
//         } catch (e) {
//             console.log(e);
//         }
//     }
// }