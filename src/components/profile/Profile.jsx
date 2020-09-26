import React from "react";
import MyPosts from "./Myposts/MyPosts";
import s from './Profile.module.css';
import Profileinfo from "./Profileinfo/Profileinfo";


const Profile = () => {
    return (
        <div>
            <Profileinfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;
