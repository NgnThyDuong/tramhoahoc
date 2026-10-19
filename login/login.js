document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.querySelector('input[name="password"]');
    const toggleBtn = document.querySelector('.password-toggle');

    if (toggleBtn && passwordInput) {
        toggleBtn.addEventListener('click', function() {
            // Kiểm tra loại hiện tại của ô input
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Đổi icon con mắt tùy theo trạng thái (mở/nhắm)
            if (type === 'text') {
                // Icon mắt mở (đang hiện mật khẩu)
                toggleBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>`;
            } else {
                // Icon mắt nhắm / có gạch chéo (đang ẩn mật khẩu)
                toggleBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M3 21 21 3"></path>
                    </svg>`;
            }
        });
    }
});