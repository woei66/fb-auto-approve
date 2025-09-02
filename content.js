(function () {
    if (document.getElementById("auto-approve-btn")) return;

    // 建立一鍵拒絕按鈕
    let btn = document.createElement("button");
    btn.id = "auto-approve-btn";
    btn.innerText = "✅ 一鍵發佈";
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
        console.log("🚀 開始自動發佈...");

        let totalDenied = 0;

        async function clickNext() {
            while (true) {
                // 抓取目前所有「發佈」按鈕
                let buttons = Array.from(document.querySelectorAll('div[role="button"], span, button'))
                    .filter(b => (b.innerText || b.textContent || "").trim() === "發佈");

                console.log("找到按鈕列表:", buttons.map(b => b.innerText));

                if (buttons.length === 0) break;

                // 點擊所有按鈕
                for (let btn of buttons) {
                    btn.click();
                    totalDenied++;
                    console.log("👉 已發佈:", btn.innerText, "| 已發佈總數:", totalDenied);
                    await new Promise(r => setTimeout(r, 800)); // 等待 DOM 更新
                }

                // 滾動頁面以載入更多按鈕
                window.scrollBy(0, 1500);
                await new Promise(r => setTimeout(r, 1500));
            }

            console.log("🎉 全部完成，總共發佈:", totalDenied);
            alert(`✅ 已全部發佈，共 ${totalDenied} 個`);
        }

        await clickNext();
    });
})();
