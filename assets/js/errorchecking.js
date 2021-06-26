// Error checking functions - checks to see if object is a number
// global variables
var mmodal1 = document.getElementsByClassName("modal1")[0];
var mmodal2 = document.getElementsByClassName("modal2")[0];
var mmain = document.getElementById("mmain");
var modalEl = $('#mmd');

var span = document.getElementById("spann1");
var span1 = document.getElementById("spann2");

// Error checking functions
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

// Function to check bike trail inputs mininum,maximum distance and search radius
// If user does not enter input for any of the 3 inputs, modal will appear
function ErrorBikeinputschk(mindist,maxdist,radius){ 
    if(!isNumeric(radius)||radius==null || radius > 50 || radius <0.1 ){
        presentmodal1();
        return(false);
    }
    var badinputs = (!isNumeric(mindist) || !isNumeric(maxdist)||mindist > maxdist || mindist <0 )
    if(badinputs){
        presentmodal1();
		return false;
	}
    else{ 
        return true
    }
}

function presentmodal1(){
   
    $("header").append(`
    <div id="mmd" class="modal left">
        <div  id = "mmd1" class="modal1">
            <div class="modal-header " >
                <h3 style="color:white">Error in Bike Trail Information Entry</h3>
                <span id = "spann1" class="close">&times;</span>
            </div>
                <div class="modal-content">
                <p style="color:black">1) Check Search Radius is a number and 0 &lt; Radius &lt; 50 miles </p>   
                <p style="color:black">2) Check Min Trail length and Max Trail length are numbers </p>
                <p style="color:black">3) Check that: 0 &lt; Min Trail length &lt; Max Trail length</p>
                </div>
        </div> 
    </div>
    `)
    var span = document.getElementById("spann1");
    span.addEventListener('click',function(e){
        e.preventDefault();
        // document.getElementsByClassName('modal1')[0].style.display = "none";
        window.location.reload();
    })
}
// Modal close for incorrect trail inputs  radius, mindist, maxdist



// Resize window for mobile  - desktop view dynamically 
// To exit out of modal
span.addEventListener('click',function(e){
    console.log("span on modal1")
    document.getElementsByClassName('modal1')[0].style.display = "none";
    window.location.reload();
})
span1.addEventListener('click',function(e){
    document.getElementsByClassName('modal2')[0].style.display = "none";
    window.location.reload();
})

// STYLING FOR MOBILE VIEW
$(window).on('resize', function() {
    var win = $(this);
    if (win.width() > 600) {
      $('main').removeClass('col');
      $('main').addClass('row');
  
    } else {
      $('main').removeClass('row');
      $('main').addClass('col');
    }
  });
// Toggles trail info description from truncate to full 
  var traillsdis = document.getElementById("trails-display")
  traillsdis.addEventListener("click",function(event){
    var element=event.target;
    if(element.classList[0]==="truncate"){
        element.setAttribute("class","normal");
        }
        else{
            element.setAttribute("class","truncate");
        }
    })

// Start window in correct class
if(window.innerWidth > 600){
    $('main').addClass('row');
}
else{
    $('main').addClass('col');
}

