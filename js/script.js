// 모달창
const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const email = document.querySelector('#email');
const dialog = document.querySelector('.subscribe_modal');

// 이메일 유효성 검사
document.querySelector('.subscribe_btn').addEventListener('click', () => {
    if(exptext.test(email.value) == false) {
        alert('이메일 주소가 유효하지 않습니다.');
    } else {
        dialog.showModal();
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