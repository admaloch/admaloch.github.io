
//nav button//
(function(){
    var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
    var open = false;
    button.addEventListener('click', handler, false);

    function handler(){
      if(!open){
        this.innerHTML = "Close";
        classie.add(wrapper, 'opened-nav');
      }
      else{
        this.innerHTML = "Menu";
        classie.remove(wrapper, 'opened-nav');
      }
      open = !open;
    }
    function closeWrapper(){
        classie.remove(wrapper, 'opened-nav');
    }
})();




 //home page button. slide from nav to main content
$(".scroll").click(function() {
    $('html,body').animate({
        scrollTop: $(".back-color").offset().top},
        'slow');
});
















