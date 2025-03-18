const parentElement = document.querySelector('.mouse-effect-parent');
const childElement = document.querySelector('.mouse-effect-child');

let mouseX = 0;
let mouseY = 0;
let parentX = 0;
let parentY = 0;
let targetParentX = 0;
let targetParentY = 0;
let targetChildX = 0;
let targetChildY = 0;

// 마우스 위치 추적
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  targetParentX = mouseX;
  targetParentY = mouseY + window.scrollY;
});
// 스크롤 이벤트에서 마우스 위치 추적
window.addEventListener('scroll', () => {
  targetParentY = mouseY + window.scrollY; // 스크롤 시에도 마우스 위치를 다시 추적
});

// 부모 요소는 마우스를 바로 따라가기
function moveParent() {
  const dx = targetParentX - parentX;
  const dy = targetParentY - parentY;

  parentX += dx * 0.1; // 부모는 마우스를 부드럽게 따라감
  parentY += dy * 0.1;

  parentElement.style.left = parentX - parentElement.offsetWidth / 2 + 'px';
  parentElement.style.top = parentY - parentElement.offsetHeight / 2 + 'px';
}

// 자식 요소는 부모를 천천히 따라가기
function moveChild() {
  const dx = targetChildX - childElement.offsetLeft;
  const dy = targetChildY - childElement.offsetTop;

  targetChildX = parentX;
  targetChildY = parentY;

  const speed = 0.05; // 자식은 부모보다 더 천천히 따라감
  childElement.style.left = childElement.offsetLeft + dx * speed + 'px';
  childElement.style.top = childElement.offsetTop + dy * speed + 'px';

  // 부모와 자식 사이의 거리 차이 계산
  const distance = Math.sqrt(dx * dx + dy * dy);

  // 자식 요소가 부모 요소와의 거리 차이가 10px 이하일 때 부드럽게 사라짐
  if (distance <= 50) {
    childElement.style.opacity = 0; // 사라짐
  } else {
    childElement.style.opacity = 1; // 나타남
  }
}

// 애니메이션 루프
function animate() {
  moveParent();
  moveChild();
  requestAnimationFrame(animate); // 애니메이션 계속 실행
}

// 애니메이션 시작
animate();

