import dayjs from "dayjs";
import { DataSource } from "../Constants/DataSources";
import { AshtonFixtureList, BamberFixtureEndpointResponse, Fixture } from "./fixture-interfaces";

export const NormaliseFixtureResponse = (response: BamberFixtureEndpointResponse | AshtonFixtureList, source: DataSource) => {
    switch (source) {
        case DataSource.AshtonAthletic: {
            const ashtonFixtureList = response as AshtonFixtureList

            const fixtureList: Fixture[] = [];
            ashtonFixtureList.forEach((element, index) => {
                if (element.acf.home_team == 'Ashton Athletic' || element.acf.away_team == 'Ashton Athletic') {
                    fixtureList.push({
                        id: element.id,
                        date: element.acf.date,
                        season: element.acf.season,
                        location: element.acf.location,
                        location_image_url: element.acf.location_image_url,
                        home_team: element.acf.home_team,
                        away_team: element.acf.away_team,
                        home_team_logo_url: 'ashton',
                        away_team_logo_url: 'ashton',
                        attendance: element.acf.attendance.toString(),
                        home_score: element.acf.home_score,
                        away_score: element.acf.away_score,
                        HT_home_score: element.acf.ht_home_score,
                        HT_away_score: element.acf.ht_away_score,
                        home_scorers: element.acf.home_scorers,
                        away_scorers: element.acf.away_scorers,
                        sponsor_name: element.acf.sponsor_name,
                        sponsor_image_url: element.acf.sponsor_image_url,
                        sponsor_url: element.acf.sponsor_url
                    })
                }
            });
            return fixtureList;
        }
        case DataSource.BamberBridge: {
            const bamberFixtureResponse = (response as BamberFixtureEndpointResponse).response;

            const fixtureList: Fixture[] = [];
            bamberFixtureResponse.forEach((element, index) => {
                fixtureList[index] = {
                    id: element.fixture.id ,
                    date: dayjs(element.fixture.date, 'YYYY-MM-DD').format('YYYYMMDD'),
                    season: element.league.season,
                    location: element.fixture.venue.name,
                    location_image_url: '',
                    home_team: element.teams.home.name,
                    away_team: element.teams.away.name,
                    home_team_logo_url: element.teams.home.logo,
                    away_team_logo_url: element.teams.away.logo,
                    attendance: '',
                    home_score: element.goals.home,
                    away_score: element.goals.away,
                    HT_home_score: element.score.halftime.home,
                    HT_away_score: element.score.halftime.away,
                    home_scorers: '',
                    away_scorers: '',
                    sponsor_name: '',
                    sponsor_image_url: '',
                    sponsor_url: ''
                }
            });
            return fixtureList;
        }
        case DataSource.Darwen: {
            const ashtonFixtureList = response as AshtonFixtureList

            const fixtureList: Fixture[] = [];
            ashtonFixtureList.forEach((element, index) => {
                if (element.acf.home_team == 'Darwen FC' || element.acf.away_team == 'Darwen FC')
                {
                    fixtureList.push({
                        id: element.id,
                        date: element.acf.date,
                        season: element.acf.season,
                        location: element.acf.location,
                        location_image_url: element.acf.location_image_url,
                        home_team: element.acf.home_team,
                        away_team: element.acf.away_team,
                        home_team_logo_url: 'ashton',
                        away_team_logo_url: 'ashton',
                        attendance: element.acf.attendance.toString(),
                        home_score: element.acf.home_score,
                        away_score: element.acf.away_score,
                        HT_home_score: element.acf.ht_home_score,
                        HT_away_score: element.acf.ht_away_score,
                        home_scorers: element.acf.home_scorers,
                        away_scorers: element.acf.away_scorers,
                        sponsor_name: element.acf.sponsor_name,
                        sponsor_image_url: element.acf.sponsor_image_url,
                        sponsor_url: element.acf.sponsor_url
                    })
                }
            });
            return fixtureList;
        }
    }
}

