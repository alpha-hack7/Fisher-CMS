import { Category, New_Category } from "./constants";
import "./css/make_post.css";
const Make_post = () => {
  const post = {
    title: "Sample Post Title",
    shortText: "This is a short text about the post.",
    description: "This is a detailed description of the post.",
  };
  return (
    <article>
      <nav>Dashboard &gt; Posts &gt; Make Post &gt;</nav>
      <div className="make-post">
        <form>
          <Category />
          <div>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" />
          </div>
          <div>
            <label htmlFor="short-text-about">Short Text (About): </label>
            <textarea
              name="short-text-about"
              id="short-text-about"
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <New_Category />
          <button type="submit">Post</button>
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
