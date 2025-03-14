function fact(n) {
    if (n == 0) return 1
 
    return n * fact(n-1)
 }

function applique(f, tab) {
    return tab.map(f)
}

let msgs = [
    { 
        "msg" : "Hello World",
        "metaData" : {
            "pseudo" : "toto",
            "date" : "2021-01-01"
        },
    },
    {
        "msg" : "Blah Blah",
        "metaData" : {
            "pseudo" : "titi",
            "date" : "2021-01-02"
        },
    },
    {
        "msg" : "I love cats",
        "metaData" : {
            "pseudo" : "tata",
            "date" : "2021-01-03"
        },
    }
]

function generateBubble(msg) {
    return `<span>${msg.metaData.pseudo} - posted on ${msg.metaData.date}</span> ${msg.msg}`
}
  
function updateBubbles() {
    fetch('https://7823664d-ce26-4fea-bf28-25f1d842fccd-00-176bnhifhg2zr.spock.replit.dev/msg/getAll')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let message_list = document.querySelector("ul")
        message_list.replaceChildren();
        data.forEach(msg => {
            let nouveauMessage = document.createElement("li");
            nouveauMessage.innerHTML = generateBubble(msg);
            message_list.appendChild(nouveauMessage)
        })
    });
}

function sendMessage() {
    let message = document.querySelector("textarea").value

    fetch(`https://7823664d-ce26-4fea-bf28-25f1d842fccd-00-176bnhifhg2zr.spock.replit.dev/msg/post/${message}`)
    .then(() => {
        document.querySelector("textarea").value = ''
    })

}
  

const toggleBtn = document.getElementById('toggle-btn');
const icon = document.getElementById('icon');

let isDarkMode = false;
function switchMode() {
    if(isDarkMode) {
        document.querySelectorAll('.dark-mode').forEach(element => {
            element.classList.remove('dark-mode');
            element.classList.add('bright-mode');
        });
        icon.textContent = 'brightness_3';
    } else {
        document.querySelectorAll('.bright-mode').forEach(element => {
            element.classList.remove('bright-mode');
            element.classList.add('dark-mode');
        });
        icon.textContent = 'wb_sunny';
    }
    isDarkMode = !isDarkMode;
}

updateBubbles()
