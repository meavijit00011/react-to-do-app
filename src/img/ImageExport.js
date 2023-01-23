const Images = {};
const setImages = () => {
  for (let i = 0; i < 8; i++) {
    Images[`avatar${i}`] = require(`./avatar${i}.png`);
  }
};
setImages();
export default Images;
