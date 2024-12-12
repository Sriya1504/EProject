const validCredentials = {
    saketh: { username: 'saketh', password: 'saketh123', redirectUrl: 'saketh.html' },
    khaleel: { username: 'khaleel', password: 'khaleel123', redirectUrl: 'khaleel.html' },
    chanikya: { username: 'chanikya', password: 'chanikya123', redirectUrl: 'chanikya.html' },
    sriya: { username: 'sriya', password: 'sriya123', redirectUrl: 'sriya.html' }
};

let currentProfile = '';

function openLogin(profile) {
    currentProfile = profile;
    document.getElementById('loginTitle').innerText = `Login as ${profile.charAt(0).toUpperCase() + profile.slice(1)}`;
    document.getElementById('loginModal').style.display = 'block';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (validCredentials[currentProfile] &&
        validCredentials[currentProfile].username === username &&
        validCredentials[currentProfile].password === password) {
        window.location.href = validCredentials[currentProfile].redirectUrl;
    } else {
        alert('Invalid username or password');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const profiles = document.querySelectorAll('.profile');
    profiles.forEach(profile => {
        profile.addEventListener('click', (e) => {
            const profileId = e.currentTarget.querySelector('p').textContent.toLowerCase();
            openLogin(profileId);
        });
    });
});
