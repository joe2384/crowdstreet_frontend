# Crowdstreet Take-Home
> This take-home is an app to filter restaurants by state, genre, and attire. The app also uses an input field to search restaurants by name, city, and genre. The app has pagination to help keep table rows to no more than ten listings. This app features React, Typescript, Redux, Enzyme, and Jest.

## Project features

## Landing Page
* The initial page should show a simple form with inputs for the following field:
* Form requirements
    - Investment Amount (Currency)
    - Investment Type (Text) eg. “Bond”, “Stocks”, “Real Estate” etc...
    - Total Net Worth (Currency)
    - User Estimated Yearly Income (Currency)
    - User Estimated Credit Score (Number from 300-850)

These fields are all required and should validate to type. Provide feedback to the
user when they are incorrect or missing information. There should be space for marketing copy
(Lorum Ipsem) and controls for moving forward.

## New Account Page
* If the api call does not return a disqualification message(see below), this page
* should have a simple account creation form including:
    - Username (Text)
    - Password (Text)

The username should be validated as an email and password should require more than 8
characters and a number or special character. Ensure the user types their password
twice to validate their intent.

## Disqualification Page

Display a simple page with the disqualification message that comes from
the api call as well as fake information to get in contact with a customer service.
There should be no further way to get off this page or re-enter the information.

## API call

* You should implement a mock fetch call for your backend communication. 
* This call should have the same interface as the real fetch and return a promise wrapped response object.
* The response should return disqualify message (Lorum Ipsem is fine) if the Investment Amount is
* more than 
    - 1/5th of their Yearly Income
    - Estimated Credit is below 600
    - Investment a=Amount is more than 3% of their Total Net Worth. 

Otherwise it should return a positive qualification flag. A `Bad Request` response should be returned
for any Investment Amount above $9,000,000.

## Technologies
 - React
 - Redux
 - Enzyme
 - Jest

## Demo

<http://crowdstreet_frontend.surge.sh/>

## Installation

```sh
npm install
```

## To run project

```sh
npm start
```

## To run test (Note, test only covers api request)

```sh
npm run test