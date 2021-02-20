import React from 'react'
import TopNav from '../components/TopNav'

interface Props {
  
}

const Home = (props: Props) => {
  return (
    <div className="Home">
      <header>
        <TopNav
          isAuth={true}
          activePage="Home"
          name="Nahla Galal"
          imgUrl="https://via.placeholder.com/64"
        />
      </header>
    </div>
  );
}

export default Home
