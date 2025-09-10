export default function PostsCard({post, onSelect}){
    if (!post) return null;
    console.log("post diterima:", post);

    //cut body u/ preview
    const preview =
        typeof post.body === "string" && post.body.length > 100
        ? post.body.substring(0, 100) + "..."
        : post.body || "Konten tidak Tersedia";

    return (
        <div className="bg-white shadow rounded-xl p-4 border hover:shadow-lg transition">
            <h3 onClick={() => onSelect(post)}
                className="text-xl font-semibold mb-2 text-blue-600 cursor-pointer hover:underline">
                {post.title}
            </h3>
            <p className="text-gray-700 mt-2">
                {preview}
            </p>
        </div>
    )
}