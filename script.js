document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('h2');

    titles.forEach(function(title) {
        title.addEventListener('mouseover', function() {
            this.style.color = '#ff0000'; // 鼠标悬停时标题颜色变为红色
        });

        title.addEventListener('mouseout', function() {
            this.style.color = ''; // 鼠标移开时标题颜色恢复
        });
    });
});