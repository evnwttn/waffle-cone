let zest = anime({
  targets: "#zest",
  translateX: 40,
  translateY: 80,
  rotateX: 30,
  rotateY: 30,
  scaleX: 1.5,
  skewX: 50,
  rotate: -180,
  loop: true,
  easing: "spring(1, 80, 10, 0)",
  direction: "alternate",
});

let funk = anime({
  targets: "#funk",
  width: "100%", // -> from '28px' to '100%',
  easing: "easeInOutQuad",
  direction: "alternate",
  loop: true,
});
