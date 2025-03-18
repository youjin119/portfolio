// toggle-btn을 클릭했을 때 'mode-dark' 클래스를 추가하거나 제거하는 코드
const toggleBtn = document.querySelector('.toggle-btn');
const browserController = document.querySelector('#browserModeControll');

toggleBtn.addEventListener('click', function() {
  // toggleBtn.classList.toggle('mode-dark');
  browserController.classList.toggle('mode-dark');
  console.log("clicked");
});

