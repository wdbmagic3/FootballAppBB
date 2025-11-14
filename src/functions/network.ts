import { DataSource } from "../Constants/DataSources";

export const getFixtures = async (source: DataSource) => {
  try {
    var url = ''
    var init: object = {}
    if (source == DataSource.AshtonAthletic) {
      url = 'https://footballclubwebsites.com/wp-json/wp/v2/fixture?per_page=100';
    }
    else if (source == DataSource.BamberBridge) {
      url = 'https://v3.football.api-sports.io/fixtures?season=2024&team=7695'
      init = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '75fc9148b7a2efd691016a1bb17e9912',
          'x-rapidapi-host': 'v3.football.api-sports.io'
        },
      }
    }
    else if (source == DataSource.Darwen) {
      url = 'https://footballclubwebsites.com/wp-json/wp/v2/fixture?per_page=100';
    }
    const response = await fetch(url, init);
    return(await response.json());

  } catch (error) {
    console.error(error);
  }
}

export const getAshtonTeams = async () => {
  try {
    const response = await fetch(
      'https://footballclubwebsites.com/wp-json/wp/v2/team?per_page=100',
    );
    return (await response.json());

  } catch (error) {
    console.error(error);
  }
}

const bamberFixtureQuery = `
  query BaberFixture($season: Int)
`

export const getBamberFixtures = async () => {
  try {
    const response = await fetch(
      'https://v3.football.api-sports.io/fixtures?season=2024&team=7695',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '75fc9148b7a2efd691016a1bb17e9912',
          'x-rapidapi-host': 'v3.football.api-sports.io'
        },
      }
    );
    return(await response.json());

  } catch (error) {
    console.error(error);
  }
}

export const getBamberTeams = async () => {
  try {
    const response = await fetch(
      'https://templates.ecommerce2u.co.uk/wp-json/wp/v2/team?per_page=4',
    );
    return (await response.json());

  } catch (error) {
    console.error(error);
  }
}
