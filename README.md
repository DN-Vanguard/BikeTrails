# Bike Trails

## <u>Project Description</u>
Planning your next biking trail? Our app allows you to search any city, and it'll populate a list of nearby bike trails for you and/or your friends can go to. 
Our app also shows the current weather and the current weeks weather forecast so you and/or your friends to take into consideration.

**AUDIENCE**:
Bicyclist/s who are looking for nearby trails to bike.

**PROBLEM**:
Many cyclists want to try new routes or don't know which trails are available to them.

**PRODUCT SOLUTION**:
A biking trail app where it populates a variety of possible trails for you and/or your friends can take and shows the weather for the current week.

**MVP FEATURES**:
* Input:
    - City
    - Radius
    - Minimum Trails
    - Maximum Trails
* Clear Button
* Search history
* Weather display of the current week
* List of bike trails dependent on the city entered

**FUTURE DEVELOPMENT**:
* User accounts
* Social media

## Website Link
https://dn-vanguard.github.io/BikeTrails/

## <u>User Story</u>
```
Who are we building this for?
AS A bicyclist

What is the user trying to achieve?
I WANT to plan or go to bike trails in my city

Why do they want to achieve this?
SO THAT I can be fit, enjoy the outdoors, and use my bike outside of commuting
```

## <u>Acceptance Criteria</u>
```
GIVEN a bike dashboard with form inputs
WHEN I enter an input for for a city, search radius, minimum distance, and maximum distance
THEN I am presented with a curated list of bike trails for that city and the current weather and week's forecast
WHEN I have an input that is invalid
THEN I am presented with an error message
WHEN I view the weather conditions for the city
THEN I am presented with todays weather and a 6-day forecast that displays the day of the week, date, icon representation of weather conditions, and temperature
WHEN I view the curated trail list
THEN I am presented with the trail name, description, trail length, city and a "more info" link
WHEN I click on the "more info" link
THEN I am redirected to a new tab that shows more information
```
## <u>Wireframe or sketch of design</u>
![Landing_Page](assets/images/landingPage.png)
![User_Inputs](assets/images/userInput.png)
![Mobile_view](assets/images/mobile-View.png)

## <u>API's to use</u>
[TRAIL_API] https://rapidapi.com/trailapi/api/trailapi/

Within this API, there are 4 API's we're using:
* Map GPX
* Trail Map List
* Bike Trail Info
* Find Bike Trails

[WEATHER_FORECAST_API] https://api.openweathermap.org/data/2.5/
