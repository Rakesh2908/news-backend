# FlashBrief - Backend

The backend of FlashBrief is built with Node.js and Express, providing APIs to fetch and filter real-time news articles based on categories and countries.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-time News API Integration**: Fetches the latest news from NewsAPI.
- **Category and Country Filtering**: API routes to filter news based on categories and countries.
- **Optimized API Responses**: Limits data based on relevance and improves response times.

## Tech Stack

- **Backend**: Node.js, Express.js
- **External API**: NewsAPI

## Installation

### Prerequisites

- Node.js and npm

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/Rakesh2908/news-backend.git
    cd news-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory with the following:
        ```env
        PORT=<Port Number>
        NEWS_API_KEY=<Your NewsAPI Key>
        ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

Use a tool like Postman or cURL to test the endpoints or run the frontend along with the backend.

## API Endpoints

- **News Routes**
  - `GET /api/news` - Fetch all news articles
  - `GET /api/news/:category` - Fetch news by category
  - `GET /api/news/country/:countryCode` - Fetch news by country code

## Environment Variables

- `PORT`: Port on which the server runs (e.g., 5000)
- `NEWS_API_KEY`: API key to fetch news from NewsAPI

## Contributing

Contributions are welcome! Follow the steps below:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
