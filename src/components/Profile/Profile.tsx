import React from 'react';
import s from './Profile.module.css';
import Post from "./My posts/Post/Post";
import MyPosts from "./My posts/MyPosts";

function Profile () {
    return (
        <div>

        <div className={'img'}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8ye7sE-0tcxVySt41XzQewEJsrDUg7YdNw&usqp=CAU'}/>
            {/*src={'https://www.forumdaily.com/wp-content/uploads/2016/06/Depositphotos_28019327_m-2015.jpg'}/>*/}
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />

        </div>
    )
}
export default Profile;