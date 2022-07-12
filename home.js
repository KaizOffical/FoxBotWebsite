const form = document.getElementById('form');

// submint action
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const btn = document.getElementById('button');
    $(".button").prop("type", "")
    $(".button").removeClass('w3-button')
    $(".button").addClass('sending')
    setTimeout(function () {
        $(".button").addClass('success')
    }, 3700)
    setTimeout(() => {
        const username = document.getElementsByName('Name')[0];
        const email = document.getElementsByName('Email')[0];
        const message = document.getElementsByName('Message')[0];
        sendMessage(username.value, email.value, message.value);
        username.value = '';
        email.value = '';
        message.value = '';

        setTimeout(() => {
            location.reload();
        }, 2000)
    }, 4500)
});

function sendMessage(username, email, message) {
    const request = new XMLHttpRequest();
    request.open('POST', 'https://discord.com/api/webhooks/996054893334888448/_DsF2etVkQrmID84_0V6NDLVmKfHFj24-JHnmDWNZi52utfxgeG5DR-aL9UHfQxRSHqk')
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({
        username: 'Contact Helper',
        content: `**${username} (${email}) đã gửi tin nhắn:** \`${message}\``
    }))
}

function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

var modal = document.getElementById('exchangeModal');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}