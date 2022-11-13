import React from "react";
import styled from "styled-components";

export default function Heading(props) {
  const Head = styled.h6`
    font-size: 120px;
    letter-spacing: 15px;
    line-height: 180px;
    text-transform: uppercase;
    color: #f8f8f8;
    font-weight: 300;
    font-family: "Inconsolata", monospace;
    width: max-content;
    position: relative;
    &::after {
      content: "${props.text}";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 22px;
      letter-spacing: 2px;
      line-height: 28px;
      text-transform: uppercase;
      color: #111111;
      font-weight: 400;
      font-family: "Inconsolata", monospace;
      border: 2px solid #f8f8f8;
      padding: 5px;
      background-color: #ffffff;
    }
    @media screen and (max-width: 1199px) {
      font-size: 100px;
      line-height: 120px;
      letter-spacing: 10px;
    }
    @media screen and (max-width: 991px) {
      font-size: 90px;
      line-height: 110px;
    }
    @media screen and (max-width: 767px) {
      font-size: 70px;
      margin: 0 auto;
      line-height: 90px;
      color: #adadad;
      &::after {
        display: none;
      }
    }
    @media screen and (max-width: 575px) {
      font-size: 40px;
      letter-spacing: 5px;
      line-height: 80px;
    }
  `;
  return <Head>{props.head}</Head>;
}
