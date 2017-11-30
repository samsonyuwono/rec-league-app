import fetch from 'isomorphic-fetch';
import { resetTeamForm } from './teamForm';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setTeams = teams => {
  return {
    type: 'GET_TEAMS_SUCCESS',
    teams
  }
}

const addTeam = team => {
  return {
    type: 'CREATE_TEAM_SUCCESS',
    team
  }
}

// ** Async Actions **
export const getTeams = () => {
  return dispatch => {
    return fetch(`${API_URL}/teams`)
      .then(response => response.json())
      .then(teams => dispatch(setTeams(teams)))
      .catch(error => console.log(error));
  }
}

export const createTeam = team => {
  return dispatch => {
    return fetch(`${API_URL}/teams`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ team: team })
    })
      .then(response => response.json())
      .then(team => {
        dispatch(addTeam(team))
        dispatch(resetTeamForm())
      })
      .catch(error => console.log(error))
  }
}
