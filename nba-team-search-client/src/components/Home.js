import React from 'react'
import Auth from './auth/Auth'

const Home = (props) => {
  return(
    <div className='uk-position-medium uk-position-center uk-text-center'>
      <h1 >Welcome to the Rec League App</h1>
      <div className="padding-bottom">
        <h3> Open source app for organizing your Rec League</h3>
      </div>
      <div className="padding-bottom">
       <Auth />
     </div>
      <div className="padding-top">
        <p className="padding-top">Manage your teams and players all in one app</p>
        <p> This is an open sourced project, so if you would like to contribute please go to our
        (Walkthrough video here)
        <a href="https://github.com/samsonyuwono/nba-team-search" target="_blank" rel="noopener noreferrer"> Github Page</a></p>
        <p>Created by <a href="https://github.com/samsonyuwono/" target="_blank" rel="noopener noreferrer">Samson Yuwono</a> as a project at the Flatiron School</p></div>
      </div>
  )

}

export default Home;
