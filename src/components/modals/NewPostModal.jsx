import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
const NewPostModal = ({ setPosts, onClose }) => {
 
    const[postContent, setPostContent] = useState({
      'id': '',
      'text': '',
      'image': '',
    });
   
    console.log("postContent",postContent);
    
    const handleCancel = () =>{
      onClose();
    }
    
    //set post text
    const handleNewPostText = (e) =>{
      setPostContent({'id': uuid() ,'text': e.target.value, 'image':'' });
    }
   
    //set post text and GIF
    const handleNewPost = () =>{
      setPosts(postContent);
      onClose();
    }

   

  
   
    return (
      <div className="modal-container">
        <div className="newPostModal-container">
          <div className="newPostModal-header">

            <textarea 
              type="text" 
              className ="post-textbox" 
              placeholder="Share your thoughts" 
              onChange={handleNewPostText}
              value={postContent.text}
            ></textarea>

          </div>
          <div className="newPostModal-buttons">

           
            <button className="btn-secondary">GIF</button>
             

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
      </div>
    );
};
export default NewPostModal;
  