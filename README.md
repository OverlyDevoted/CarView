# Car View - Dynamic car upload and view front-end application

## Purpose 

This is a practice project for creating dynamic content. Creation of dynamic content is managed by JavaScript. Data for dynamic content is taken from a form which is filled up by the user.

Client-side validation is mainly done through HTML tags `required`. 

## Content

Form includes inputs for car:
- Brand,
- Model,
- Engine type,
- Base price,
- Mileage,
- Image source.

Upon submitting form and passing validation requirements, a post for a car is generated with the appropriate data.

## To-do

- [ ] Local storage to save created car postings
- [ ] Styling
- [ ] Car post removal/edit
- [ ] Image upload or image select from existing
- [ ] One server architecture simulation by segregation of possible brands, models, etc. and JavaScript, then putting data into JSON files that would be read by the application to generate selection options. 

## Possible additional system improvements

This is a front-end project, so no back-end was created for handling data, validation, user sessions. But these are some improvements that would expand the system functionality, sophistication.

- Back-end side input validation 
- Database for storing user created content
- Database CRUD