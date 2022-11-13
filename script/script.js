window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++)
    {
        var windowHeight = window.innerHeight;
        // console.log("windowHeight", windowHeight);
        var revealTop = reveals[i].getBoundingClientRect().top;
        // console.log("revealTop", revealTop);
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}