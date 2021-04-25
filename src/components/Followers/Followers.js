import React from "react";
import { ReactComponent as FacebookLogo } from "../../images/icon-facebook.svg";
import { ReactComponent as TwitterLogo } from "../../images/icon-twitter.svg";
import { ReactComponent as InstagramLogo } from "../../images/icon-instagram.svg";
import { ReactComponent as YoutubeLogo } from "../../images/icon-youtube.svg";

const Followers = () => {
  const cards = [
    {
      icon: <FacebookLogo />,
      count: 1987,
      dailyChange: 12,
    },
    {
      icon: <TwitterLogo />,
      count: 1044,
      dailyChange: 99,
    },
    {
      icon: <InstagramLogo />,
      count: 11000,
      dailyChange: 1099,
    },

    {
      icon: <YoutubeLogo />,
      count: 8239,
      dailyChange: -144,
    },
  ];
  return (
    <>
      {cards.map((card) => {
        <div>
          {card.icon}
          <span>{card.count}</span> Followers
          <span>{card.dailyChange}</span>{" "}
        </div>;
      })}
    </>
  );
};

export default Followers;
