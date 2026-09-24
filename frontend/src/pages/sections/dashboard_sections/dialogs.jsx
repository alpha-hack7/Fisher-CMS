import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { add_category } from "../../../api/category";
import Loader from "../../../components/loader";
import { useCategories } from "../../../hooks/useCategories";

const Category = ({ setCategory }) => {
  const { data: categories, isLoading, error } = useCategories();
  useEffect(() => {
    if (error) {
      toast.error("Something went wrong");
    }
  }, [error]);
  if (isLoading) return <Loader />;
  return (
    <div>
      <label htmlFor="category">Category:</label>
      <select
        className="w-fit"
        onChange={(e) => setCategory(e.target.value)}
        id="category"
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id} className="text-black">
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const New_Category = () => {
  const new_category_ref = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="absolute top-0 right-0 bg-primary py-2 px-4 rounded-[10px] cursor-pointer"
        onClick={() => {
          setOpen(true);
          new_category_ref.current?.showModal();
        }}
      >
        New Category
      </div>
      {open && (
        <New_Category_Dialog dialog_ref={new_category_ref} setOpen={setOpen} />
      )}
    </>
  );
};
// New category dialog
const New_Category_Dialog = ({ dialog_ref, setOpen }) => {
  const [category, setCategory] = useState("");
  const queryClient = useQueryClient();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await add_category(category);
      await queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      toast.success("New Category made successfully!");
      closeDialog();
    } catch (error) {
      toast.error(error || "Something Went Wrong!");
    }
  };
  const closeDialog = () => {
    dialog_ref.current.close();
    setOpen(false);
  };
  return (
    <dialog
      ref={dialog_ref}
      id="new-category"
      className="flex w-75 mx-auto flex-col gap-4 items-center rounded-2xl border"
    >
      <p>Enter name of Category:</p>
      <input
        className="w-9/10 bg-blue-200 text-black"
        type="text"
        name="new-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <div className="w-full flex flex-row">
        <button
          className="flex-1 rounded-none bg-yes hover:bg-yes-hover"
          type="submit"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          className="flex-1 rounded-none bg-no hover:bg-no-hover"
          type="button"
          onClick={closeDialog}
        >
          Cancel
        </button>
      </div>
    </dialog>
  );
};
// Save draft post dialog
const Save_Draft_Post_Dialog = ({
  title,
  onUpload,
  draft_post_ref,
  setOpen,
}) => {
  return (
    <dialog
      className="w-fit mx-auto flex flex-col gap-4 px-4 py-2 my-auto"
      id="draft-post"
      ref={draft_post_ref}
    >
      <h3>{title}</h3>
      <p>Are you ready to post this as a draft?</p>
      <div className="flex justify-between">
        <button type="submit" onClick={onUpload}>
          Yes, Post This
        </button>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            draft_post_ref.current.close();
          }}
        >
          No, Not Yet
        </button>
      </div>
    </dialog>
  );
};
// Upload video Dialog
const Upload_Video_Dialog = ({ title, upload_ref, onUpload, setOpen }) => {
  return (
    <dialog
      id="upload-video"
      ref={upload_ref}
      className="w-fit mx-auto flex flex-col gap-4 px-4 py-2 my-auto"
    >
      <h3>Upload {title}</h3>
      <p>Are you sure you want to upload this video?</p>
      <div className="flex justify-between">
        <button type="button" onClick={() => onUpload("ready")}>
          Yes, Upload
        </button>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            upload_ref.current.close();
          }}
        >
          No, Cancel
        </button>
      </div>
    </dialog>
  );
};
// Save post dialog
const Save_Post_Dialog = ({ title, onUpload, post_ref, setOpen }) => {
  return (
    <dialog
      id="post"
      className="w-fit mx-auto flex flex-col gap-4 px-4 py-2 my-auto"
      ref={post_ref}
    >
      <h3>{title}</h3>
      <p>Are you ready to post this?</p>
      <div className="flex justify-between">
        <button type="submit" onClick={onUpload}>
          Yes, Post This
        </button>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            post_ref.current.close();
          }}
        >
          No, Not Yet
        </button>
      </div>
    </dialog>
  );
};
// Upload draft video dialog
const Save_Draft_Video_Dialog = ({
  title,
  save_draft_ref,
  onUpload,
  setOpen,
}) => {
  return (
    <dialog
      id="upload-video"
      ref={save_draft_ref}
      className="w-fit mx-auto flex flex-col gap-4 px-4 py-2 my-auto"
    >
      <h3>Save Draft {title}</h3>
      <p>Are you sure you want to save this video as a draft?</p>
      <div className="flex justify-between">
        <button type="button" onClick={() => onUpload("draft")}>
          Yes, Save Draft
        </button>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            save_draft_ref.current.close();
          }}
        >
          No, Cancel
        </button>
      </div>
    </dialog>
  );
};
// Delete video dialog
const Delete_Video_Dialog = ({ title, delete_ref }) => {
  return (
    <dialog id="delete-video" ref={delete_ref}>
      <h3>{title}</h3>
      <p>Confirm deletion of selected video.</p>
      <div>
        <button type="submit">Yes, Delete This</button>
        <button type="button">No, Don't dare</button>
      </div>
    </dialog>
  );
};
// Delete post dialog
const Delete_Post_Dialog = ({ post }) => {
  return (
    <dialog id="delete-post">
      <h3>{post.title}</h3>
      <p>Confirm deletion of this post.</p>
      <div>
        <button type="submit">Yes, Delete This</button>
        <button type="button">No, Don't dare</button>
      </div>
    </dialog>
  );
};

export {
  Category,
  New_Category,
  Delete_Video_Dialog,
  New_Category_Dialog,
  Save_Draft_Video_Dialog,
  Upload_Video_Dialog,
  Save_Post_Dialog,
  Save_Draft_Post_Dialog,
  Delete_Post_Dialog,
};
