const Drafts_page = () => {
  return (
    <div>
      <nav>Dashboard &gt; Drafts &gt;</nav>
      <h3>These are the posts and videos you have made but not uploaded.</h3>
      <p>You can think of them as work in progress.</p>
      <main>
        <section>
          <h2>Posts</h2>
          {/* {posts.map((post) => (
              <div className="post" key={post.id}>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            ))} */}
        </section>
        <section>
          <h2>Videos</h2>
          {/*{videos.map((video) => (
            <div className="video" key={video.id}>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))} */}
        </section>
      </main>
    </div>
  );
};

export default Drafts_page;
