import { useRef, useState } from "react";
import "./css/constants.css";

export const Category = () => {
  const categories = [
    { id: 1, name: "Education" },
    { id: 2, name: "Entertainment" },
  ];
  return (
    <div>
      <label htmlFor="category">Category:</label>
      <select name="" id="category">
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
          new_category_ref.current.showModal();
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
export const New_Category_Dialog = ({ dialog_ref, setOpen }) => {
  return (
    <dialog ref={dialog_ref} id="new-category">
      <p>Enter name of Category:</p>
      <input type="text" name="new-category" />
      <div>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            dialog_ref.current.close();
            setOpen(false);
          }}
        >
          Cancel
        </button>
      </div>
    </dialog>
  );
};
