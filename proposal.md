# Vacation Planner

## <u>Project Description</u>
Vacation destination traveling app.

**AUDIENCE**:
Users who use SEA airport and are flying to Oregon, Washington, California or Hawaii.

**PROBLEM**:
Users are always trying to find their next vacation spot. However, they have to scour the web and/or open many websites and go through many web portals to find the information they are looking for.

**PRODUCT SOLUTION**:
Our product is an application where you can see everything in one central window. When booking, you'll be able to see the forcasted weather, book a hotel and flight, and depending on the city chosen, an iternary suggestion will appear.

**MVP FEATURES**:
* Weather of the city traveling to
* Hotels available:
    * Price range hotels
* Flight options:
    * Price range for flight
    * Times
* Tourist attractions
    * Iternary suggestions

**FUTURE DEVELOPMENT**:
* Seating arrangements on plane
    * Boarding Classes
* Number of rooms when booking hotel

## <u>User Story</u>
```
Who are we building this for?
AS A frequent flyer

What is the user trying to achieve?
I WANT the experience of booking a flight all in one window/area AND know a prediction of the weather that week

Why do they want to achieve this?
SO THAT I can save time, and recall what I need from one place
```

## <u>Acceptance Criteria</u>
```
GIVEN a dashboard with a cities list and calander
WHEN a user chooses their city and inputs their dates for their vacation
THEN they are presented with their departure and arrival flight date and price
GIVEN a dashboard with hotels given the vacation dates
WHEN a user selects the hotel brand they prefer
THEN they are presented with price and availability
GIVEN a dashboard with weather forecasts
WHEN the user clicks 'next'
THEN they will see a weather forecast of the vacation week based off of last years weather data
GIVEN the user is happy with the forecast
WHEN they click 'next'
THEN they will be prompted to enter their credit card info
GIVEN the form submission is complete
WHEN they are presented with their confirmation code
THEN an iternary suggestion appears of most popular tourist attractions within that city

```
## <u>Wireframe or sketch of design</u>
![MockUp_of_UserInterface](assets/images/Mockup.jpg)

## <u>API's to use</u>
* [Weather_API] https://www.meteomatics.com/en/api/getting-started/
* [Airfare_&_Hotel_API] https://developers.amadeus.com/self-service/apis-docs/guides/pagination-264
* [Destination_Content_API] https://developers.amadeus.com/self-service/category/destination-content/api-doc/points-of-interest
* [Airport_City_Search_API] https://developers.amadeus.com/self-service/category/air/api-doc/airport-and-city-search
* [Flight_Offers_Search_API] https://developers.amadeus.com/self-service/category/air/api-doc/flight-offers-search
* [Seatmap_Display_API] https://developers.amadeus.com/self-service/category/air/api-doc/seatmap-display
* [Hotel_Search_API] https://developers.amadeus.com/self-service/category/hotel/api-doc/hotel-search
* [Hotel_Booking_API] https://developers.amadeus.com/self-service/category/hotel/api-doc/hotel-booking

## <u>Rough Breakdown of tasks</u>
* Implement weather forecast from HW6
* Use Hotel API's and create a hotel booking interface
* Use airfare API's and create a flight booking interface
* Depending on the users flight destination, use certain destination content API's to make suggestions of top tourist attractions

