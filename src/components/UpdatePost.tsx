import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../redux/slices/postSlice';
import { RootState, AppDispatch } from '../redux/store';

const UpdatePost: React.FC<{ id: number; onClose: () => void }> = ({ id, onClose }) => {
  const post = useSelector((state: RootState) => state.posts.posts.find(p => p.id === id));
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const dispatch = useDispatch<AppDispatch>();

  const handleUpdatePost = () => {
    dispatch(updatePost({ id, title, content }));
    onClose();
  };

  return (
    <div className="p-4 mb-4 border-t mt-4">
      <h2 className="text-2xl font-bold mb-4">Update Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border p-2 mb-2 w-full rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        className="border p-2 mb-2 w-full rounded"
      ></textarea>
      <button
        onClick={handleUpdatePost}
        className="bg-green-500 text-white p-2 rounded mr-2"
      >
        Update Post
      </button>
      <button
        onClick={onClose}
        className="bg-gray-500 text-white p-2 rounded"
      >
        Cancel
      </button>
    </div>
  );
};

export default UpdatePost;
