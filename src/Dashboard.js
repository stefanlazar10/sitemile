import React from "react";
import "./Dashboard.css";
import logo from "./logo.jpg";
import logo1 from "./findlocal.png";
import handyman from "./handyman.png";
import { useState, useEffect } from "react";
import { Button, Fab, Menu, MenuItem, IconButton } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import { render } from "@testing-library/react";

export default function Dashboard() {
  const [Lista, setLista] = useState("list");
  useEffect(() => {
    setLista();
    console.log("ok");
  }, [Lista]);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menus">
          <p>Post request</p>
        </div>
        <div className="menus">
          <p>Join as a pro</p>
        </div>
        <div className="menus">
          <p>Login</p>
        </div>
        <div className="list">
          {/* <ListIcon onClick={() => setLista("list")} /> */}
        </div>
      </div>
      <div className="bar" />
      <div className="search">
        <div className="searchbar">
          <h1>Find local professionals for just about anything.</h1>
          <div className="buttons">
            <input
              type="btnSearch"
              className="btnSearch"
              placeholder="Carpet Cleaning"
            />
            <input type="button" value="Search" />
          </div>
        </div>
        <div className="logo1">
          <img src={logo1} alt="logo1" />
        </div>
      </div>
      <div className="bar" />
      <div className="explore">
        <div className="explore-title">
          <h2>Explore the Marketplace</h2>
        </div>
        <div className="blocks">
          <div className="types">
            <p>Home,Building & Trade</p>
          </div>
          <div className="types">
            <p>Security</p>
          </div>
          <div className="types">
            <p>Transport</p>
          </div>
          <div className="types">
            <p>Computers & Technology</p>
          </div>
          <div className="types">
            <p>Events</p>
          </div>
          <div className="types">
            <p>More</p>
          </div>
        </div>
      </div>
      <div className="popular">
        <div className="wrapper">
          <div className="title">
            <h2>Popular services near you</h2>
          </div>
          <div className="cards-list">
            <div class="card">
              <img src={handyman} alt="handy" />
              <div class="card-body">
                <h5 class="card-title">Handyman</h5>
              </div>
            </div>
            <div class="card">
              <img src={handyman} alt="handy" />
              <div class="card-body">
                <h5 class="card-title">House Cleaning</h5>
              </div>
            </div>
            <div class="card">
              <img src={handyman} alt="handy" />
              <div class="card-body">
                <h5 class="card-title">Event Catering</h5>
              </div>
            </div>
            <div class="card">
              <img src={handyman} alt="handy" />
              <div class="card-body">
                <h5 class="card-title">Carpet Cleaning</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h1>Get things done with Snupit</h1>
      </div>
    </>
  );
}
