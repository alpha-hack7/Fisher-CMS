import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { add_category, useCategories } from "../../api/category";
import Loader from "../../sections/components/loader";
import "./css/constants.css";

export const Category = ({ setCategory }) => {
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
      <select onChange={(e) => setCategory(e.target.value)} id="category">
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export const New_Category = () => {
  const new_category_ref = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="new-category"
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
    <dialog ref={dialog_ref} id="new-category">
      <p>Enter name of Category:</p>
      <input
        type="text"
        name="new-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <div>
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
        <button type="button" onClick={closeDialog}>
          Cancel
        </button>
      </div>
    </dialog>
  );
};
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
const Upload_Video_Dialog = ({ title, upload_ref, onUpload, setOpen }) => {
  return (
    <dialog id="upload-video" ref={upload_ref}>
      <h3>Upload {title}</h3>
      <p>Are you sure you want to upload this video?</p>
      <div>
        <button type="submit" onClick={onUpload}>
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

export { Delete_Video_Dialog, New_Category_Dialog, Upload_Video_Dialog };
