FOLDER STRUCTURE

assets/: Contains all static resourceS. Styles related to Tailwind CSS and any global CSS you write can go into the styles directory.
components/: Holds all your React components. Dividing them into ui for small, stateless components and layout for larger, layout-related components helps manage complexity.
features/: Each feature of your app, like order forms or product tables, gets its own directory. This is useful for larger projects, encapsulating feature-specific logic and components.
hooks/: Custom React hooks for shared logic across components.
pages/: Represents the different pages of your application. Each file here corresponds to a route in your app.
utils/: Dedicated to external interactions like API calls. Keeping your API logic here helps maintain separation of concerns.




TODO
Move basket to a seperate react context