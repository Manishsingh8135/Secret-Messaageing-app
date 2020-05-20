const {
    hash
} = window.location;

const secretmessage = atob(hash.replace('#', ''));

if (secretmessage) {
    document.querySelector('#newmessage').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = secretmessage;

}



document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('#message-input');

    const encrypted = btoa(input.value);

    document.querySelector('#newmessage').classList.add('hide');
    document.querySelector('#newlink').classList.remove('hide');

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
})