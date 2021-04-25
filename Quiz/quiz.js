function start_quiz(){
    var score = 0;
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementById("q3").value;
    var q4 = document.getElementById("q4").value;
    var q5 = document.getElementById("q5").value;

    var a1 = document.getElementById("a1").value;
    var a2 = document.getElementById("a2").value;
    var a3 = document.getElementById("a3").value;
    var a4 = document.getElementById("a4").value;
    var a5 = document.getElementById("a5").value;


    var questions = [
        {
            prompt: q1,
            answer: a1
        },
        {
            prompt: q2,
            answer: a2
        },
        {
            prompt: q3,
            answer: a3
        },
        {
            prompt: q4,
            answer: a4
        },
        {
            prompt: q5,
            answer: a5
        },
    ]


    for(var i = 0; i< 5; i++){
        var response = window.prompt(questions[i].prompt);

        if(response == questions[i].answer){
            score++;
            alert("You got it correct");
        }else{
            alert("You got it wrong");
        }
        
    }

    alert("You got " + score + "/ 5" ); 

    var percentage = score/5 * 100;

    if(percentage >=50 && percentage<=75){
        alert("Nice try, but you can do a bit better.")
    }else if(percentage>=75){
        alert("You did amazing. Well done.")
    }else{
        alert("Nice try. You can do much better.")
    }
}