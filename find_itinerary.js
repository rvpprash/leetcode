/* Find Itinerary from a given list of tickets */

var itineraryMap = {
	ticket1: {
		departure: 'Los Angeles',
		arrival: 'San Francisco'
	},

	ticket2: {
		departure: 'San Francisco',
		arrival: 'New York'
	},

	ticket3: {
		departure: 'Moscow',
		arrival: 'Mali'
	},

	ticket4: {
		departure: 'Barcelona',
		arrival: 'Moscow'
	},

	ticket5: {
		departure: 'New York',
		arrival: 'Barcelona'
	}
};

findArrivalDeparture = function(itineraryMap) {

	var hashMap = {};

	for (var tkt in itineraryMap) {
		var depart = itineraryMap[tkt].departure;
		var arriv = itineraryMap[tkt].arrival;

		if (!(depart in hashMap))
			hashMap[depart] = -1;
		else
			hashMap[depart] = hashMap[depart] - 1;

		if (!(arriv in hashMap))
			hashMap[arriv] = 1;
		else
			hashMap[arriv] = hashMap[arriv] + 1;

	}
	return hashMap;
}

console.log(findArrivalDeparture(itineraryMap));
