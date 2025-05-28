function playAudio() {
    const audio = document.getElementById("xiaoMiaoVoice");
    audio.play().catch(error => {
        alert("⚠️ 無法播放音訊，請確認已解除靜音或點擊互動。");
        console.error(error);
    });
}
