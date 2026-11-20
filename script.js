
/* =====================================
   L-KIERS GROUP
   LOGIN & LOADING SYSTEM
===================================== */

const loginPage = document.getElementById("loginPage");
const loadingPage = document.getElementById("loadingPage");
const mainPage = document.getElementById("mainPage");
const loginButton = document.getElementById("loginButton");
const departmentName = document.getElementById("departmentName");

const departments = [
  "Executive Command (EC)",
  "Strategic Investment (SI)",
  "Budget Analysis (BA)",
  "Personal Coordination (PC)",
  "Media Intelligence (MI)",
  "Corporate Promotion (CP)",
  "Strategic Planning (SP)",
  "Business Development (BD)",
  "Operations Management (OM)",
  "Technology Development (TD)",
  "Security Management (SM)",
  "External Affairs (EA)",
  "Client Relations (CR)"
];

loginButton.addEventListener("click", () => {

  // 로그인 버튼 중복 클릭 방지
  loginButton.disabled = true;

  // 무작위 부서 선택
  const randomIndex = Math.floor(
    Math.random() * departments.length
  );

  departmentName.textContent = departments[randomIndex];

  // 로그인 페이지 종료
  loginPage.classList.add("hidden");

  // 로딩 페이지 표시
  loadingPage.classList.remove("hidden");

  // 2초 후 메인 페이지 이동
  setTimeout(() => {

    loadingPage.classList.add("hidden");
    mainPage.classList.remove("hidden");

    // 페이지 최상단으로 이동
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

  }, 2000);

});
