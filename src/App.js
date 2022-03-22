import React,{useEffect, useState} from "react";
import "./style.css";
import Header from './components/Header/Header'
import Content from './components/Content/Content'
export default function App() {
  return (
    <div>
        <Header/>
        <Content/>
    </div>
  );
}
