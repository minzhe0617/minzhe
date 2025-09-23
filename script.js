document.addEventListener('DOMContentLoaded', () => {
    // 獲取模式切換按鈕和 <body> 元素
    const themeToggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // 為按鈕添加點擊事件監聽器
    themeToggleButton.addEventListener('click', () => {
        // 使用 classList.toggle 來新增或移除 'light-mode' class
        bodyElement.classList.toggle('light-mode');
    });
});
