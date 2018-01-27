(function() {
    var menuBtn = document.querySelector('#headerMenu')
    var nav = document.querySelector('#headerNav')
    menuBtn.onclick = function(e) {
      e.stopPropagation()
      if (menuBtn.classList.contains('active')) {
        menuBtn.classList.remove('active')
        nav.classList.remove('nav-show')
      } else {
        nav.classList.add('nav-show')
        menuBtn.classList.add('active')
      }
    }
    document.querySelector('body').addEventListener('click', function() {
      nav.classList.remove('nav-show')
      menuBtn.classList.remove('active')
    })
  
    function throttle(fn, delay) {
      let timer = null
      return function () {
        let context = this, args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(context, args)
        }, delay)
      }
    }
    
    var backToTopBtn = document.querySelector('#back-to-top')
    backToTopBtn.addEventListener('click', () => {
      document.documentElement.scrollTop = 0 + 'px'
      document.body.scrollTop = 0 + 'px'
    })
  
    function showBtn() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 100){
        backToTopBtn.style.display = 'block'
      } else {
        backToTopBtn.style.display = 'none'
      }
    }
    document.addEventListener('scroll', 
      throttle(showBtn, 100)
    )
}());



