import { Category, New_Category } from "./constants";
import "./css/upload_video.css";

const Upload_video = () => {
  const video = {
    title: "Sample Video Title",
    shortText: "This is a short text about the video.",
    description: "This is a detailed description of the video.",
  };
  return (
    <article>
      <nav>Dashboard &gt; Videos &gt; Upload Video &gt;</nav>
      <div className="upload-video">
        <form>
          <Category />
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" />
          </div>
          <div>
            <label htmlFor="short-text-about">Short Text (About):</label>
            <textarea
              name="short-text-about"
              id="short-text-about"
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label htmlFor="import-video">Import Video</label>
            <input
              type="file"
              name="import-video"
              accept="video/*"
              id="import-video"
            />
          </div>
          <New_Category />
          <button type="submit">Upload Video</button>
        </form>
        <dialog id="upload-video">
          <h3>Upload Video</h3>
          <p>Are you sure you want to upload this video?</p>
          <div>
            <button type="submit">Yes, Upload</button>
            <button type="button">No, Cancel</button>
          </div>
        </dialog>
        <dialog id="delete-video">
          <h3>{video.title}</h3>
          <p>Confirm deletion of selected video.</p>
          <div>
            <button type="submit">Yes, Delete This</button>
            <button type="button">No, Don't dare</button>
          </div>
        </dialog>
      </div>
    </article>
  );
};

export default Upload_video;
