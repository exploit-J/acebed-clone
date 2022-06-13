const ctrlBtn = document.querySelectorAll(".about .ctrl-wrap .ctrl-button");
const textArea = document.querySelectorAll(".lg-desc .text-box");
const collectTabBtn = document.querySelectorAll(".tab-button button");
const collectSlides = document.querySelectorAll(".collection .slide");
const sectionTitle = document.querySelectorAll("section h2");
const topButton = document.querySelector(".top-button");
let windowH = window.innerHeight;

// about lg-textarea event
ctrlBtn.forEach((item) => {
  item.addEventListener("click", () => {
    let id1 = item.getAttribute("id");
    textArea.forEach((text) => {
      let id2 = text.getAttribute("id");
      if (id1 == id2) {
        text.classList.add("active");
      } else {
        text.classList.remove("active");
      }
    });
  });
});

// collection tab event
collectTabBtn[0].addEventListener("click", () => {
  collectTabBtn[0].classList.add("active");
  collectTabBtn[1].classList.remove("active");
  collectSlides[0].classList.add("active");
  collectSlides[1].classList.remove("active");
});
collectTabBtn[1].addEventListener("click", () => {
  collectTabBtn[0].classList.remove("active");
  collectTabBtn[1].classList.add("active");
  collectSlides[0].classList.remove("active");
  collectSlides[1].classList.add("active");
});

// section event
window.addEventListener("scroll", () => {
  //section title
  sectionTitle.forEach((item) => {
    const itemH = item.getBoundingClientRect().top;
    if (windowH > itemH + 100) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // about contents
  const aboutSlide = document.querySelector(".about .tns-outer");
  const aboutControl = document.querySelector(".about .ctrl-wrap");
  const aboutDesc = document.querySelector(".about .lg-desc");
  const aboutH = aboutSlide.getBoundingClientRect().top;

  if (windowH > aboutH + 300) {
    aboutSlide.classList.add("active");
  } else {
    aboutSlide.classList.remove("active");
  }
  if (windowH > aboutH + 500) {
    aboutControl.classList.add("active");
    aboutDesc.classList.add("active");
  } else {
    aboutControl.classList.remove("active");
    aboutDesc.classList.remove("active");
  }

  //collection contents
  const collectionSlide = document.querySelector(".new-item");
  const collectionTabmeny = document.querySelector(".tab-button");
  const collH = collectionSlide.getBoundingClientRect().top;
  if (windowH > collH + 200) {
    collectionSlide.classList.add("appear");
    collectionTabmeny.classList.add("appear");
  } else {
    collectionSlide.classList.remove("appear");
    collectionTabmeny.classList.remove("appear");
  }

  //sns contents
  const snsContents = document.querySelectorAll(".sns li");
  const snsH = snsContents[0].getBoundingClientRect().top;
  let timer = 100;
  if (windowH > snsH + 200) {
    snsContents.forEach((item) => {
      item.style.animation = `up 0.5s ${(timer += 100)}ms forwards`;
    });
  } else {
    item.classList.add("active");
  }

  //contact contents
  const storeMap = document.querySelector(".contact .contact-wrap .map");
  const mapH = storeMap.getBoundingClientRect().top;
  if (windowH > mapH + 300) {
    storeMap.classList.add("active");
  } else {
    storeMap.classList.remove("active");
  }
});

// top button event
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topButton.classList.add("active");
  } else {
    topButton.classList.remove("active");
  }
});
topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// family site
const familySite = document.querySelector(".family");
const familySiteButton = document.querySelector(".family button");
familySiteButton.addEventListener("click", () => {
  familySite.classList.toggle("active");
});
