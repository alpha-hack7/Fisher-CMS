export const Posts_Section = ({ posts }) => {
  return (
    <section>
      <h2>Posts</h2>
      {posts.length > 0 ? (
        <>
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))}
        </>
      ) : (
        <p>No Posts Found</p>
      )}
    </section>
  );
};
export const Videos_Section = ({ videos }) => {
  return (
    <section>
      <h2>Videos</h2>
      {videos.length > 0 ? (
        <>
          {videos.map((video) => (
            <div className="video" key={video.id}>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))}
        </>
      ) : (
        <p>No Videos Found</p>
      )}
    </section>
  );
};

const Drafts_page = () => {
  return (
    <div>
      <nav>Dashboard &gt; Drafts &gt;</nav>
      <h3>These are the posts and videos you have made but not uploaded.</h3>
      <p>You can think of them as work in progress.</p>
      <main>
        <Posts_Section posts={[]} />
        <Videos_Section videos={[]} />
      </main>
    </div>
  );
};

export default Drafts_page;
