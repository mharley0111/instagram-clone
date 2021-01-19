# Instagram Clone

This project uses Next.js for the frontend and Express.js and MongoDB for the backend.

## Setting Up the Project

1. Make sure you have Docker and docker-compose installed on your machine.
2. Clone the repo.
3. Run the following line in your terminal:
   > \$ docker-compose up --build

## Testing the Project

1. Navigate to http://localhost:3000.
2. Click the 'Sign Up' link below the form.
3. Enter a valid email and password (length > 6).
4. Congratulations! You have successfully authenticated with the server. You should see your email and a 'Sign Out' button displayed on the home page. Click the 'Sign Out' button.
5. Enter the same email and password in the Sign In form. (_Note: While there are two other input fields, these do not do anything right now._)

## Done

- [x] Match Instagram HTML/CSS Sign In and Sign Up pages.
- [x] Users can sign up for a new account and login using JWT authentication.
- [x] Input email and password (length > 6) validation.
- [x] Logged in users are redirected to a page displaying their email.
- [x] Logged in users can sign out from a simple Sign Out button. The protected route to the user's credentials page should not be accessible.
- [x] Sign Up and Log In pages are separate.
- [x] Existing users are able to login.
- [x] The input field label moves to the top of the input box when the user is entering text.
- [x] Performs CRUD operations on a Mongo database.

## TODO

- [] Make Full Name and Username input fields function like other input fields, save to database, and display on home page along with email.
