# Kehinde helicarrier test Web Application

---

This is a simple web application that displays list of jobs , these jobs are gotten from a public graphQL api , https://api.graphql.jobs/ , this web applications was built using vite,react,typescript,tailwindCSS , cypress and apollo client
i decided to go with the above tools because of the following reasons

vite : makes it faster to setup a react application and makes the development environment fast to work with
tailwinCSS : makes it faster to write CSS
cypress : used for end to end testing
apollo client : used to interact with the graphQL API

i decided to follow this structure for the application because i feel its more convenient and other engineers who may want to work on this project will easily know where to find files

i used debouncing for the search function because i think it wouldnt make sense to search for keyword every second user enter an input
