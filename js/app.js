let btn = document.querySelectorAll('.tab a')
var timeSlide

function changeSlide() {
  let pagination = document.querySelectorAll('.pagination span')
  let imgSlide = document.querySelectorAll('.slide img')

  timeSlide = setTimeout(function() {
    for (let i = 0; i < pagination.length; i++) {
      if(pagination[i].classList.contains('active')) {
        pagination[i].classList.remove('active')
        imgSlide[i].classList.remove('active')
      } else {
        pagination[i].classList.add('active')
        imgSlide[i].classList.add('active')
      }
    }
    changeSlide();
  }, 5000);
}

changeSlide();

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function (e) {
    e.preventDefault()
    let btnData = this.getAttribute('data-active')
    let content = document.querySelectorAll(`[data-active]`)

    console.log('stopped')
    clearTimeout( timeSlide )
    changeSlide();
    for (let i = 0; i < content.length; i++) {
      if (content[i].getAttribute('data-active') == btnData) {
        content[i].classList.add('active')
      } else {
        content[i].classList.remove('active')
      }
    }

    
  })
}