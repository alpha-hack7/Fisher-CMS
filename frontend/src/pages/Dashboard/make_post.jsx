import { useState } from "react";
import { toast } from "react-toastify";
import { upload_post } from "../../api/post";
import { Category, New_Category } from "./constants";
import "./css/make_post.css";
const Make_post = () => {
  const [post, setPost] = useState({
    title: "",
    short_text: "",
    description: "",
  });
  const handleChange = (e) => {
    setPost((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleReset = () => {
    setPost({
      title: "",
      short_text: "",
      description: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await upload_post(post);
      toast.success(`Submit successfull. ${post.title}`);
    } catch (error) {
      toast.error(error || "Something went wrong");
    } finally {
      handleReset();
    }
  };
  return (
    <article>
      <nav>Dashboard &gt; Posts &gt; Make Post &gt;</nav>
      <div className="make-post">
        <form onSubmit={handleSubmit}>
          <Category />
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              value={post.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="short-text-about">Short Text (About): </label>
            <textarea
              name="short_text"
              id="short-text-about"
              value={post.short_text}
              onChange={handleChange}
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <textarea
              name="description"
              id="description"
              value={post.description}
              onChange={handleChange}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <New_Category />
          <div>
            <button type="button">Save Draft</button>
            <button type="submit">Post</button>
          </div>
        </form>
        <dialog id="post">
          <h3>{post.title}</h3>
          <p>Are you ready to post this?</p>
          <div>
            <button type="submit">Yes, Post This</button>
            <button type="button">No, Not Yet</button>
          </div>
        </dialog>
        <dialog id="delete-post">
          <h3>{post.title}</h3>
          <p>Confirm deletion of this post.</p>
          <div>
            <button type="submit">Yes, Delete This</button>
            <button type="button">No, Don't dare</button>
          </div>
        </dialog>
      </div>
    </article>
  );
};

export default Make_post;
