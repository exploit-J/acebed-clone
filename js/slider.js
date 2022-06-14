const eventCarousel = tns({
  container: ".evt-slide",
  navContainer: ".event .ctrl-button",
  controlsContainer: ".event .ctrl-angle",
  preventScrollOnTouch: "auto",
});

const aboutCarousel = tns({
  container: ".about-slide",
  controls: false,
  navContainer: ".about .ctrl-wrap",
  preventScrollOnTouch: true,
});

const collectionNewCarousel = tns({
  container: ".new-item-slide",
  navContainer: ".new-item-slide-nav",
  controlsContainer: ".new-item .ctrl-angle",
  gutter: 6,
  edgePadding: 20,
  responsive: {
    1025: {
      edgePadding: 250,
      gutter: 50,
    },
    1800: {
      edgePadding: 400,
    },
  },
  preventScrollOnTouch: true,
  rewind: true,
});

const collectionRecommendCarousel = tns({
  container: ".rec-item-slide",
  navContainer: ".rec-item-slide-nav",
  controlsContainer: ".recommend-item .ctrl-angle",
  gutter: 6,
  edgePadding: 20,
  responsive: {
    1025: {
      edgePadding: 250,
      gutter: 50,
    },
    1800: {
      edgePadding: 400,
    },
  },
  preventScrollOnTouch: true,
  rewind: true,
});
