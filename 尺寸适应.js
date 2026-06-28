
尺寸()

function 尺寸() {
  let w = 1560;
  let h = 1100;

  // 计算设计稿对角线长度
  let designDiagonal = Math.sqrt(w * w + h * h);

  // 计算视口对角线长度
  let viewportDiagonal = Math.sqrt(
    window.innerWidth * window.innerWidth +
    window.innerHeight * window.innerHeight
  );

  // 基于对角线比例计算缩放
  let scale = (viewportDiagonal / designDiagonal) * 0.8;

  document.documentElement.style.setProperty('--sf', scale);
}
{
  let q
  window.addEventListener('resize', function () {
    if (q) {
      clearTimeout(q);
    }
    q = setTimeout(() => {
      requestAnimationFrame(尺寸)
    }, 1000);
  });
}