document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    const validCredentials = {
        'admin': 'password123',
        'user': '12345',
        'test': 'test123'
    };

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        
        if (!username || !password) {
            showMessage('請輸入使用者名稱和密碼', 'error');
            return;
        }
        
        if (validCredentials[username] && validCredentials[username] === password) {
            showMessage('登入成功！歡迎 ' + username, 'success');
            
            setTimeout(function() {
                alert('登入成功，即將跳轉...');
            }, 1000);
        } else {
            showMessage('使用者名稱或密碼錯誤', 'error');
        }
    });
    
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = 'message ' + type;
        messageDiv.style.display = 'block';
        
        setTimeout(function() {
            messageDiv.style.display = 'none';
        }, 5000);
    }
});