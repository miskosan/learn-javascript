// Set up the object
var hotel = {
  name: "Park",
  rooms: 120,
  booked: 77
};

// Update the HTML
hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

var elName = document.getElementById("hotelName"); // Get element
elName.textContent = hotel.name; // Update HTML with property of the object

var elPool = document.getElementById("pool"); // Get element
elPool.className = "Pool: " + hotel.pool; // Update HTML with property of the object

var elGym = document.getElementById("gym"); // Get element
elGym.className = "Gym: " + hotel.gym; // Update HTML with property of the object
