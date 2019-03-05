/*
1.  
Write a JQuery click handler so that when you click the Answer 1 button, 
the answer to the joke is revealed and the background color changes to pink.
*/
$("#joke1").click(
    function(){
        $("#joke1answer").text("Mars Bar");  
        $("body").css("background-color","pink"); 
    }
);


/*2.  
Write a jquery click handler so that when you click the Answer 2 button, 
the answer to the joke is revealed and the background color changes to aqua.
*/

$("#joke2").click(
    function(){
        $("#joke2answer").text("nice belt");  
        $("body").css("background-color","aqua"); 
    }
);

/*
3.  Write a jquery click handler so that when you click the Answer 3 button,
the answer to the joke is revealed and the answer text is red in color.
*/
$("#joke3").click(
    function(){
        $("#joke3answer").text("a bagel");  
        $("body").css("background-color","red"); 
    }
);


/*4.  Write a jquery click handler so that when you click the Answer 4 button, the answer to the joke is revealed and an image of a cat appears.  You will need to use the .attr action.  Write your code below:
*/

$("#joke4").click(
    function(){
        $("#joke4answer").text("feed meow"); 
        $("#cat-image").attr("src","https://vignette.wikia.nocookie.net/the-warrior-cat-clans/images/9/92/300px-Cat_pictures_by_feral-cat-news_blogspot_com-cat-5.jpg/revision/latest?cb=20141116202441"); 
    }
);


/*5.  Write a jquery click handler so that when you click the Answer 5 button, the answer to the joke is revealed and a picture of a math book appears.  Write our code below:
*/

$("#joke5").click(
    function(){
        $("#joke5answer").text("its has so many problems"); 
        $("#math-image").attr("src","https://oaxacaborn.files.wordpress.com/2017/02/web-8-singapore_math_why_it_works.jpg?w=1086"); 
    }
);



/*6.  Write your own joke in HTML (with a question, button, and place for answer).  Then, create the jQuery click handler to reveal the answer when the button is clicked.  Have the button perform a .css or .attr action as well.
*/
$("#joke6").click(
    function(){
        $("#joke6answer").text("snow balls"); 
        $("#man-image").attr("src","http://l.rgbimg.com/cache1GAUVX/users/k/ki/kimolos/600/rd04h5K.jpg"); 
    }
);




