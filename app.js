const app = document.querySelector('.app'); /* İlk Html Etiketini alır*/
mode = document.querySelector('#mode'); /*İd Seçimi Yapar*/

chats = document.querySelector('.chats');
add_chat = document.querySelector('#add-chat');

clear = document.querySelector('#delete');

result = document.querySelector('.qna');

input = document.querySelector('.input-group input');
send = document.querySelector('#send');

mode.addEventListener('click', toggleMode);
add_chat.addEventListener('click', addNewChat);

clear.addEventListener('click', () => chats.innerHTML = '');

//update light mode & dark mode

function toggleMode() {

    console.log('slicked');
    const light_mode = app.classList.contains('light');
    app.classList.toggle('light', !light_mode);

    mode.innerHTML = `<iconify-icon icon="bi:${light_mode ? 'brightness-high' : 'moon'}" class="icon"></iconify-icon> ${light_mode ? 'Light mode' : 'Dark mode'}`;

}


//Yeni chat olusturma

function addNewChat() {

    chats.innerHTML += ``;
}


const removeChat = (el) => el.parentElement.parentElement.remove();
// const removeChat = (el) => 