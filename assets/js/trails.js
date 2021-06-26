
var mindistEl = $('#mindistInput');
var maxdistEl = $('#maxdistInput');
var radiusEl = $('#radiusInput');

// Find trails of desired ride length and sort in descending order
function filterAndSortData(data) {
    var mindist=mindistEl.val()
    var maxdist=maxdistEl.val()
    console.log(maxdist,mindist)
    var info = [];
    for (var x = 0; x < data.length; x++) {
        if(parseFloat(data[x].length) < maxdist && parseFloat(data[x].length)>mindist){
        info[x] = [parseFloat(data[x].length), data[x].name, data[x].url, data[x].description, data[x].city] 
        } 
      }
   if(info.length>0)
    {
        // Sort trail list in descending order
        info.sort(function (a, b) {
            return b[0] - a[0];
        });
        return info;
    }
    // If no trail found meeting desired ride length
    else{
        console.log("no trail found")
        presentmodal2();
        var span1 = document.getElementById("spann2");
        span1.addEventListener('click',function(e){
            e.preventDefault();
            document.getElementsByClassName('modal2')[0].style.display = "none";
            window.location.reload();
        })
       return false;
    }
}
// No Trails found of desired length
function presentmodal2(){
    console.log("appending")
    $("header").append(`
    <div class="modal left">
    <div id="mmd2" class="modal2">
        <div class="modal-header" >
            <h3 style="color:white">No Trail Found meeting your ride length needs</h3>
            <span id="spann2" class="close">&times;</span>
        </div>
        <div class="modal-content">
        <p style="color:black">No Trails in this city found meeting your Min and Max Lengths.</p>
        </div>
    </div>
    </div>
    `)
    }

function trailsDisplayed(data) { 
    trailsDisplay.empty();
	for (let t= 0; t < data.length; t++) {
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
  return
}

// API SEARCH TRAILS USING WEATHER CITY COORDINATES
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
        var info = filterAndSortData(trailsData);
        if(info){
            trailsDisplayed(info);
        }
        return (info);
    })
    .catch(function (error) {
        return error;
    });
}