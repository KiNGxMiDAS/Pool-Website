# Pure Life (in progress)

This is a marketing website for Pure Life, specializing in pools, pavers, ponds, and hardscaping. The site includes multiple pages: Home, Products, Philosophy, and Contact, and features components such as a Navbar, Hero Carousel, and Photo Grid.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Features

- **Home Page**: Displays a hero carousel, welcome message, and photo grid.
- **Responsive Navbar**: Allows users to navigate between pages.
- **Photo Grid**: Highlights different images related to pools and hardscaping.
- **Multiple Pages**: Product details, company philosophy, and contact information.

## Installation

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/<your-username>/pool-website.git
   ```

2. Navigate into the project directory:
   ```sh
   cd pool-website
   ```

3. Install the dependencies:
   ```sh
   yarn install
   ```

4. Run the development server:
   ```sh
   yarn start
   ```

## Usage

The website is built using React with `react-router-dom` for routing and `react-bootstrap` for styling components. The home page features an interactive hero carousel and a photo grid.

To make modifications, update the corresponding components in the `src/components` directory.

## Project Structure

```
pool-website/
├── public/
├── src/
│   ├── components/
│   │   ├── lower/
│   │   │   ├── HeroCarousel.tsx
│   │   │   ├── PhotoGrid.tsx
│   │   ├── upper/
│   │   │   ├── NavBar.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── Philosophy.tsx
│   │   ├── Contact.tsx
│   ├── App.tsx
│   ├── index.tsx
├── package.json
├── README.md
└── yarn.lock
```

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Bootstrap**: To style components with Bootstrap.
- **React Router DOM**: For handling routing between different pages.
- **TypeScript**: For static type checking.
- **Bootstrap**: CSS framework for responsive design.
