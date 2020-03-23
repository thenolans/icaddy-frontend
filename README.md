#iCaddy

My husband and I enjoy playing golf.To become better golfers, we began writing down which club we use and how far we hit the ball. This information allows us to pick the best club for the hole based on the way we hit. The problem is we had to take time away from playing to average our shots.

My husband and I decided to create an application that could handle the math for us. So all we had to do was log our shots. My husband focused on the back-end while I focused on the front-end.

The application allows users to input a shot by selecting what club they used and what distance that they hit the ball. The application will return the average distance for that specific club.

#### Login and Register

I used the library Formik and Yup in all of the forms in the application. Formik handles the state of the form and handles the form submission. Yup handles the form validation.

I created a form that will allow users to create a new account or log in to an existing account. The server will provide the client with a web token. We store that token to local storage and pass the token using useContext.

I also utilized axios (promise basedHTTP client for the browser) which allowed me to intercept the request and add the client's token to grant the user access.

I don't like visiting websites that make me log in every time the page refreshes. To prevent this, I saved the token to local storage.

<img src="https://user-images.githubusercontent.com/54158919/77349965-34bf1b80-6d12-11ea-8b95-93d088a7250b.png">
<img src="https://user-images.githubusercontent.com/54158919/77350020-499baf00-6d12-11ea-8f48-ae5f6e369184.png">

#### Dashboard

By saving the user's token to local storage when they login or create an account, I am able to redirect users to the dashboard if they already have a valid token.

I used React-Router (React routing library) to handle the redirects and to allow me to build custom routes.

A user can have two different views once they are on the dashboard page. The first view is for users that do not have any shots logged.

<img  src="https://user-images.githubusercontent.com/54158919/77350127-6df78b80-6d12-11ea-9fef-38f9e3636162.png">

The second view is for users that have logged shots. The users will see a list of their clubs and the average next to their club.

<img src="https://user-images.githubusercontent.com/54158919/77350302-aac38280-6d12-11ea-85bf-733d8c9f192c.png">

Users can easily log a shot from both views, by clicking the log shot button.

#### Log a Shot

To create the log shot form, I utilized React-Select to create and style the drop down menu, as well as Formik and Yup.

<img src="https://user-images.githubusercontent.com/54158919/77350661-3c32f480-6d13-11ea-8bc0-d6e98ef02bb1.png">

---

I wanted to learn some new skills while building this application. I decided to add scss in the application as well as bootstrap for styling. Working with custom hooks.

## Setup Instructions

1. Clone this repository.
2. Install dependencies with `yarn install`
3. Start app with `yarn start`
