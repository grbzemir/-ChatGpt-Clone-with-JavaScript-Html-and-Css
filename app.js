const app = document.querySelector('.app');
mode = document.querySelector('#mode');

chats = document.querySelector('.chats');
add_chat = document.querySelector('#add-chat');

clear = document.querySelector('#delete');

qna = document.querySelector('.qna');
result = document.querySelector('.qna');

input = document.querySelector('.request input');
send = document.querySelector('#send'),

    OPENAI_API_KEY = 'sk-proj-6DlnSCLZC0tErla1PNp7T3BlbkFJRxNxJvjKSXfyEXpLrhW6',
    url = "https://api.openai.com/v1/chat/completions";



mode.addEventListener('click', toggleMode);
add_chat.addEventListener('click', addNewChat);
send.addEventListener('click', getAnswer);
input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        getAnswer();
    }
});

clear.addEventListener('click', () => {
    chats.innerHTML = '';
});

function toggleMode() {
    const light_mode = app.classList.contains('light');
    app.classList.toggle('light', !light_mode);

    mode.innerHTML = `<iconify-icon icon="bi:${light_mode ? 'brightness-high' : 'moon'}" class="icon"></iconify-icon> ${light_mode ? 'Light mode' : 'Dark mode'}`;
}

function addNewChat() {
    chats.innerHTML += ` <li>
        <div>
            <iconify-icon icon="bi:chat-left-text"
                class="icon"></iconify-icon>
            <span class="chat-title" contenteditable>New
                Chat</span>
        </div>
        <div>
            <iconify-icon icon="bi:trash3"
                class="icon"
                onclick="removeChat(this)"></iconify-icon>
            <iconify-icon icon="bi:pen"
                class="icon"
                onclick="updateChatTitle(this)"></iconify-icon>
        </div>
    </li>`;
}

const removeChat = (el) => el.parentElement.parentElement.remove();
const updateChatTitle = (el) => el.parentElement.previousElementSibling.querySelector('.chat-title').focus();

async function getAnswer() {
    try {
        const id = generateId();
        const question = input.value;
        app.querySelector('.hints p').textContent = question;

        qna.innerHTML += createChat(question, id);

        const p = document.getElementById(id);

        setTimeout(() => {
            p.innerHTML = '';
            input.value = '';
            const msg = "It's all about developing websites using different web technologies.";

            typeWriter(p, msg);
        }, 2000);
    } catch (err) {
        console.error(err);
    }
}

function createChat(question, id) {
    return `<div class="result">
        <div class="question">
            <iconify-icon icon="bi:person-fill-gear" class="icon blue"></iconify-icon>
            <h3>${question}</h3>
        </div>
        <div class="answer">
            <iconify-icon icon="bi:robot" class="icon green"></iconify-icon>
            <p id="${id}"><img src="loading.gif" class="loading"> Loading...</p>
        </div>
    </div>`;
}


function generateId() {
    const id = Math.random().toString(16).substr(2) + Date.now();
    return id;
}

function typeWriter(el, msg) {
    let i = 0;
    const interval = setInterval(() => {
        qna.scrollTop = qna.scrollHeight;
        if (i < msg.length) {
            el.innerHTML += msg.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}
