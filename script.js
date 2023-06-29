let imgindex = 1
showImg(imgindex)

function plusImg(n) {
  showImg((imgindex += n))
}

function currentImg(n) {
  showImg((imgindex = n))
}

function showImg(n) {
  let i
  let imgs = document.getElementsByClassName('img')
  let dots = document.getElementsByClassName('dot')
  if (n > imgs.length) {
    imgindex = 1
  }
  if (n < 1) {
    imgindex = imgs.length
  }
  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  imgs[imgindex - 1].style.display = 'block'
  dots[imgindex - 1].className += ' active'
}
