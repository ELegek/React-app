import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post"

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        // eslint-disable-next-line no-useless-escape
        {id: 2, message: 'It\`s my first post!', likesCount: 11},
    ];

    let postsElements = posts.map( p => <Post message={p.message} like={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>new post</div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;
