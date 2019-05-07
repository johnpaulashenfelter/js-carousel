import { Application } from "stimulus"
import CarouselController from "carousel_controller"
// import slides from '../slides'

const changeValue = (element, value, eventType) => {
  const event = new Event(eventType);
  element.value = value;
  element.dispatchEvent(event);
}

describe('CarouselController', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div data-controller="carousel">
    <figure>
      <img data-target="carousel.image" />
      <figcaption data-target="carousel.caption">
      </figcaption>
    </figure>
    <button data-action="carousel#previous">Prev</button>
    <button data-action="carousel#next">Next</button>
    `;

  const application = Application.start();
  application.register("carousel", CarouselController);
  });

  it('has an initial `index` of "0"', () => {
    const index = document.querySelector('div').dataset.carouselIndex
    expect(index).toBe("0");
  });

  it('increments `index` when Next is clicked', () => {
    const carousel = document.querySelector('div')
    const btn = document.querySelector('[data-action="carousel#next"]')
    expect(carousel.dataset.carouselIndex).toBe("0");
    changeValue(btn, null, "click");
    expect(carousel.dataset.carouselIndex).toBe("1");
  });

  it('decrements `index` when Prev is clicked', () => {
    const carousel = document.querySelector('div')
    const btn = document.querySelector('[data-action="carousel#previous"]')
    const index = document.querySelector('div').dataset.carouselIndex
    carousel.dataset.carouselIndex = 3
    expect(carousel.dataset.carouselIndex).toBe("3");
    changeValue(btn, null, "click");
    expect(carousel.dataset.carouselIndex).toBe("2");
  });
  
})



// it('increments `slideIndex` when Next is clicked', () => {
//   wrapper.setState({ slideIndex: 1 });
//   wrapper.find('[data-action="next"]').simulate('click');
//   expect(wrapper.state('slideIndex')).toBe(2);
// });

// it('renders the current slide as a CarouselSlide', () => {
//   let slideProps;
//   slideProps = wrapper.find(CarouselSlide).props();
//   expect(slideProps).toEqual({ ...CarouselSlide.defaultProps, ...slides[0] });
//   wrapper.setState({ slideIndex: 1 });
//   slideProps = wrapper.find(CarouselSlide).props();
//   expect(slideProps).toEqual({ ...CarouselSlide.defaultProps, ...slides[1] });
// });

// it('passes defaultImg and defaultImgHeight to the CarouselSlide', () => {
//   const defaultImg = () => 'test';
//   const defaultImgHeight = 1234;
//   wrapper.setProps({ defaultImg, defaultImgHeight });
//   expect(wrapper.find(CarouselSlide).prop('Img')).toBe(defaultImg);
//   expect(wrapper.find(CarouselSlide).prop('imgHeight')).toBe(
//     defaultImgHeight
//   );
// });

// it('allows individual slides to override Img and imgHeight', () => {
//   const Img = () => 'test';
//   const imgHeight = 1234;
//   wrapper.setProps({ slides: [{ ...slides[0], Img, imgHeight }] });
//   expect(wrapper.find(CarouselSlide).prop('Img')).toBe(Img);
//   expect(wrapper.find(CarouselSlide).prop('imgHeight')).toBe(imgHeight);
// });
// describe('with a middle slide selected', () => {
//   beforeEach(() => {
//     wrapper.setState({ slideIndex: 1 });
//   });
//   it('decrements `slideIndex` when Prev is clicked', () => {
//     wrapper.find('[data-action="prev"]').simulate('click');
//     expect(wrapper.state('slideIndex')).toBe(0);
//   });
//   it('increments `slideIndex` when Next is clicked', () => {
//     wrapper.setState({ slideIndex: 1 });
//     wrapper.find('[data-action="next"]').simulate('click');
//     expect(wrapper.state('slideIndex')).toBe(2);
//   });
// });

// describe('with the first slide selected', () => {
//   it('wraps `slideIndex` to the max value when Prev is clicked', () => {
//     wrapper.setState({ slideIndex: 0 });
//     wrapper.find('[data-action="prev"]').simulate('click');
//     expect(wrapper.state('slideIndex')).toBe(slides.length - 1);
//   });
// });
// describe('with the last slide selected', () => {
//   it('wraps `slideIndex` to the min vaue when Next is clicked', () => {
//     wrapper.setState({ slideIndex: slides.length - 1 });
//     wrapper.find('[data-action="next"]').simulate('click');
//     expect(wrapper.state('slideIndex')).toBe(0);
//   });
// });
// });
