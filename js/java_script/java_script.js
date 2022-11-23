     $(document).ready(function(){
        $("#p_1").bind("click", function(){
            console.log("hello");
            $( "<p > hello</p>").appendTo( "body" )
        });
        
        $("#p_1").bind("dblclick", function(){
            $( "<p> dbl hello</p>"  ).appendTo( "body" )
        });
     });
