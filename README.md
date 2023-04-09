<h1 align="center">Find Museum - Class 40 Final Project</h1>

This is the final project for the HackYourFuture curriculum we did as a class using the MERN stack by following the agile methodology with our team and a group of mentors.



https://user-images.githubusercontent.com/78509870/230748186-284031aa-5a2f-4acd-9498-46731ea559b2.mp4



With the increasing demand for museum visits, we thought of making such an app so that people can access museums and their information more easily. In our application, 
- User can reach the detailed information about the museum such as address, contact info and entrance fees.
- User can access the museum with filtering by city, price, category and rating.
- User can benefit from the experiences of other visitors about museums.
- Registered user can request a promotion code to buy more cheaper tickets from stated museums.
- User can review to museum for share own experience and also can add museum to favorites.

[Find Museum Demo](https://c40-team-sunday.herokuapp.com/)

## 2. Code structure
```
class40-project-team-sunday
├─ client
│  ├─ public
│  │  ├─ favicon.png
│  │  └─ index.html
│  ├─ src
│  │  ├─ App.jsx
│  │  ├─ AppWrapper.jsx
│  │  ├─ assets
│  │  │  ├─ css
│  │  │  │  └─ index.css
│  │  │  ├─ drop
│  │  │  │  ├─ edit.png
│  │  │  │  ├─ envelope.png
│  │  │  │  ├─ log-out.png
│  │  │  │  ├─ question.png
│  │  │  │  ├─ star.png
│  │  │  │  └─ user.png
│  │  │  ├─ heart
│  │  │  │  ├─ heart-regular.svg
│  │  │  │  └─ heart-solid.svg
│  │  │  ├─ img
│  │  │  │  ├─ findh.png
│  │  │  │  ├─ gift.svg
│  │  │  │  ├─ kunstmuseum.jpeg
│  │  │  │  ├─ logo-transparent.png
│  │  │  │  ├─ louwman-museum.jpeg
│  │  │  │  ├─ mobile-stores.png
│  │  │  │  ├─ no_data.svg
│  │  │  │  ├─ register-background.jpeg
│  │  │  │  └─ van-gogh-museum.jpeg
│  │  │  └─ museums
│  │  │     ├─ t11.jpeg
│  │  ├─ components
│  │  │  ├─ Favorite
│  │  │  │  ├─ Heart.css
│  │  │  │  └─ Heart.jsx
│  │  │  ├─ Footer
│  │  │  │  ├─ footer.css
│  │  │  │  └─ footer.jsx
│  │  │  ├─ Home-Page
│  │  │  │  ├─ Goal-Section
│  │  │  │  │  ├─ Goal.jsx
│  │  │  │  │  └─ goal.css
│  │  │  │  ├─ Searching-Bar
│  │  │  │  │  ├─ SearchingBar.jsx
│  │  │  │  │  └─ searching-bar.css
│  │  │  │  ├─ Upcoming-Events
│  │  │  │  │  ├─ Events.jsx
│  │  │  │  │  └─ events.css
│  │  │  │  └─ museum
│  │  │  │     ├─ Header.jsx
│  │  │  │     ├─ MuseumDetails.jsx
│  │  │  │     ├─ MuseumList.jsx
│  │  │  │     ├─ MuseumList.testid.js
│  │  │  │     ├─ museum-details.css
│  │  │  │     └─ review
│  │  │  │        ├─ ReviewCard.jsx
│  │  │  │        ├─ ReviewCardRate.jsx
│  │  │  │        ├─ ReviewForm.jsx
│  │  │  │        ├─ StarRating.jsx
│  │  │  │        ├─ review-card-rate.css
│  │  │  │        ├─ review-card.css
│  │  │  │        ├─ review-form.css
│  │  │  │        └─ star-rating.css
│  │  │  ├─ Museum-Overview
│  │  │  │  ├─ AllMuseums.jsx
│  │  │  │  ├─ FilterBar.jsx
│  │  │  │  ├─ MuseumCard.jsx
│  │  │  │  ├─ NotFound.jsx
│  │  │  │  ├─ SearchedMuseums.jsx
│  │  │  │  ├─ all-museums.css
│  │  │  │  ├─ filter-bar.css
│  │  │  │  ├─ museum-card.css
│  │  │  │  ├─ not-found.css
│  │  │  │  └─ searched-museums.css
│  │  │  ├─ Nav-Bar
│  │  │  │  ├─ Nav.jsx
│  │  │  │  ├─ Profile
│  │  │  │  │  ├─ Profile.jsx
│  │  │  │  │  └─ profile.css
│  │  │  │  └─ nav.css
│  │  │  ├─ Nav.testid.js
│  │  │  └─ common
│  │  │     ├─ loading
│  │  │     │  ├─ Loading.jsx
│  │  │     │  └─ loading.css
│  │  │     ├─ pagination
│  │  │     │  ├─ Pagination.jsx
│  │  │     │  └─ pagination.css
│  │  │     └─ unauthorized
│  │  │        ├─ UnAuthorized.jsx
│  │  │        └─ unauthorized.css
│  │  ├─ context
│  │  │  ├─ authContext.js
│  │  │  └─ museumContext.js
│  │  ├─ hooks
│  │  │  ├─ __tests__
│  │  │  │  └─ useFetch.test.js
│  │  │  ├─ scrollToUp.js
│  │  │  └─ useFetch.js
│  │  ├─ index.jsx
│  │  ├─ pages
│  │  │  ├─ Auth
│  │  │  │  ├─ ForgotPassword.jsx
│  │  │  │  ├─ LoginForm.jsx
│  │  │  │  ├─ OTPInput.jsx
│  │  │  │  ├─ RegisterForm.jsx
│  │  │  │  ├─ ResetPassword.jsx
│  │  │  │  ├─ forgot-password.css
│  │  │  │  ├─ login-form.css
│  │  │  │  ├─ otp-input.css
│  │  │  │  ├─ register-form.css
│  │  │  │  └─ reset-password.css
│  │  │  ├─ Home
│  │  │  │  └─ Home.jsx
│  │  │  ├─ MuseumOverview
│  │  │  │  ├─ MuseumOverview.jsx
│  │  │  │  ├─ SearchedOverview.jsx
│  │  │  │  ├─ museum-overview.css
│  │  │  │  └─ searched-overview.css
│  │  │  ├─ Museums
│  │  │  │  └─ Favorites.jsx
│  │  │  ├─ MyProfile
│  │  │  │  ├─ MyProfile.jsx
│  │  │  │  ├─ ProfileReviewCard.jsx
│  │  │  │  ├─ ReviewEdit.jsx
│  │  │  │  ├─ UserComments.jsx
│  │  │  │  ├─ my-profile.css
│  │  │  │  ├─ profile-review-card.css
│  │  │  │  ├─ review-edit.css
│  │  │  │  └─ user-comments.css
│  │  │  └─ Offers
│  │  │     ├─ OfferItem.jsx
│  │  │     ├─ Offers.jsx
│  │  │     └─ offers.css
└─ server
   └─ src
      ├─ __tests__
      │  ├─ createUser.test.js
      │  └─ user.test.js
      ├─ app.js
      ├─ controllers
      │  ├─ comment.js
      │  ├─ museum.js
      │  ├─ offer.js
      │  └─ user.js
      ├─ data
      │  ├─ museumData.js
      │  └─ museumsData.js
      ├─ db
      │  └─ connectDB.js
      ├─ index.js
      ├─ models
      │  ├─ Comment.js
      │  ├─ Museum.js
      │  ├─ Offer.js
      │  └─ User.js
      ├─ result.rest
      ├─ routes
      │  ├─ comment.js
      │  ├─ museum.js
      │  ├─ offer.js
      │  └─ user.js
      ├─ testRouter.js
      └─ util
         ├─ __tests__
         │  ├─ logging.test.js
         │  ├─ validateAllowedFields.test.js
         │  └─ validationErrorMessage.test.js
         ├─ logging.js
         ├─ mailer.js
         ├─ sendEmail.js
         ├─ validateAllowedFields.js
         └─ validationErrorMessage.js

```
### 2.1 Client structure

- `public` || public facing client code
- `__tests__` || any `jest` tests for specific components will be in a `__tests__` folder on the same level
- `__testUtils__` || any code that is only being used in the tests is put in the `__testUtils__` folder to separate that away from the rest of the code
- `components` || all of our shared components that are used over multiple pages
- `hooks` || all of our custom hooks
- `pages` || the page components of our app, any routing will go between these components
- `pages/components` || components used specifically on those pages
- `util` || any utility functions that can be used anywhere on the client side
- `index.jsx` || the start point of the client


### 2.2 Server structure

- `__tests__` || any `jest` tests for the api endpoints as that is our testing strategy for the backend
- `__testUtils__` || any code that is only being used in the tests is put in the `__testUtils__` folder to separate that away from the rest of the code
- `controllers` || all of our controller functions that interact with the database
- `db` || all of our configuration for the database
- `models` || all of our `mongoose` models will be placed here
- `routes` || code to match up the API with our controllers
- `util` || any utility functions that can be used anywhere on the server side
- `index.js` || the start point of the server

## 3. Stack / external libraries
<img src="https://img.shields.io/badge/-HTML%205-red" height="30" alt="HTML:5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/-CSS%203-brightgreen" height="30" alt="HTML:5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/-Javascript-yellow" height="30" alt="HTML:5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/-Node.js-blue" height="30" alt="HTML:5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/-Express.js-lightgrey" height="30" alt="HTML:5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/-MongoDB-green" height="30" alt="HTML:5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/-React-lightblue" height="30" alt="HTML:5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/badge/-git-red" height="30" alt="HTML:5">



### 3.1 Configuration libraries

- `dotenv` || To load the .env variables into the process environment. See [docs](https://www.npmjs.com/package/dotenv)
- `webpack` / `html-webpack-plugin` || To bundle our React app and create a static app to host. See [docs](https://webpack.js.org/)
- `husky` || To run our tests and linter before committing. See [docs](https://typicode.github.io/husky/#/)
- `eslint` || To check our code. We have different configurations for frontend and backend. You can check out the configuration in the `.eslintrc.(c)js` files in the respective `client` and `server` folders. See [docs](https://eslint.org/)
- `prettier` || To automatically format our code. See [docs](https://prettier.io/)
- `concurrently` || To run commands in parallel. See [docs](https://github.com/open-cli-tools/concurrently#readme)

For more information on how these work together including the automatic deployment to heroku, have a look at our detailed [DEV](./DEV.md) file.

### 3.2 Client-side libraries

- `@testing-library/*` || We use React Testing Library to write all of our tests. See [docs](https://testing-library.com/docs/react-testing-library/intro/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `jest-fetch-mock` || To mock out the backend for our testing purposes. See [docs](https://github.com/jefflau/jest-fetch-mock#readme)
- `prop-types` || To type-check our components. See [docs](https://github.com/facebook/prop-types)

### 3.3 Server-side libraries

- `nodemon` || To automatically restart the server when in development mode. See [docs](https://nodemon.io/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `supertest` || To more easily test our endpoints. See [docs](https://github.com/visionmedia/supertest#readme)
- `mongodb-memory-server` || To mock out our database in our backend tests. See [docs](https://github.com/nodkz/mongodb-memory-server)
- `cors` || To open up our API. See [docs](https://github.com/expressjs/cors#readme)
- `mongoose` || To add schemas to our database. See [docs](https://mongoosejs.com/)

### Our Team
* DevOps for the project [Rob van Kruijsdijk](https://www.linkedin.com/in/robvk/)
* TechLead [Dayan Jonker](https://www.linkedin.com/in/dayan-jonker-a3766b2a/)
* Product Owner [Michelle Audiffred](https://www.linkedin.com/in/michelleaudiffred/)
* Developer [Elif Nur Kalkan](https://www.linkedin.com/in/elif-nur-kalkan/)
* Developer [Svitlana Oliinyk](https://www.linkedin.com/in/svitlana-oliinyk-a67151252/)
* Developer [Ensar Bektas](https://www.linkedin.com/in/ensar-bektas/)
* Developer [Yasser Murshed](https://www.linkedin.com/in/yasser-m-674417214/)
* Developer [Gokhan Ozturk](https://www.linkedin.com/in/g%C3%B6khan-gokhanozturk/)
