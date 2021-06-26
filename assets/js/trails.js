// global variables
var data1;
var data2;
var mindistEl = $('#mindistInput');
var maxdistEl = $('#maxdistInput');
var radiusEl = $('#radiusInput');

// This will fiter the data gathered based off the user input
function filterAndSortData(data) {
    var info = [];

    for (var x = 0; x < data.length; x++) {
		info[x] = [parseFloat(data[x].length), data[x].name, data[x].url, data[x].description, data[x].city]
	}
	// console.log(info)
	// Sort trail list in descending order
	info.sort(function (a, b) {
		return b[0] - a[0];
	});

    return info;
}
// display trails to html
function trailsDisplayed(data, mindist, maxdist) {
    
	console.log("info",data)
	console.log("first",data[0][0], mindist, maxdist, "last",data[data.length-1][0])

	// Flag error through modal if trail distance requirements aren't met
	var end= data.length-1;
	console.log(maxdist,data[end][0] )
	if(mindist > data[0][0] || maxdist < data[end][0]){
		document.getElementsByClassName('modal2')[0].style.display = "block";
		return;
	}
	
    trailsDisplay.empty();
	for (let t= 0; t < data.length; t++) {
		console.log(data[t][0]< maxdist)
		if(parseFloat(data[t][0]) > mindist && parseFloat(data[t][0]) < maxdist){
			trailsDisplay.append(`
                <div class="card">
                    <div class="card-content" >
                        <p class=".trail-name card-title">${data[t][1]}</p>
                        <p class="truncate" data-state="trunc">${data[t][3]}
                        <br>
                        <br>Trail length: ${data[t][0]} miles</p>
                        <br>Local City: ${data[t][4]}</p>
                        <br><a href="${data[t][2]}" target="_blank">More info</a>
                    </div>
                </div>
            `);
		}	
	}
	return

}

// SEARCH TRAILS USING WEATHER CITY COORDINATES
function searchTrailsByCoordinates (lon, lat, radius) {
    var trailQueryURL = `${trailURL}explore/?${lon}&${lat}&${radius}`;
    fetch(trailQueryURL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "141b99fa69msha39bd18b0462d26p198d40jsn9dad0efbd107",
            "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com"
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (local) {
        var trailsData = local.data;
        trailsDisplayed(filterAndSortData(trailsData), mindistEl.val(), maxdistEl.val());
        return (trailsData);
    })
    .catch(function (error) {
        return error;
    });
}