(function () {
    if (document.getElementById("auto-approve-btn")) return;

    let btn = document.createElement("button");
    btn.id = "auto-approve-btn";
    btn.innerText = "✅ 一鍵通過";
    btn.style.position = "fixed";
    btn.style.top = "80px";
    btn.style.right = "180px";
    btn.style.zIndex = "9999";
    btn.style.padding = "10px 16px";
    btn.style.background = "#1877f2";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "14px";
    btn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    document.body.appendChild(btn);

    btn.addEventListener("click", async () => {
        console.log("🚀 開始自動通過...");

        // 自動往下捲，載入更多潛在垃圾訊息
        for (let j = 0; j < 10; j++) {
            window.scrollBy(0, 2000);
            await new Promise(r => setTimeout(r, 2000));
        }

        // 找到所有「發佈」按鈕
        let buttons = Array.from(document.querySelectorAll('div[role="button"], span'))
            .filter(btn => (btn.innerText || btn.textContent || "").trim() === "發佈");

        console.log("✅ 找到待審核按鈕數量:", buttons.length);

        let i = 0;
        function clickNext() {
            if (i < buttons.length) {
                buttons[i].click();
                console.log("👉 已通過:", buttons[i].innerText);
                i++;
                setTimeout(clickNext, 1200);
            } else {
                console.log("🎉 全部完成");
                alert("✅ 已全部通過");
            }
        }

        clickNext();
    });
})();
