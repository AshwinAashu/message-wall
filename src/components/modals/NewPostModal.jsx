import { useState } from 'react';



const NewPostModal = ({ showPostModal, setPosts, posts }) => {
    const [postText, setPostText] = useState('');

    if (!showPostModal) {
      return null;
    }
    // close modal and discard post
    const handleCancel = () =>{
      
    }
    // console.log(posts);
    //set post text
    const handleNewPostText = (e) =>{
      setPostText(e.target.value);
    }
    //set post text and GIF
    const handleNewPost = () =>{
      setPosts(...posts , postText);
    }
  
    // console.log(showPostModal);
    
    return (
      <div className="newPostModal-container">
        <div className="newPostModal-header">

          <input 
            type="text" 
            className ="post-textbox" 
            placeholder="Share your thoughts" 
            onChange={handleNewPostText}
            value={postText}
          />

        </div>
        <div className="newPostModal-buttons">

          <div className="gif-search-main">
            <button className="btn-secondary">GIF</button>
          </div>    

          <div className="newPostModal-controls">
            <button 
              className="btn-secondary" 
              onClick={handleCancel}>Cancel
            </button>

            <button 
              className="btn-primary"
              onClick={handleNewPost}>Post
            </button>

          </div>
        </div>
      </div>
    );
  };
  export default NewPostModal;
  