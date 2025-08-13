document.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.getElementById('message-container');
    let messageCount = 0;

    const messages = [
        "Hey, don't know if you know anything about it but Simon's in hospital after last night",
        "I just got an alert about it",
        "From CivicSight? Henry… what happened?",        
        "How would they even know about anything? This is what I was talking about, spying on you everywhere",
        "Calm down. It's part of the program I signed up for. But what did you do to Simon?",
        "What program? Why didn't you tell me!!! Screw you",
        "We keep telling you Henry, you'll be fine if you do the right thing",
        "Fuck off with that self righteous bs",
        "Man, we keep trying to help you, but shit like this keeps happening. Maybe CivicSight will help straighten you out."
    ];

    const createMessage = () => {
        if (messageCount >= messages.length) {
            return;
        }

        const messageText = messages[messageCount];
        messageCount++;

        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        messageElement.classList.add('message');

        if (messageCount % 2 === 1) {
            messageElement.classList.add('left');
        } else {
            messageElement.classList.add('right');
        }

        messageContainer.appendChild(messageElement);
        
        messageContainer.scrollTop = messageContainer.scrollHeight;

        if (messageCount === messages.length) {
            setTimeout(() => {
                window.close();
            }, 2000);
        }
    };

    createMessage();

    document.body.addEventListener('click', createMessage);
});