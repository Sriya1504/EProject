// script1.js

// Object containing valid credentials
const validCredentials = {
    saketh: 'saketh123',
    khaleel: 'khaleel123',
    chanikya: 'chanikya123',
    sriya: 'sriya123'
};

// Object storing user-specific content for each section
const userContent = {
    saketh: {
        profile: `Passionate software developer with a knack for problem-solving and a love for learning new technologies.`,
        education: `Bachelor of Science in Computer Science`,
        languages: `English (Fluent), Spanish (Intermediate)`,
        skills: `JavaScript, HTML, CSS`,
        certificates: `Certified JavaScript Developer`,
        projects: `Portfolio Website, E-commerce Platform`
    },
    khaleel: {
        profile: `Experienced data analyst with a strong background in mathematics and statistics.`,
        education: `Master of Science in Data Analytics`,
        languages: `English (Fluent), French (Intermediate)`,
        skills: `Python, R, SQL`,
        certificates: `Certified Data Analyst`,
        projects: `Customer Segmentation, Sales Prediction`
    },
    chanikya: {
        profile: `Creative graphic designer with a passion for visual storytelling.`,
        education: `Bachelor of Arts in Graphic Design`,
        languages: `English (Fluent), German (Intermediate)`,
        skills: `Adobe Photoshop, Illustrator, InDesign`,
        certificates: `Certified Graphic Designer`,
        projects: `Brand Identity, Marketing Campaigns`
    },
    sriya: {
        profile: `Dynamic project manager with a talent for leading cross-functional teams.`,
        education: `Master of Business Administration`,
        languages: `English (Fluent), Japanese (Intermediate)`,
        skills: `Project Management, Agile, Scrum`,
        certificates: `Certified Scrum Master`,
        projects: `Software Development Lifecycle, Product Launch`
    }
};

// Variable to keep track of the current user
let currentUser = 'Guest';

// Function to switch user profile based on credentials
function switchProfile() {
    let username = prompt("Enter your username:");
    let password = prompt("Enter your password:");

    if (!username || !password) {
        alert("Username and password are required to switch profiles.");
        return;
    }

    if (validCredentials[username] === password) {
        currentUser = username;
        document.getElementById('username-display').innerText = username;
    } else {
        alert("Invalid username or password.");
    }
}

// Display a default username at the start
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('username-display').innerText = 'Guest';
});

// Function to get the current time in HH:MM:SS format
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

// Function to show content based on selected section and current user
function showContent(contentId) {
    const content = userContent[currentUser] ? userContent[currentUser][contentId] : '';
    const time = getCurrentTime();

    document.getElementById('content').innerHTML = `
        <div class="chat incoming">
            <div class="details">
                <p>${content}</p>
                <span class="time">${time}</span>
            </div>
        </div>`;

    // Update chat input placeholder based on the contentId
    const chatInput = document.getElementById('chat-input');
    switch (contentId) {
        case 'profile':
            chatInput.placeholder = "Discussing Profile...";
            break;
        case 'education':
            chatInput.placeholder = "Talking about Education...";
            break;
        case 'languages':
            chatInput.placeholder = "Discussing Languages...";
            break;
        case 'skills':
            chatInput.placeholder = "Talking about Skills...";
            break;
        case 'certificates':
            chatInput.placeholder = "Discussing Certificates...";
            break;
        case 'projects':
            chatInput.placeholder = "Talking about Projects...";
            break;
        default:
            chatInput.placeholder = "Type a message";
    }
}
