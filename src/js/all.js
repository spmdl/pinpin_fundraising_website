// enable tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// event height to top
var form = document.getElementById("form");
var tabContent = document.getElementsByClassName("tab-content")[0];
function heightToTop(element) {
  let bridge = element;
  let root = document.body;
  let height = 0;
  do {
    height += bridge.offsetTop;
    bridge = bridge.offsetParent;
  } while (bridge !== root);
  return height;
}

// click nav tab go there 
function goToTab() {
  window.scrollTo({
    top: heightToTop(tabContent) - 100,
    behavior: "smooth",
  });
}
// click go to form
function goToForm() { 
  // 170 預留空白高度
  window.scrollTo({
    top: heightToTop(form) - 170,
    behavior: "smooth",
  });
}

// mobile btn toggle 下選單邏輯：先隱藏 -> nat tab sticky 後再顯示
// 位置高度：navIsSticky 代表 tab 已經 sticky top，scrollIsBottom 代表滾到最底部（190 高度 = 專案按鈕 + footer）
var bottomBtn = document.getElementById("bottomBtn");
window.onscroll = function () {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const navIsSticky = window.pageYOffset > 1000
  const scrollIsBottom = scrollTop + document.documentElement.clientHeight < document.body.scrollHeight - 190
  if (bottomBtn !== null && document.body.offsetWidth < 992) {
    if(navIsSticky && scrollIsBottom) {
      bottomBtn.classList.remove('d-none');
    }else{
      bottomBtn.classList.add('d-none');
    }
  }
};