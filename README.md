# Car View - Dynamic car upload and view front-end application

## Purpose 

This is a practice project for creating dynamic content. Creation of dynamic content is managed by JavaScript. Data for dynamic content is taken from a form which is filled up by the user.
This project contains practices that must never be used in production environments as it would pose some serious security risks. All implemented features are purely educational and for practice purposes.

## Content

Form inputs ask for information about car:
- Brand
- Model
- Engine type
- Base price
- Mileage
- Image source

After submitting the form and passing validation requirements, a post for a car is generated with the appropriate data.
Client-side validation is mainly done through HTML attribute `required`. 

## To-do

There are some additional features that could be implemented as a challenge intended to evoke exploration of different HTML, CSS, JavaScript features  
- [ ] Save created car postings inside local storage
- [ ] Styling with SASS
- [ ] Car post removal/edit
- [ ] Image upload or image select from existing
- [ ] One server architecture simulation by segregation of possible brands, models, etc. and JavaScript, then putting data into JSON files that would be read by the application to generate selection options. 

## Possible additional system improvements

This is a front-end project, so no back-end was created for handling data, validation, user sessions. But these are some improvements that would expand the system functionality, sophistication.

- Back-end side input validation 
- Database for storing user created content
- Database CRUD