import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { upload_post } from "../../../../api/post";
import {
  Category,
  New_Category,
  Save_Draft_Post_Dialog,
  Save_Post_Dialog,
} from "../dialogs";
import Loader from "../../../../components/loader";
const Make_post = () => {
  const _draft_post_ref = useRef(null);
  const _post_ref = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
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
  useEffect(() => {
    if (open) {
      if (status === "ready") {
        _post_ref.current?.showModal();
      } else if (status === "draft") {
        _draft_post_ref.current?.showModal();
      }
    }
  }, [open, status]);
  const handleSubmit = async () => {
    const payload = { ...post, category, status };
    setLoading(true);
    try {
      await upload_post(payload);
      toast.success(`Submit successfull. ${post.title}`);
    } catch (error) {
      toast.error(error || "Something went wrong");
    } finally {
      handleReset();
      setLoading(false);
    }
  };
  if (loading) return <Loader />;
  return (
    <article>
      <nav id="dash-nav">Dashboard &gt; Posts &gt; Make Post &gt;</nav>
      <div className="mt-4">
        <form className="flex flex-col gap-4 relative">
          <Category setCategory={setCategory} />
          <div className="flex flex-col">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              value={post.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
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
          <div className="flex flex-col">
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
          <div className="flex gap-4">
            <button
              className="w-fit"
              type="button"
              onClick={() => {
                setOpen(true);
                setStatus("draft");
              }}
            >
              Save Draft
            </button>
            <button
              className="w-fit"
              type="button"
              onClick={() => {
                setOpen(true);
                setStatus("ready");
              }}
            >
              Post
            </button>
          </div>
        </form>
        {open &&
          (status === "ready" ? (
            <Save_Post_Dialog
              title={post.title}
              onUpload={handleSubmit}
              post_ref={_post_ref}
              setOpen={setOpen}
            />
          ) : (
            <Save_Draft_Post_Dialog
              title={post.title}
              onUpload={handleSubmit}
              draft_post_ref={_draft_post_ref}
              setOpen={setOpen}
            />
          ))}
      </div>
    </article>
  );
};

export default Make_post;
