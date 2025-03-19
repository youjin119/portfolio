// toggle-btn을 클릭했을 때 'mode-dark' 클래스를 추가하거나 제거하는 코드
const toggleBtn = document.querySelector('.toggle-btn');
const browserController = document.querySelector('#browserModeControll');
const circle = document.querySelector('#circleUp');
const focus = document.querySelector('.focus-circle');
const closeCircle = document.querySelector('.eye-close-animation-state');

toggleBtn.addEventListener('click', function() {
  // toggleBtn.classList.toggle('mode-dark');
  console.log("clicked");
  
  // 'eye-animation' 클래스를 추가 (애니메이션 실행)
  circle.classList.add('eye-animation-top');
  focus.classList.add('eye-animation-center');
  
  // 애니메이션이 끝난 후 'eye-animation' 클래스를 제거하여 반복 실행을 방지
  circle.addEventListener('animationend', function() {
    circle.classList.remove('eye-animation-top');
    focus.classList.remove('eye-animation-center');

    // closeCircle.style.display = 'block';

    browserController.classList.toggle('mode-dark');
   
  }, { once: true });
});

