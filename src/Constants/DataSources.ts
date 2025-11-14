
export enum DataSource {
    AshtonAthletic,
    BamberBridge,
    Darwen,
  }

export const SourceToString = (source: DataSource) => {
  switch (source){
    case DataSource.AshtonAthletic: {
      return `Ashton Athletic`
    }
    case DataSource.BamberBridge: {
      return 'Bamber Bridge'
    }
    case DataSource.Darwen: {
      return 'Darwen FC'
    }
  }
}

export const SourceToShortString = (source: DataSource) => {
  switch (source){
    case DataSource.AshtonAthletic: {
      return `A. Athletic`
    }
    case DataSource.BamberBridge: {
      return 'B. Bridge'
    }
    case DataSource.Darwen: {
      return 'Darwen FC'
    }
  }
}

export const SourceToColours = (source: DataSource) => {
  switch (source){
    case DataSource.AshtonAthletic: {
      return {primary: 'blue', secondary: 'yellow', lightPrimary: '#CCDDFF', button: 'blue'}
    }
    case DataSource.BamberBridge: {
      return {primary: 'black', secondary: 'white', lightPrimary: '#CCCCCC', button: 'black'}
    }
    case DataSource.Darwen: {
      return {primary: 'red', secondary: 'white', lightPrimary: '#FFDDCC', button: 'red'}
    }
  }
}