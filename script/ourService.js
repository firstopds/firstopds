window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll('.revealService');

    for(let i = 0; i < reveals.length; i++)
    {
        var windowHeight = window.innerHeight;
        // console.log("windowHeight SER", windowHeight);
        var revealTop = reveals[i].getBoundingClientRect().top;
        // console.log("revealTop SER", revealTop);
        var revealPoint = 80;
        // console.log("reveal point should be less than", windowHeight - revealPoint);
        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('activeService');
        }
        else{
            reveals[i].classList.remove('activeService');
        }
    }
}