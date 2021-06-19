// enable tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// mobile btn toggle
const bottomBtn = document.getElementById("bottomBtn");
const pageFooter = document.querySelector('#pageFooter');
const productTab = document.querySelector('#productTab');

let productTabHeight = productTab.offsetTop + productTab.offsetHeight;
// mobile 置底按鈕出現時機
const bottomBtnScroll = () => {
  // 不同裝置取得方式
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop < productTabHeight || scrollTop > pageFooter.offsetTop - window.screen.height) {
    bottomBtn.classList.add('d-none');
  } else {
    bottomBtn.classList.remove('d-none');
  }
}

const goToScroll = scrollNumber => {
  window.scrollTo({
    top: scrollNumber,
    behavior: 'smooth'
  })
}