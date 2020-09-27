import React from "react";
import MyPosts from "./Myposts/MyPosts";
import s from './Profile.module.css';
import Profileinfo from "./Profileinfo/Profileinfo";


const Profile = (props) => {



    return (
        <div>
            <Profileinfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;
