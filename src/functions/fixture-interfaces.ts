export type AshtonFixtureList = AshtonFixture[]

export interface BamberFixtureEndpointResponse {
  get: string
  parameters: BamberParameters
  errors: any[]
  results: number
  paging: BamberPaging
  response: BamberFixtureResponse[]
}

export interface BamberFixtureResponse {
  fixture: BamberFixture
  league: {
    id: number
    name: string
    country: string
    logo: string
    flag: any
    season: number
    round: string
  }
  teams: {
    home: {
      id: number
      name: string
      logo: string
      winner: boolean
    }
    away: {
      id: number
      name: string
      logo: string
      winner: boolean
    }
  }
  goals: {
    home: number
    away: number
  }
  score: {
    halftime: {
      home: number
      away: number
    }
    fulltime: {
      home: number
      away: number
    }
    extratime: {
      home: number | undefined
      away: number | undefined
    }
    penalty: {
      home: number | undefined
      away: number | undefined
    }
  }
}

export interface BamberFixture {
  id: number
  referee: any
  timezone: string
  date: string
  timestamp: number
  periods: {
    first: number
    second: number
  }
  venue: {
    id: number
    name: string
    city: string
  }
  status: {
    long: string
    short: string
    elapsed: number
  }

}

export interface BamberParameters {
  season: string
  team: string
}

export interface BamberPaging {
  current: number
  total: number
}

export interface AshtonFixture {
  id: number
  date: string
  date_gmt: string
  guid: Guid
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: Title
  content: Content
  featured_media: number
  parent: number
  template: string
  competition: number[]
  class_list: string[]
  acf: Acf
  _links: Links
}

export interface Guid {
  rendered: string
}

export interface Title {
  rendered: string
}

export interface Content {
  rendered: string
  protected: boolean
}

export interface Acf {
  date: string
  season: number
  location: string
  location_image_url: string
  home_team: string
  away_team: string
  attendance: number
  home_score: number
  away_score: number
  ht_home_score: number
  ht_away_score: number
  home_scorers: string
  away_scorers: string
  sponsor_name: string
  sponsor_image_url: string
  sponsor_url: string
}

export interface Links {
  self: Self[]
  collection: Collection[]
  about: About[]
  "wp:attachment": WpAttachment[]
  "wp:term": WpTerm[]
  curies: Cury[]
}

export interface Self {
  href: string
}

export interface Collection {
  href: string
}

export interface About {
  href: string
}

export interface WpAttachment {
  href: string
}

export interface WpTerm {
  taxonomy: string
  embeddable: boolean
  href: string
}

export interface Cury {
  name: string
  href: string
  templated: boolean

}export interface Fixture {
    id: number;
    date: string;
    season: number;
    location: string;
    location_image_url: string;
    home_team: string;
    home_team_logo_url: string;
    away_team: string;
    away_team_logo_url: string;
    attendance: string;
    home_score: number;
    away_score: number;
    HT_home_score: number;
    HT_away_score: number;
    home_scorers: string;
    away_scorers: string;
    sponsor_name: string;
    sponsor_image_url: string;
    sponsor_url: string;
}

