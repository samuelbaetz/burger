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
          console.log($('.burgerinput').val())
          location.reload()
      })
      
    })

    $('.chooseburger').attr('id', function(i) {
        return 'choose'+(i+1);
     });

$('button[id^="choose"]').on('click', function (){
  
    $.ajax("/api/update", {
        type: "PUT",
        data: {id: $(this).attr("data-id")}
      }).then(
        function(data) {
          console.log(data);
          
          
        }
      );
})

 
});