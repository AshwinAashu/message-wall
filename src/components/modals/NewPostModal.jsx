const NewPostModal = ({ showPostModal }) => {
  if (!showPostModal) {
    return null;
  }
  return (
    <div className="newPostModal-container">
      <div className="newPostModal-header"></div>
      <div className="newPostModal-buttons">
        <button className="btn-secondary">GIF</button>
        <div className="newPostModal-controls">
          <button className="btn-secondary">Cancel</button>
          <button className="btn-primary">Post</button>
        </div>
      </div>
    </div>
  );
};
export default NewPostModal;
