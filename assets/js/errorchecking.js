
var mmodal1 = document.getElementsByClassName("modal1")[0];
var mmodal2 = document.getElementsByClassName("modal2")[0];
// var mmain = document.getElementById("mmain");
var modalEl = $('#mmd');

var span = document.getElementById("spann1");
var span1 = document.getElementById("spann2");

// Error checking functions
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

// Function to check bike trail inputs
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
    console.log("span on modal1")
    document.getElementsByClassName('modal1')[0].style.display = "none";
    window.location.reload();
})

// Modal close for No trail found meeting distance requirements
span1.addEventListener('click',function(e){
    document.getElementsByClassName('modal2')[0].style.display = "none";
    window.location.reload();
})

// Resize window for mobile view
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
      
function startscreen(){
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
}
// Start window in correct class
if(window.innerWidth > 600){
    $('main').addClass('row');
}
else{
    $('main').addClass('col');
}

