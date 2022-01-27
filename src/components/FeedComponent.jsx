import { useState } from "react";
import NewPostModal from "./modals/NewPostModal";
const FeedComponent = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const handlePostModal = () => {
    setShowPostModal(true);
  };
  return (
    <div className="feed-main">
      <div className="feed-header">
        <div className="feed-header-content">
          <span id="feed-header-span">Feed</span>
          <button className="btn-primary" onClick={handlePostModal}>
            +Post
            <NewPostModal showPostModal={showPostModal} />
          </button>
        </div>
        <div className="feed-container"></div>
      </div>
    </div>
  );
};
export default FeedComponent;
