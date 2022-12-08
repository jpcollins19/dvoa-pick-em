import axios from "axios";

const LOAD_TEAMS = "LOAD_TEAMS";
const ADD_TEAM = "ADD_TEAM";
const DELETE_TEAM = "DELETE_TEAM";

//////////////////////////////////// ACTION CREATORS below:

const _loadTeams = (teams) => {
  return { type: LOAD_TEAMS, teams };
};

const _addTeam = (team) => {
  return { type: ADD_TEAM, team };
};

const _deleteTeam = (team) => {
  return { type: DELETE_TEAM, team };
};

//////////////////////////////////// THUNKS below:

export const loadTeams = () => {
  return async (dispatch) => {
    let teams = (await axios.get("/api/teams")).data;

    dispatch(_loadTeams(teams));
  };
};

export const addTeam = (team) => {
  return async (dispatch) => {
    team = (await axios.post(`/api/teams/`, team)).data;
    dispatch(_addTeam(team));
  };
};

export const clearTeams = (teams) => {
  return async (dispatch) => {
    teams.map(async (team) => {
      team = await axios.delete(`/api/teams/${team.id}`);
      dispatch(_deleteTeam(team));
    });

    setTimeout(() => {
      dispatch(loadTeams());
    }, 200);
  };
};

export const teams = (state = [], action) => {
  switch (action.type) {
    case LOAD_TEAMS:
      return action.teams;
    case ADD_TEAM:
      return [...state, action.team];
    case DELETE_TEAM:
      return [...state].filter((team) => team.id !== action.team.id);
    default:
      return state;
  }
};
