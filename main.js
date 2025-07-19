const userName = prompt("Ismingizni kiriting");
const surname = prompt("Familiyangizni kiriting");
const age = prompt("Yoshingizni kiriting");
let userInfo;
do {
    userInfo = prompt(`Ismingiz katta harf yoki kichikligini tanlang:
1) Katta
2) Kichik
`);
    if (userInfo !== "1" && userInfo !== "2") {
        alert("Iltimos bir yoki ikki raqamini kiriting");
    }
} while (userInfo !== "1" && userInfo !== "2");

const div = document.createElement("div");
div.style.width = "fit-content";
div.style.height = "300px";
div.style.border = "none";
div.style.borderRadius = "10px";
div.style.backgroundColor = "black";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.padding = "0px 20px";

div.className = "container";
const newWord = document.createElement("ol");
newWord.innerHTML = `<li>Ism: ${userName}</li><li>Familiya: ${surname}</li><li>Yosh: ${age}</li>`;
div.appendChild(newWord);
document.body.appendChild(div);

const liElements = newWord.querySelectorAll("li");
liElements.forEach(li => {
    li.style.color = "white";
});

if (userInfo === "1") {
    liElements.forEach(li => {
        li.style.textTransform = "uppercase";
    });
}else if (userInfo === "2") {
    liElements.forEach(li => {
        li.style.textTransform = "lowercase";
    });
}