export const addImage = (imgSrc) => {
  return new Promise((resolve, reject) => {
    const page = document.querySelector('.page');
    const image = document.createElement('img');
    image.setAttribute('alt', 'Blue Lakes');
    image.src = imgSrc;
    page.append(image);

    image.addEventListener('load', () => {
      resolve(image);
    });

    image.addEventListener('error', () => {
      reject(new Error('Ошибка загрузки изображения'));
    });
  });
};

const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const resultPromise = addImage(imgSrc);
resultPromise.then(data => console.log(data));





















// export const addImage = (imgSrc, callback) => {
//   const page = document.querySelector('.page');
//   const image = document.createElement('img');
//   image.setAttribute('alt', 'Blue Lakes');
//   image.src = imgSrc;
//   page.append(image);

//   image.addEventListener('load', () => {
//     callback(null, image);
//   });

//   image.addEventListener('error', () => callback('Image load is failed'));
// };

// const onImageLoaded = (error, imgElem) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   const { width, height } = imgElem;
//   const sizeElem = document.querySelector('.image-size');

//   sizeElem.textContent = `${width} x ${height}`;
// };