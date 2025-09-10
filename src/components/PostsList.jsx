import PostsCard from "./PostsCard";

export default function PostsList({posts, onSelect}){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto p-4">
            {posts.map((post) => (
                <PostsCard key={post.id} post={post} onSelect={onSelect} />
            ))}
        </div> 
    );
}