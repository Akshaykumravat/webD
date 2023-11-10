const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

Shery.mouseFollower({
  duration: 2,
});
Shery.makeMagnet(".nlink");
Shery.hoverWithMediaCircle(".hvr", {
  images: ["./images/shaljam.jpg",]
});

gsap.from(".nlink", {
  stagger: 0.5,
  y: 10,
  duration: 1,
  ease: Power3,
});

Shery.textAnimate("#headings h1", {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.imageEffect("#hero-center img", {
  style: 3,
  config: {
    uFrequencyX: { value: 12, range: [0, 100] },
    uFrequencyY: { value: 12, range: [0, 100] },
    uFrequencyZ: { value: 10, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.7500056580287427 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.53, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect("#first-img img", {
  style: 4,
  config: {
    uColor: { value: false },
    uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.5, range: [0, 5] },
    uFrequency: { value: 3.5, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666666666666666 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.5, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect("#pic1 img", {
  style: 4,
  config: {
    uColor: { value: false },
    uSpeed: { value: 0.46, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 2.69, range: [0, 5] },
    uFrequency: { value: 5.37, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666666666666666 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.6, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect("#pic2 img", {
  style: 4,
  config: {
    uColor: { value: false },
    uSpeed: { value: 0.46, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 2.69, range: [0, 5] },
    uFrequency: { value: 5.37, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666666666666666 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.6, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

Shery.imageEffect("#left", {
  style: 4,
  config: {
    uColor: { value: true },
    uSpeed: { value: 1.52, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.45, range: [0, 5] },
    uFrequency: { value: 10, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 17.66 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.75 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.04, range: [1, 15] },
    durationOut: { value: 0.71, range: [0.1, 5] },
    durationIn: { value: 0.59, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 1.98, range: [0, 10] },
    metaball: { value: 0.18, range: [0, 2], _gsap: { id: 32 } },
    discard_threshold: { value: 0.68, range: [0, 1] },
    antialias_threshold: { value: 0.03, range: [0, 0.1] },
    noise_height: { value: 0.51, range: [0, 2] },
    noise_scale: { value: 8.26, range: [0, 100] },
    noiseDetail: { value: 7.44, range: [0, 100] },
    distortionAmount: { value: 2.98, range: [0, 10] },
    scale: { value: 36.36, range: [0, 100] },
    speed: { value: 0.79, range: [0, 1] },
  },
  gooey: true,

});

document
  .querySelector("#text button")
  .addEventListener("mouseover", function () {
    gsap.to("#page5 video", {
      opacity: 1,
      duration: 1,
      ease: Power3,
    });
  });
document
  .querySelector("#text button")
  .addEventListener("mouseleave", function () {
    gsap.to("#page5 video", {
      opacity: 0,
      duration: 1,
      ease: Power3,
    });
  });
