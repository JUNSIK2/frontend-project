
// 이메일 유효성 검사
const regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const email = document.querySelector('#email');
const dialog = document.querySelector('.subscribe_modal');

document.querySelector('.subscribe_btn').addEventListener('click', (event) => {
    if(regex.test(email.value) == false) {
        alert('이메일 형식이 올바르지 않습니다.');
        event.preventDefault(); // 새로고침 방지
    } else {
        dialog.showModal();
        event.preventDefault();
    }
});


// 모달 닫기
document.querySelector('.ok_btn').addEventListener('click', () => {
    dialog.close();
});


// 탑 스크롤
document.querySelector('.top-scroll-button').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// 최상단 스크롤 버튼 감추기
const scrollTopButton = document.querySelector('.top-scroll-button');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});


// 사이드바
const sideBar = document.querySelector('.side-bar');

document.querySelector('.side-button').addEventListener('click', () => {
    sideBar.style.display  = 'block';
});

document.querySelector('.close-side-bar').addEventListener('click', () => {
    sideBar.style.display  = 'none';
});


// 카카오맵 api
var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(33.442311, 126.571466), // 초기 위도, 경도 설정
    level: 3 // 지도 확대, 축소 레벨
};
var map = new kakao.maps.Map(container, options);


// 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수입니다
function setMapType(maptype) { 
    var roadmapControl = document.getElementById('btnRoadmap');
    var skyviewControl = document.getElementById('btnSkyview'); 
    if (maptype === 'roadmap') {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);    
        roadmapControl.className = 'selected_btn';
        skyviewControl.className = 'btn';
    } else {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);    
        skyviewControl.className = 'selected_btn';
        roadmapControl.className = 'btn';
    }
}


// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}


// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}


// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.442311, 126.571466); 


// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});


// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);