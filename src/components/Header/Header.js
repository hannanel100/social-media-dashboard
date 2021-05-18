import React, { useState } from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  color: hsl(230, 17%, 14%);
`;
const Header = () => {
  const [followers, setFollowers] = useState(23004);
  return (
    <>
      <StyledH2> Social Media Dashboard</StyledH2>
      <p>
        Total Followers: <span role='followers-count'>{followers}</span>
      </p>
    </>
  );
};

export default Header;
