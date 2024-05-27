import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import UpdatePost from './UpdatePost';
import { deletePost } from '../redux/slices/postSlice';
import { formatDistanceToNow } from 'date-fns';

const PostList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleDeletePost = (id: number) => {
    dispatch(deletePost(id));
  };

  return (
    <div className="p-4 mb-4 w-1/2">
      {posts?.length > 0 && <h2 className="text-2xl font-bold mb-4">Posts</h2>}
      {posts.map(post => (
        <div key={post.id} className="border p-4 mb-4 rounded relative">
          <h3 className="text-xl font-semibold overflow-hidden break-words">{post.title}</h3>
          <p className="text-gray-700 overflow-hidden break-words">{post.content}</p>

          <span className="absolute top-2 right-2 text-gray-500 text-sm">
            Created {formatDistanceToNow(post.id, { addSuffix: true })}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => setEditingPostId(post.id)}
              className="bg-yellow-500 text-white p-2 rounded mt-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeletePost(post.id)}
              className="bg-red-500 text-white p-2 rounded mt-2"
            >
              Delete
            </button>
          </div>
          {editingPostId === post.id && (
            <UpdatePost id={post.id} onClose={() => setEditingPostId(null)} />
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
