import React from 'react'

const Header = () => {
    const followers = 23004;

    return (
        <>
             <h2> Social Media Dashboard</h2>
      <p>
        {" "}
        Total Followers: <span role='followers-count'>{followers}</span>
      </p>
        </>
    )
}

export default Header
