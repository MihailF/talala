// function setBannerHeight() {
//     // Получаем высоту экрана
//     const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

//     // Получаем высоту блока с тегом header
//     const headerHeight = document.querySelector('header').offsetHeight;

//     // Вычисляем новую высоту для блока с классом banner
//     const newBannerHeight = screenHeight - headerHeight;

//     // Устанавливаем новую высоту блока с классом banner
//     document.querySelector('.banner').style.height = `${newBannerHeight}px`;
//   }

//   // Вызываем функцию после загрузки страницы
//   window.onload = setBannerHeight;

//   // Можно также вызывать функцию при изменении размеров окна
//   window.onresize = setBannerHeight;