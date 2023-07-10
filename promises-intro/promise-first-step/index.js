export const addImage = (imgSrc) => {
  return new Promise((resolveCd, rejectCd) => {
    const page = document.querySelector('.page');
    const image = document.createElement('img');
    image.setAttribute('alt', 'Blue Lakes');
    image.src = imgSrc;
    page.append(image);

    const onImageLoaded = () => {
      const { width, height } = image;
      resolveCd({ width, height });
    };

    image.addEventListener('load', onImageLoaded);

    image.addEventListener('error', () => {
      rejectCd(new Error('Image load is failed'));
    });
  });
};

const imgSrc = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const resultPromise = addImage(imgSrc);
resultPromise.then(data => console.log(data));
