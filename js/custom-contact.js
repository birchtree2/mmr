/**
 * 动态生成 mailto 链接以混淆邮箱地址，防止爬虫抓取。
 * 目标邮箱：birchtree.blog@outlook.com
 */
function setupContactLink() {
    const user = "birchtree";
    const domain = "outlook";
    const at = " [dot] blog [at] "; // 使用 [dot] 和 [at] 来增加混淆度
    const displayEmail = user + at + domain + ".com";
    const fullEmail = user + at.replace(' [dot] ', '.').replace(' [at] ', '@') + domain + ".com";
    
    // 获取需要设置链接的元素 (假设 ID 为 emailLink)
    const emailLink = document.getElementById('myEmailLink');
    const footerEmailLink = document.getElementById('myFooterEmailLink');

    if (emailLink) {
        emailLink.href = 'mailto:' + fullEmail;
        emailLink.textContent = displayEmail;
    }
    
    if (footerEmailLink) {
        footerEmailLink.href = 'mailto:' + fullEmail;
        footerEmailLink.textContent = displayEmail;
    }
}

// 确保在页面加载完成后执行
window.addEventListener('load', setupContactLink);