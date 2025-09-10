import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import PostsList from './components/PostsList'

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  //fetch postt
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      setPosts(data);
      setLoading(false);
    })
    .catch((err) => {
      alert.error("Error fetching posts : ", err);
      setLoading(false);
    });
  }, []);

  if (loading) return (
    <p className='text-center text-lg'>Loading....</p>
  )

  //render post yang diklik
  if (selectedPost) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-5">Detail Post</h1>
        <button
          onClick={() => setSelectedPost(null)}
          className="mb-4 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          ← Back to Posts
        </button>
        <h2 className="text-2xl font-medium mb-2">{selectedPost.title}</h2>
        <p className="text-gray-700">{selectedPost.body}</p>
      </div>
    );
  }

  //default view
  return (
    <>
      <h1 className='text-2xl font-bold mb-3'>CSPTAGRAM</h1>
      <PostsList posts={posts} onSelect={setSelectedPost}></PostsList>
    </>
  )
}

export default App
