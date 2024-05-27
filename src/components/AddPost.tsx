import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPost } from "@redux/slices/postSlice";
import { AppDispatch } from "@redux/store";

interface PostFormData {
  title: string;
  content: string;
}

const AddPost: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostFormData>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: PostFormData) => {
    dispatch(
      addPost({ id: Date.now(), title: data.title, content: data.content })
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Add Post</h2>

      {/* Title Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
            maxLength: {
              value: 100,
              message: "Title cannot exceed 100 characters",
            },
          })}
          className={`border p-2 w-full rounded ${
            errors.title ? "border-red-500" : ""
          }`}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Content Textarea */}
      <div className="mb-4">
        <textarea
          placeholder="Content"
          {...register("content", {
            required: "Content is required",
            minLength: {
              value: 3,
              message: "Content must be at least 3 characters",
            },
            maxLength: {
              value: 500,
              message: "Content cannot exceed 500 characters",
            },
          })}
          className={`border p-2 w-full rounded ${
            errors.content ? "border-red-500" : ""
          }`}
        ></textarea>
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
        )}
      </div>

      {/* Add Post Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full md:w-auto"
      >
        {" "}
        {/* Key change here */}
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
