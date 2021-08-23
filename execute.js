(function modifyDOM() {
    var scrolldn = false;
    var time;
        scrolldn = !scrolldn;
        if (scrolldn) {
            time = setInterval(function() {              
        window.scrollBy(0, 50);
              }, 10);
        } 
        var sta = window.prompt(" Enter start page number");
var dne = window.prompt("Enter end page number");
console.log(dne);
 for(let i=sta;i<dne +1;i++){
    var lk = (window.location.search);   
    var newlk = lk.replace("sid", "page=1&sid");
   var woh;
   woh = newlk.replace("page=1&sid", "page=" + i + "&sid");
  window.open(woh);
    var people = document.getElementsByClassName("t-roman t-sans");
    for(let k=0; k<10; k++){
console.log(people[k].innerText);
}
}    
})();
