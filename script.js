// 聊天截图文件名（请根据实际图片修改）
const imageFiles = [
  'chat1.jpg',
  'chat2.jpg',
  'chat3.jpg',
  'chat4.jpg',
  'chat5.jpg'
  // 添加更多...
];

// 动态加载图片
const gallery = document.querySelector('.gallery');
imageFiles.forEach(file => {
  const img = document.createElement('img');
  img.src = `img/${file}`;
  img.alt = '聊天记录';
  img.loading = 'lazy'; // 懒加载
  gallery.appendChild(img);
});

// 背景音乐控制
const bgMusic = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');
let isPlaying = false;

// 用户首次交互后才尝试播放（绕过浏览器自动播放限制）
document.body.addEventListener('click', () => {
  if (!isPlaying) {
    bgMusic.play().then(() => {
      isPlaying = true;
      toggleBtn.textContent = '';
    }).catch(e => console.log('Autoplay blocked:', e));
  }
}, { once: true });

// 开关按钮
toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (isPlaying) {
    bgMusic.pause();
    toggleBtn.textContent = '';
    isPlaying = false;
  } else {
    bgMusic.play();
    toggleBtn.textContent = '';
    isPlaying = true;
  }
});

