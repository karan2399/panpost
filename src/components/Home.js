import React from "react";
import Login from "./Login";
import Container from 'react-bootstrap/Container'
import MainJumbotron from "./MainJumbotron";
import PostCard from "./PostCard";
import CardDeck from 'react-bootstrap/CardDeck'
import Description from "./Desciption";



const Home = () => (
    <div>
        <MainJumbotron />
        <Description />
        <CardDeck>
            <PostCard postedBy="Daniel" postedOn="Thursday, June 6th" postTitle="99 days of Quantine" />
            <PostCard postedBy="Skala" postedOn="Sunday, June 11th" postTitle="Business Breakdown" />
            <PostCard postedBy="Redcliff" postedOn="Monday, June 26th" postTitle="Working from Home" />
        </CardDeck>

    </div >

);

export default Home;