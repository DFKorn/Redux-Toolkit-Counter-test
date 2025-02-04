import { useGetPostsQuery } from "../state/posts/postsApiSlice"

const PostsList = () => {
    const {data: posts, isLoading, isError} = useGetPostsQuery({})

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError){
        return <div>Error...</div>
    }

    return (
    <div>
        <ul>
            {posts?.map((post) => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    </div>)
}

export default PostsList