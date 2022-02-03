import { useState } from "react";
import NewPostModal from "./modals/NewPostModal";
const FeedComponent = () => {
  const [posts, setPosts] = useState([]);


  const [showPostModal, setShowPostModal] = useState(false);
  const handlePostModal = () => {
    setShowPostModal(true);
    
  };
  return (
    <div className="feed-main">
      <div className="feed-header">
          <span id="feed-header-span">Feed</span>
        <div className="feed-header-content">
          
          <button className="btn-primary" onClick={handlePostModal}>
            + Post
          </button>
          {console.log(showPostModal)}
          {showPostModal ?  <NewPostModal setPosts={setPosts} posts={posts} />: null}
        </div>
        <div className="feed-container">
          <div className="feed-post">
            <div className="feed-post-header">Name and Image</div>
            <div className="feed-post-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedComponent;