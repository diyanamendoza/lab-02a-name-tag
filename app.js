// Access input
const userName = document.getElementById('userName');
// Access button
const createButton = document.getElementById('create-button');
// Access name display space
const displayName = document.getElementById('displayName');
// Make create button display userName value in display space
createButton.addEventListener('click', () => {
    displayName.textContent = userName.value;
})