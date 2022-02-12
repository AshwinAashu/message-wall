import React from 'react';
const PostTemplate = ({posts}) => {
    return(
        posts.map((items) => 
            <div className="post-template-header" key= {items.id}>
                <div className="post-template-header-details">
                    <h3>Test User</h3>
                </div>
                <div className="post-template-content">
                    <div className="post-template-content-text">
                        {items.text}
                    </div>
                    <div className="post-template-content-image">
                        {items.image}
                    </div>
                </div>
            </div>
        )
    )
}
export default PostTemplate;