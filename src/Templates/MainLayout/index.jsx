import React, { useEffect, useState, memo } from "react";
import { observer, inject } from "mobx-react";
import { withRouter, Link } from "react-router-dom";


import LogoutIcon from "@asset/logout.svg";
import ChatIcon from "@asset/chat.svg";
import openMenuIcon from "@asset/open-menu.svg";
import UserIcon from "@asset/user.svg";
import AddIcon from "@asset/add.svg";

import "./style.scss";

const MainLayout = (props) => {
    const { storeMain, storeModal, storeLecture } = props;
    const [visible, setVisible] = useState(true);
    let menuElem = null;

    const handleLogout = (e) => {
        sessionStorage["token"] = "";
        storeMain.logout();
    };

    const handleVisibleMenu = (e) => {
        //console.log('asd');
        storeMain.setVisible(!storeMain.visible);
    };

    if (!storeMain.visible) {
        menuElem = (
            <div className="Menu">
                <div className="Top">
                    <div className="VisibleMenu" onClick={handleVisibleMenu}>
                        <img className="openMenuIcon" src={openMenuIcon} alt=""></img>
                    </div>

                    <div className="UserInfo">
                        <p className="userName">쥬르리</p>
                    </div>
                </div>
                <div className="MainMenu nav">
                    <ul>
                        <li>
                            <img className="lectureIcon" src={AddIcon} alt=""></img>
                            <p>상품 등록</p>
                        </li>
                        <li>
                            <img className="lectureIcon" src={ChatIcon} alt=""></img>
                            <p>채팅</p>
                        </li>
                        <li onClick={() => {
                                storeMain.setMenu("infochange");
                                props.history.replace(
                                    "/infochange" 
                                );
                            }}
                        >
                            <img className="lectureIcon" src={UserIcon} alt=""></img>
                            <p>마이페이지</p>
                        </li>
                    </ul> 
                </div>
                
                <div className="Bottom" onClick={handleLogout}>
                    <div className="logoutBtn">
                        <img className="logoutIcon" src={LogoutIcon} alt=""></img>
                        <p className="logoutText">로그아웃</p>
                    </div>
                </div>
            </div>
        );
       
        
    }else {        
         // 메뉴 최소화 눌렀을때
         menuElem = (
            <div className="Menu small">
                <div className="Top">
                    <div className="VisibleMenu" onClick={handleVisibleMenu}>
                        <img className="openMenuIcon" src={openMenuIcon} alt=""></img>
                        <div className="notification">
                            <p>+</p>
                        </div>
                    </div>
                </div>
                <div className="Bottom" onClick={handleLogout}>
                    <div className="logoutBtn">
                        <img className="logoutIcon" src={LogoutIcon} alt=""></img>
                    </div>
                </div>
            </div>
        );
        
    }

    return (
        <div className="MainLayout">
            {menuElem}
            <div className="Content">{props.children}</div>
        </div>
    );
};

export default inject(
    "storeMain"
)(withRouter(observer(MainLayout)));
