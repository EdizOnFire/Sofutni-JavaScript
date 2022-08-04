# Tasks

## Initial setup
1. Initialize project. (npm init --yes)
2. Install nodemon, express, express-handlebars (npm i -D nodemon) (npm i express express-handlebars)
"scripts": {
    "start": "nodemon index.js"
  }
3. Add resources
4. Configure express
   * Body parser
   * Static path
5. Configure express-handlebars
6. Add router
7. Add home controller
8. Add layout
9. Add home view/template
10. Fix static assets and paths

## Database setup
1. Install mongoose (npm i mongoose)
2. Configure mongoose
3. Create User model

## Authentication
1. Add auth controller
   * Add controller to routes
2. Add login and register page
   * Modify href in navigation
   * Modify names in forms
3. Add post login and register actions
4. Create user with register
5. Hash password (npm i bcrypt jsonwebtoken)
6. Login action
7. Login service method to find user and validate password
8. Generate jwt token
   * Add secret to global constants (npm i cookie-parser)
9. Logout

## Notifications
1. Add notification element to layout

## Error handling
1. Add error mapper

## Others
1. Auth middleware
2. Use http only cookie
3. Navigation links
4. Route guards
5. Add 404 page
6. Global error handling
7. Multiline errors