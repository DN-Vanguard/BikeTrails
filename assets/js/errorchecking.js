
var mmodal1 = document.getElementsByClassName("modal1")[0];
var mmodal2 = document.getElementsByClassName("modal2")[0];
var mmain = document.getElementById("mmain");
var modalEl = $('#mmd');

var span = document.getElementById("spann1");
var span1 = document.getElementById("spann2");

console.log(span,span1)
// Error checking functions
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

function ErrorBikeinputschk(mindist,maxdist,radius){ 
    console.log("Error Checking inprogress")
    if(!isNumeric(radius)||radius==null || radius > 50 ){
        console.log("issue with radius")
        // console.log("Error Checking inprogress radius",modal1.getattribute("style"))
        document.getElementsByClassName('modal1')[0].style.display ="block";
        return(false);
    }
    var badinputs = (!isNumeric(mindist) || !isNumeric(maxdist)||mindist > maxdist || mindist <0 )
    if(badinputs){
		// console.log("modal called")
        mmodal1.style.display = "block";
		return false;
	}
    else{ return true}
}

span.addEventListener('click',function(e){
    console.log("span on modal1")
    document.getElementsByClassName('modal1')[0].style.display = "none";
    window.location.reload();
})

span1.addEventListener('click',function(e){
    // mmodal2.style.display = "none";
    document.getElementsByClassName('modal2')[0].style.display = "none";
    window.location.reload();
})


// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == mmain) {
//         window.location.reload();
//         modal.style.display = "none";
//         modal1.style.display = "none";
//     }
// }