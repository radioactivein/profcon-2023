

// mobile menu
$(document).ready(function(){
  $(".toggle-icon").click(function(){
    $(this).toggleClass("is-active");
    $(".nav-menu").toggleClass("nav-active");
  });

  $(".nav-menu a li").click(function(){
    $(".toggle-icon").removeClass("is-active");
    $(".nav-menu").removeClass("nav-active");
  });
});

        // slick carousal
        $(document).ready(function(){
          $('.carousal-points').slick({
                infinite:true,
                autoplay:true,
                speed:800,
                slidesToShow: 2,
                arrows:false,
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1
                          }
                    }
                  ]
            });
        })

        

// $(document).ready(function() {

//   var counters = $(".percent");
//   var countersQuantity = counters.length;
//   var counter = [];
  
//   for (i = 0; i < countersQuantity; i++) {
//     counter[i] = parseInt(counters[i].innerHTML);
//   }
  
//   var count = function(start, value, id) {
//     var localStart = start;
//     setInterval(function() {
//       if (localStart < value) {
//         localStart++;
//         counters[id].innerHTML = localStart;
//       }
//     }, 150);
//   }
  
//   for (j = 0; j < countersQuantity; j++) {
//     count(0, counter[j], j);
//   }
//   });
        

////intersection observer
$(document).ready(function() {
  var counters = $(".percent");
  var countersQuantity = counters.length;
  
  var observerOptions = {
    threshold: 0.3 // Triggers when the element is fully in view
  };
  
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var target = entry.target;
        var value = parseInt(target.innerHTML);
        count(0, value, target);
        observer.unobserve(target); // Unobserve the target once animation is triggered
      }
    });
  }, observerOptions);
  
  for (var i = 0; i < countersQuantity; i++) {
    observer.observe(counters[i]);
  }
  
  function count(start, value, target) {
    var localStart = start;
    var interval = setInterval(function() {
      if (localStart < value) {
        localStart++;
        target.innerHTML = localStart;
      } else {
        clearInterval(interval);
      }
    }, 150);
  }
});




