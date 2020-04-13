# iCaddy

### Purpose

I recently started playing golf, and in order to determine which club I should use to hit each shot, I started writing down the distances I hit each of my clubs on average. The problem with this approach was it quickly became a hassle to continue to add up and average all of my shots.

The application allows users to input a shot by selecting what club they used and what distance that they hit the ball. The application will return the average distance for that specific club.

### Development focus

- Use `formik` to handle the state management of form data
- Use `yup` to handle validation of form data
- Use `axios` to handle server requests and append authorization headers
- Use `react-router` to handle routes and navigation
- Configure `create-react-app` to support `scss`
- Use `scss` to standardize colors, spacing, and other common styles
- Authorize user requests using a JSON web token stored in `localStorage`

### Screenshots

<div align="center">

<img width="150" height="230" alt="log in screen" src="https://user-images.githubusercontent.com/54158919/79132927-27c5a300-7d79-11ea-82ae-69eae3481cfb.png">

<img width="150" height="230" alt="register screen" src="https://user-images.githubusercontent.com/54158919/79132402-44ada680-7d78-11ea-975e-9e7668b9359e.png">

<img width="150" height="230" src="https://user-images.githubusercontent.com/54158919/79132526-79b9f900-7d78-11ea-9429-00324117c8e6.png">

<img width="150" height="230" alt="log a shot screen" src="https://user-images.githubusercontent.com/54158919/79132569-91917d00-7d78-11ea-8bbb-a80972c89b40.png">

<img width="150" height="230" alt="dashboard" src="https://user-images.githubusercontent.com/54158919/79132591-9c4c1200-7d78-11ea-8d40-62f0fe2e2ad5.png">

</div>

## Setup Instructions

1. Clone this repository.
2. Install dependencies with `yarn install`
3. Start app with `yarn start`
4. Create an account
5. Log shots and view averages
