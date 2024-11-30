document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Logika sederhana untuk memvalidasi username dan password
    if (username === 'admin' && password === 'password') {
        messageDiv.textContent = 'Login berhasil!';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Username atau password salah!';
        messageDiv.style.color = 'red';
    }
});