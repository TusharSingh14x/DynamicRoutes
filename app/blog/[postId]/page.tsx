import axios from "axios";

//this basically handels all the requests that have a dynamic parameter like /blogs/1 or /blogs/2 
export default async function BlogPage({params}:any){
    const postId= (await params).postId;
    const response=await axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`);
 const data=response.data;
 return <div>
        Blog page {postId}
        <br></br>
        title-{data.title}
        <br></br>
        body-{data.body} 
    </div>
}


