const Loader = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-dvh overflow-hidden backdrop-blur-xs z-5 bg-secondary">
      <p className="animate-spin">Loading...</p>
    </div>
  );
};

export default Loader;
