import React, { useState, useEffect } from "react";
import TextInputGender from "./TextInputGender";
import Button from "./Button";
import SingleSelect from "./Select";
import axios from "axios";

const END_POINT = process.env.REACT_APP_API_URL;

function Modal({ setModalOpen }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [extension, setExtension] = useState("");
  const [search_info, setSearch_info] = useState({
    search_start: "",
    search_end: "",
  });
  const requiredTextInputData = [
    [Email, setEmail, "이메일 입력", "email", "30"],
    [Password, setPassword, "비밀번호 입력", "password", "20"],
  ];

  const singleSelectData = [
    [
      [
        { value: "pdf", label: "pdf" },
        { value: "csv", label: "csv" },
        { value: "xlsx", label: "xlsx" },
      ],
      "Extension",
    ],
  ];

  function onChangeHandler(e, property) {
    const copied = Object.assign({}, search_info);
    copied[property] = e.target.value;
    setSearch_info(copied);
  }

  function selectInputHandler(e, name) {
    if (name === "Extension") {
      setExtension(e.value);
    }
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      postHandler();
    }
  };

  function postHandler(e) {
    let body = {
      user_email: Email,
      user_password: Password,
      extension: extension,
      search_start: search_info.search_start,
      search_end: search_info.search_end,
    };

    console.log(body);
    return axios
      .post(`${END_POINT}/???`, body, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        return setModalOpen(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    document.body.style.cssText = `
          position: fixed;
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <div className="modalcontainer">
      <div className="modalwrapper">
        <div className="modalheader">
          pair
          <br />
          review
        </div>
        <svg
          className="backbtn"
          onClick={() => setModalOpen(false)}
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.3993 10.8993C31.0339 10.2647 31.0339 9.2358 30.3993 8.6012C29.7647 7.96659 28.7358 7.96659 28.1012 8.6012L19.5002 17.2021L10.8993 8.6012C10.2647 7.96659 9.2358 7.96659 8.6012 8.6012C7.96659 9.2358 7.96659 10.2647 8.6012 10.8993L17.2021 19.5002L8.6012 28.1012C7.96659 28.7358 7.96659 29.7647 8.6012 30.3993C9.2358 31.0339 10.2647 31.0339 10.8993 30.3993L19.5002 21.7983L28.1012 30.3993C28.7358 31.0339 29.7647 31.0339 30.3993 30.3993C31.0339 29.7647 31.0339 28.7358 30.3993 28.1012L21.7983 19.5002L30.3993 10.8993Z"
            fill="#D9D9D9"
          />
        </svg>
        {requiredTextInputData.map((el, idx) => {
          return (
            <TextInputGender
              key={`SignInTextInput${idx}`}
              stateName={el[0]}
              stateFunc={el[1]}
              placeholder={el[2]}
              type={el[3]}
              maxLength={el[4]}
              onKeyPress={onKeyPress}
            />
          );
        })}
        {singleSelectData.map((el, i) => {
          return (
            <SingleSelect
              key={i}
              options={el[0]}
              name={el[1]}
              selectInputHandler={selectInputHandler}
            />
          );
        })}
        <div className="search_term">
          <div className="date_input_wrapper">
            <input
              type="date"
              value={search_info.search_start}
              onChange={(e) => onChangeHandler(e, "search_start")}
              className="date_input"
              style={{ marginRight: "6px" }}
            />
            ~
            <input
              type="date"
              value={search_info.search_end}
              onChange={(e) => onChangeHandler(e, "search_end")}
              className="date_input"
              style={{ marginLeft: "6px" }}
            />
          </div>
        </div>
        <Button
          subject={`다운로드`}
          color={`#ffffff`}
          backgroundColor={`#5d5fef`}
          onClickHandle={postHandler}
        />
      </div>
    </div>
  );
}

export default Modal;
