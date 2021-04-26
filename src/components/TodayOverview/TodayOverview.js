import React from "react";
import { ReactComponent as FacebookLogo } from "../../images/icon-facebook.svg";
import { ReactComponent as TwitterLogo } from "../../images/icon-twitter.svg";
import { ReactComponent as InstagramLogo } from "../../images/icon-instagram.svg";
import { ReactComponent as YoutubeLogo } from "../../images/icon-youtube.svg";
const TodayOverview = () => {
  const data = [
    {
      text: "Page Views",
      count: 87,
      icon: <FacebookLogo />,
      changeInPrecent: 3,
    },
    { text: "Likes", count: 52, icon: <FacebookLogo />, changeInPrecent: -2 },
    {
      text: "Likes",
      count: 5462,
      icon: <InstagramLogo />,
      changeInPrecent: 2257,
    },
    {
      text: "Profile Views",
      count: 52000,
      icon: <InstagramLogo />,
      changeInPrecent: 1375,
    },
    {
      text: "Retweets",
      count: 117,
      icon: <TwitterLogo />,
      changeInPrecent: 303,
    },
    { text: "Likes", count: 507, icon: <TwitterLogo />, changeInPrecent: 553 },
    { text: "Likes", count: 107, icon: <YoutubeLogo />, changeInPrecent: -19 },
    {
      text: "Total Views",
      count: 1407,
      icon: <YoutubeLogo />,
      changeInPrecent: -12,
    },
  ];
  
  return (
    <div data-testid='overview'>
      <h3>Overview - Today</h3>
      {data.map((card, idx) => (
        <div key={idx} className="card">
            <span>{card.text}</span>
          <span title="icon">{card.icon}</span>
          <span>{card.count}</span> 
          <span>{card.changeInPrecent}</span>
        </div>
      ))}
    </div>
  );
};

export default TodayOverview;
