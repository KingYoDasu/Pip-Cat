// References to DOM elements
const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");
const span = document.querySelector("span");
const embed = new Discord.RichEmbed()
.setTitle("มีไอ้ไปร์ทร้อน ๆ ให้กดในบริเวณ 100 ม. ใกล้คุณ!")
.setURL("https://pipcat.netlify.app/")
.setAuthor("Pip-Cat | บริการถึงใจ ฉับไวถึงคุณ", "https://media.discordapp.net/attachments/527264094622056449/965242969554812948/received_466274227391041.jpeg?width=587&height=702","https://pipcat.netlify.app/")
.setColor(#ff0000)
.setDescription("กดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบกดหน่อยคัรบ")
.setFooter("Provide to you by @SukiKana4826, https://media.discordapp.net/attachments/527264094622056449/965242969554812948/received_466274227391041.jpeg?width=587&height=702")
.setImage("https://media.discordapp.net/attachments/527264094622056449/965242969554812948/received_466274227391041.jpeg?width=587&height=702")message.channel.send({embed})

// The two images of the POP CAT
const openMouthImg = "./images/pip.jpeg";

// The two Popping sounds
const openMouthSound = new Audio("./sound/pip.wav");

// Event Handlers (Desktops)
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mousedown", increment)

// Event Handers (Touch Screens)
btn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  openMouth();
});

btn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  increment();
});

// The functions which will perform the cool stuff
function openMouth() {
  popcat.src = openMouthImg;
  openMouthSound.play();
}

function increment() {
    span.innerHTML++;
}
