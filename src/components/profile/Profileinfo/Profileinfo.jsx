import React from "react";
import s from './Profileinfo.module.css';


const Profileinfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img src="https://inn.spb.ru/images/500/DSC100535567.jpg" alt=""/>
            </div>
            <div className={s.descr}>
                ava + desc
            </div>
        </div>
    );
};

export default Profileinfo;
