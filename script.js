const slide = document.querySelectorAll(".slide");
console.log(slide);

let count = 0;

slide.forEach((slide, index) => {
  slide.style.bottom = `${index * 100}%`;
});

const slideImage = () => {
  if (count >= slide.length) {
    count = 0;
  }
  // Reset count if it's less than 0
  if (count < 0) {
    count = slide.length - 1;
  }
  slide.forEach((slide) => {
    slide.style.transform = `translateY(${count * 100}%)`;
  });
};

const prev = () => {
  count--;
  slideImage();
};
const next = () => {
  count++;
  slideImage();
};
