export const addImage = (imgSrc, callback) => {
  const page = document.querySelector('.page');
  const image = document.createElement('img');
  image.setAttribute('alt', 'Blue Lakes');
  image.src = imgSrc;
  page.append(image);

  image.addEventListener('load', () => {
    callback(null, image);
  });

  image.addEventListener('error', () => callback('Image load is failed'));
};

const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

