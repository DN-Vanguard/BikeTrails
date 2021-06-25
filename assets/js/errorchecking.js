
var mmodal1 = document.getElementsByClassName("modal1")[0];
var modalEl = $('#mmd');
var span = document.getElementById("spann1");

// Error checking functions - checks to see if object is a number
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

// Function to check bike trail inputs mininum,maximum distance and search radius
function ErrorBikeinputschk(mindist,maxdist,radius){ 
    if(!isNumeric(radius)||radius==null || radius > 50 || radius <0.1 ){

        document.getElementsByClassName('modal1')[0].style.display ="block";
        return(false);
    }
    var badinputs = (!isNumeric(mindist) || !isNumeric(maxdist)||mindist > maxdist || mindist <0 )
    if(badinputs){
        mmodal1.style.display = "block";
		return false;
	}
    else{ 
        console.log("inputs all good")
        return true
    }
}

// Modal close for incorrect trail inputs  radius, mindist, maxdist
span.addEventListener('click',function(e){
    e.preventDefault();
    console.log("span on modal1")
    document.getElementsByClassName('modal1')[0].style.display = "none";
    window.location.reload();
})


// Resize window for mobile  - desktop view dynamically 
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

//   Toggles trail info description from truncate to full 
  var traillsdis = document.getElementById("trails-display")
  traillsdis.addEventListener("click",function(event){
    var element=event.target;
    if(element.classList[0]==="truncate"){
        element.setAttribute("class","normal");
        }
        else{
            element.setAttribute("class","truncate");
        }
        console.log("second", element.classList)
    })

// Start window in correct class
if(window.innerWidth > 600){
    $('main').addClass('row');
}
else{
    $('main').addClass('col');
}

console.log("start over start first")
