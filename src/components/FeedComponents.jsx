
import React,  { useState } from 'react';
import PostTemplate from './PostTemplate';
import NewPostModal from "./modals/NewPostModal";
const FeedComponent = () => {

  const [posts, setPosts] = useState([]);

  const [showPostModal, setShowPostModal] = useState(false);
  const handlePostModal = () => {
    setShowPostModal(true);
  };

  
  // console.log("posts are", posts);

  return (
    <div className="feed-main">
      <div className="feed-header">
          
        <div className="feed-header-content">
          <h1 >Procyon</h1>
          <button className="btn-primary" onClick={handlePostModal}>
            + Post
          </button>
        </div>
        
      </div>

      <div className="feed-container">

        {showPostModal ?  
        <NewPostModal 
          setPosts = { (postData) =>setPosts([...posts, postData])}
          onClose={()=>{
            setShowPostModal(false)
            } }
          /> 
          :" " }

        <div className="feed-post">
          <div className="feed-post-content">
            <PostTemplate posts={posts} />
          </div>
        </div>
      </div>
    </div>
  
  );
};
export default FeedComponent;
