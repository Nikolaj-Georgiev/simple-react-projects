# Football Tournament Website

## Description

A web application that visualizes the matches and results from the European Football Championship. This project demonstrates skills in React development, data manipulation, and responsive design.

## Features

- Tournament stages visualization
- Match details with team formations
- Team details with player rosters
- Bracket view for final stages
- Responsive design for various screen sizes

## Technologies Used

- React
- React Router for navigation
- CSS for styling with SCSS
- Jest and React Testing Library for testing

## Input Data

The application uses CSV files for data input:

- `players.csv`: Player information
- `teams.csv`: Team information
- `matches.csv`: Match details
- `records.csv`: Player participation records

## Project Architecture

- **App**: Main component managing routing
- **HomePage**: Visualizes tournament stages and matches
- **MatchDetails**: Displays match details, formations, and results
- **TeamDetails**: Shows team information and player roster
- **Bracket**: Displays bracket view of final tournament stages

## Implementation Highlights

- CSV parsing using JavaScript's `fetch` function
- Match sorting and tournament bracket organization
- Responsive React components for visualization

## Testing

The project includes unit and integration tests for key components and functions using Jest and React Testing Library. While not exhaustive, these tests cover critical functionality and demonstrate testing practices in React applications.

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/Nikolaj-Georgiev/simple-react-projects.git
```

2.**Navigate into the project subfolder**:

```bash
cd football-tournament
```

3.**Install dependencies**:

```bash
npm install
```

4.**Run the development server**:

```bash
npm run dev
```

5.**Open http://localhost:5173 in your browser**

### Running Tests

**to run the test suits:**

```bash
npm test
```

### Deployment

**The project is deployed and can be accessed at:**
[text](https://ng-football-tournament-v2.netlify.app/)https://ng-football-tournament-v2.netlify.app/

### License

**This project is MIT licensed**
