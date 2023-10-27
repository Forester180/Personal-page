$(".wrapper_burger").click(function (event) {
    $(".nav_links").toggleClass('active');
  });

const active = document.querySelectorAll('.nav_item')

active.forEach(function(element){
    element.addEventListener('click', foo)
})

function foo(evt) {
    const target = evt.currentTarget;

    active.forEach(function(item) {
        item.classList.remove('nav_item--active')
    })

    target.classList.add('nav_item--active')
}