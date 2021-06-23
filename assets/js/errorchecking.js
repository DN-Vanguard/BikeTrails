
var modal1 = document.getElementById("modal1");
var modal = document.getElementById("modal");
var mmain = document.getElementById("mmain");
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
// var span = document.getElementById("spann");

var span1 = document.getElementById("spann1");
// Error checking functions
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

function ErrorBikeinputschk(mindist,maxdist){ 
    console.log("Error Checking inprogress")
    // mindist=parseFloat(mindistEl.val())
    // maxdist=parseFloat(maxdistEl.val())
    if()
    var badinputs = (!isNumeric(mindist) || !isNumeric(maxdist)||mindist > maxdist || mindist <0 )
    if(badinputs){
		console.log("modal called")
        modal.style.display = "block";
		return false;
	}
    else{ return true}
}

span.onclick = function () {
    window.location.reload();
    modal.style.display = "none";
    
};

// span1.onclick = function () {
//     window.location.reload();
//     modal1.style.display = "none";
    
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == mmain) {
        window.location.reload();
        modal.style.display = "none";
        modal1.style.display = "none";
    }
}