document.getElementById('shareButton').addEventListener('click', function() {
    var messageInput = document.getElementById('messageInput');
    var messages = document.getElementById('messages');

    if (messageInput.value.trim() !== '') {
        var messageDiv = document.createElement('div');
        messageDiv.innerText = messageInput.value;
        messages.appendChild(messageDiv);
        messageInput.value = '';
    }
});
