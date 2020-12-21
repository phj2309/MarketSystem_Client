import React, { useEffect, useState, useRef, memo } from "react";

import Input from "@components/Input";
import Button from "@components/Button";

import "./style.scss";
import MainLayout from "../../Templates/MainLayout";

const InfoChangePage = (props) => {

    const [name, setName] = useState("");
    const [pw, setPw] = useState("");
    const [pwConfirm, setPwConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [error, setError] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePwChange = (e) => {
        setPw(e.target.value);
    };

    const handlePwConfirmChange = (e) => {
        setPwConfirm(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePhoneNumChange = (e) => {
        setPhoneNum(e.target.value);
    };

    const changeBtn = async (e) => {
        let isValidate = validation();

        // if(isValidate) {
        //     Util.requestServer("auth/register", "POST", {
        //         name: name,
        //         pw: pw,
        //         email: email
        //     }).then(function (result) {
        //         if(result.code == 200) {
        //             alert(result.body.msg);
        //             props.history.push('/login');
        //         } else {
        //             alert(result.body.msg);
        //         }
        //     });
        // }
    };

    const validation = () => {
        let emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        let phoneNumRegex = /^\d{3}-\d{3,4}-\d{4}$/;

        if(name=="") {
            setError("이름을 입력하지 않았습니다.");
            return false;
        }

        if(pw=="" || pwConfirm=="") {
            setError("비밀번호를 입력하지 않았습니다.");
            return false;
        } else if(pw != pwConfirm) {
            setError("비밀번호가 일치하지 않습니다.");
            return false;
        }

        if(email=="") {
            setError("이메일을 입력하지 않았습니다.");
            return false;
        } else if(!emailRegex.test(email)) {
            setError("적합하지 않은 이메일 형식입니다.");
            return false;
        }

        if(phoneNum=="") {
            setError("전화번호를 입력하지 않았습니다.");
            return false;
        } else if(!phoneNumRegex.test(phoneNum)) {
            setError("적합하지 않은 전화번호 형식입니다.");
            return false;
        }

        return true;
    }

    return (
        <MainLayout>
            <div className="InfoChangePage">
                <div className="InfoChange">
                    <p className="title">마이페이지</p>
                    <div className="inputs">

                        <Input
                            type="name"
                            placeholder="이름"
                            margin="0px 0px 10px 0px"
                            width="100%"
                            value={name}
                            onChange={handleNameChange}
                        ></Input>

                        <Input
                            type="text"
                            placeholder="아이디"
                            margin="0px 0px 10px 0px"
                            width="100%"
                            value="phj2309"
                            disabled
                        ></Input>

                        <Input
                            type="password"
                            placeholder="비밀번호"
                            margin="0px 0px 10px 0px"
                            width="100%"
                            value={pw}
                            onChange={handlePwChange}
                        ></Input>

                        <Input
                            type="password"
                            placeholder="비밀번호 확인"
                            margin="0px 0px 10px 0px"
                            width="100%"
                            value={pwConfirm}
                            onChange={handlePwConfirmChange}
                        ></Input>

                        <Input
                            type="email"
                            placeholder="이메일"
                            margin="0px 0px 10px 0px"
                            width="100%"
                            value={email}
                            onChange={handleEmailChange}
                        ></Input>

                        <Input  
                            type="name"
                            placeholder="전화번호"
                            margin="0px 0px 10px 0px"
                            width="100%"
                            value={phoneNum}
                            onChange={handlePhoneNumChange}
                        ></Input>
                    </div>
                    <div className="boxBottom">
                        <p className="error">{error}에러메세지</p>
                        
                        <Button value="취소" height="50px" width="45%" margin="0 10px"></Button>
                        
                        <Button value="수정완료" height="50px" width="45%" float="right"
                        onClick={changeBtn}
                        ></Button>
                    </div>

                </div>
            </div>
            </MainLayout>
    );
};

export default InfoChangePage;
