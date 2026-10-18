document.addEventListener("DOMContentLoaded", function() {
    // 1. Xử lý tính năng ẩn/hiện mật khẩu cho tất cả các nút toggle trên trang
    const toggleButtons = document.querySelectorAll('.password-toggle');

    toggleButtons.forEach(function(toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            // Tìm ô input nằm ngay trước nút toggle trong cùng một thẻ label (.input-wrap)
            const inputField = toggleBtn.previousElementSibling;

            if (inputField && inputField.tagName === 'INPUT') {
                const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
                inputField.setAttribute('type', type);

                // Đổi icon con mắt tùy theo trạng thái mở/nhắm
                if (type === 'text') {
                    // Icon mắt mở (đang hiện mật khẩu)
                    toggleBtn.innerHTML = `
                        <svg viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>`;
                } else {
                    // Icon mắt có gạch chéo (đang ẩn mật khẩu)
                    toggleBtn.innerHTML = `
                        <svg viewBox="0 0 24 24">
                            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M3 21 21 3"></path>
                        </svg>`;
                }
            }
        });
    });

    // 2. Xử lý tính năng chuyển hướng khi bấm nút Đăng ký
    const registerForm = document.querySelector('.login-form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Chặn reload trang mặc định

            // (Sau này đoạn này sẽ gọi API Flask/Python của partner, hiện tại dùng thông báo giả lập)
            alert('Đăng ký tài khoản thành công! Chuyển hướng sang trang Đăng nhập nhé ✨');
            
            // Đá thẳng sang trang login.html
            window.location.href = 'login.html';
        });
    }
});