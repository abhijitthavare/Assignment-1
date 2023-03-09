import React from "react";
import STYLE from "./Netflix.module.css"


const Netflix= ()=>{
    return(
      <div className={STYLE.main}>
        <img src="https://images.indianexpress.com/2022/03/Netflix.jpg?w=414" alt="" />
        <ul>
            <li><a href="home">Home</a></li>
            <li><a href="series">Serise</a></li>
            <li><a href="Films">Films</a></li>
            <li><a href="Latest">Latest</a></li>
            <li><a href="my list">My List</a></li>
        </ul>
        <div className={STYLE.search}><input type="text" placeholder="search" /></div>
      </div>
    )
}
export default Netflix