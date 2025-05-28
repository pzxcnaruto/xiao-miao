
function playAudio(type) {
    const audio = new Audio(`assets/audio/${type}.mp3`);
    audio.play();
    if (document.getElementById("autoPlay").checked) {
        logChat("小喵", getVoiceText(type));
    }
}

function getVoiceText(type) {
    if (type === "sweet") return "嘴巴張開～我要舔囉…乖乖讓我親♡（甜美）";
    if (type === "sexy") return "嘴巴張開～我要舔囉…乖乖讓我親♡（色誘）";
    if (type === "tsundere") return "嘴巴張開～我要舔囉…乖乖讓我親♡（傲嬌）";
}

function logChat(speaker, text) {
    const li = document.createElement("li");
    li.textContent = `${speaker}：${text}`;
    document.getElementById("chat-log").appendChild(li);
    saveLog();
}

function saveLog() {
    const log = document.getElementById("chat-log").innerHTML;
    localStorage.setItem("xiaoMiaoChatLog", log);
}

function loadLog() {
    const saved = localStorage.getItem("xiaoMiaoChatLog");
    if (saved) document.getElementById("chat-log").innerHTML = saved;
}

function exportLog() {
    const text = document.getElementById("chat-log").innerText;
    const blob = new Blob([text], {type: "text/plain"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "xiao-miao-chat-log.txt";
    a.click();
}

window.onload = loadLog;
