## Homework 4

### Exercise 1: Simple Counter with Dynamic Background

**Objective:**
Create a counter component that changes its background color dynamically based on the counter's value.

Instructions:

1. Create a Functional Component named DynamicCounter:
   - Use the useState hook to manage the counter value (initialize it to 0).
2. Add Buttons to Increment and Decrement:
   - Include two buttons: "Increment" and "Decrement".
   - Clicking the "Increment" button should increase the counter by 1.
   - Clicking the "Decrement" button should decrease the counter by 1.
3. Change Background Color Based on Counter Value:
   - Use the useEffect hook to dynamically update the background color of the component based on the counter value:
     - Green if the counter is a positive number.
     - Red if the counter is a negative number.
     - White if the counter is 0.
4. Display the Counter Value:
   - Show the current counter value in the center of the component.

**Example Output:**

When a user clicks the "Increment" or "Decrement" button, the counter value updates, and the background color changes accordingly.

**Bonus Challenge:**

Add a button to reset the counter to 0.
Implement a feature to prevent the counter from going below a certain negative threshold (e.g., -10).

### Exercise 2: Random User Fetcher

**Objective:**
Create a React component that fetches and displays information about a random user using the JSONPlaceholder API.

Instructions:

1. Create a new component named RandomUserFetcher.
2. Inside the component, set up a button labeled "Get Random User".
3. When the button is clicked:
   - Generate a random number between 1 and 10. This number will represent the user ID.
   - Use this random number to fetch data from the API: https://jsonplaceholder.typicode.com/users/{id}.
4. Display the following user information on the screen:

- Name: The user's name.
- City: The city from the user's address.
- Phone Number: The user's phone number.
- Company Name: The name of the user's company.

Add some styling to the component to make the user information stand out.

## There are 2 exercises in this project. Please remove the necessary comments in the App.jsx to test the exercises.