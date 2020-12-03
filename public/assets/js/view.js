$( document ).ready(function() {
    $.get("/api/notdevoured", function(data){
        console.log(data)
    })


    $('.button1').on('click', function () {
       
        $('.eatburger').modal('show')
       
    })

    $('.button2').on('click', function () {
       
        $('.createburger').modal('show')
       
    })

    $('.nameit').on('click', function () {
       
      $.post("/api/new", {
          burger_name: $('.burgerinput').val(),
          devoured: false
      }, function(data){
          console.log(data)
          location.reload()
      } )
      
    })


 
});