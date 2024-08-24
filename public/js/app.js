window.addEventListener("DOMContentLoaded", () => {
  loadData();
});
const myOfferings = [
  {
    id: 1,
    title: "Full Stack Web Development (MERN)",
    description: `"Developing robust web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) for dynamic and scalable solutions.`,
    img: "MERN.jpg",
    isVisible: false,
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Creating powerful backend systems using Java, Python, and Node.js, ensuring secure and efficient server-side operations.",
    img: "backend.jpg",
    isVisible: false,
  },
  {
    id: 3,
    title: "Frontend Development",
    description:
      "Crafting visually appealing and responsive web interfaces using HTML, CSS, JavaScript, and React.js to provide an exceptional user experience.",
    img: "frontend.jpg",
  },
  {
    id: 4,
    title: "Mobile Application Development",
    description:
      "Developing user-friendly and high-performance mobile applications with React Native and Android Studio.",
    img: "mobile.jpg",
    isVisible: false,
  },
  {
    id: 5,
    title: "Database Management",
    description:
      "Designing and managing databases using MySQL, Oracle, and MongoDB to ensure data integrity and optimized performance.",
    img: "database.jpg",
    isVisible: false,
  },
  {
    id: 6,
    title: "User Research",
    description:
      "Conducting thorough user research to gather insights and create impactful experiences that drive user engagement and satisfaction.",
    img: "research.jpg",
    isVisible: false,
  },
];
const icon_urls = [
  "c.png",
  "c++.png",
  "Java.png",
  "Python.png",
  "HTML5.png",
  "CSS3.png",
  "JavaScript.png",
  "Nodejs.png",
  "Express.png",
  "React.png",
  "Tailwind.png",
  "Bootstrap.png",
  "MongoDB.png",
  "MySQL.png",
  "Oracle.png",
  "PostgreSQL.png",
  "AndroidStudio.png",
  "git.png",
  "GitHub.png",
  "VScode.png",
  "Firebase.svg",
  "Figma.svg",
  "SocketIo.svg",
  "WordPress.png",
];

const offerings_container = document.querySelector("#offerings-container");
const skills_container = document.querySelector("#skills-container");

function loadData() {
  // get url check which page we need to render then load data
  const url = window.location.href;
  if (url.includes("#contact")) {
    loadContactData();
  } else if (url.includes("#projects")) {
    loadProjectPage();
  } else if (url.includes("#about")) {
    loadAboutPage();
  } else if (url.includes("#skills")) {
    loadSkills();
  }

  offerings_container.innerHTML = "";
  skills_container.innerHTML = "";
  offerings_container.innerHTML = myOfferings
    .map((item) => {
      return `
    <div class="item" onclick="openModal(${item.id})"  >
    <div class="left">
      <i class="ri-checkbox-blank-circle-fill"></i>
      <h1 
        class=${item.isVisible ? "active" : ""}
      >${item.title} </h1>
    </div>
    <div class="right">
     <div class="content">
     <p>
       ${
         item.isVisible
           ? item.description
           : item.description.slice(0, 100) + "..."
       }
     </p>
     <div class="${!item.isVisible ? "img" : "img active"}">
          <img src="./assets/${item.img}" alt="MERN" />
        </div>
     </div>
      ${
        !item.isVisible
          ? `<i class="ri-add-line"></i>`
          : `<i class="ri-subtract-line"></i>`
      }
    </div>
  </div>
    `;
    })
    .join("");

  skills_container.innerHTML = icon_urls
    .map((item) => {
      return `
     <div class="item">
            <img src="./assets/logos/${item}" alt="${item}" />
      </div>
      `;
    })
    .join("");
}

function openModal(id) {
  // reset all false then current set ture
  myOfferings.forEach((item) => {
    if (item.id === id) {
      item.isVisible = !item.isVisible;
    } else {
      item.isVisible = false;
    }
  });
  loadData();
}

const loadContactData = () => {
  scrollToTop();
  const root = document.getElementById("root");
  root.innerHTML = "";
  root.innerHTML = getContactForm() + getSectionIdea();
};
const loadProjectPage = () => {
  scrollToTop();
  const root = document.getElementById("root");
  root.innerHTML = "";
  root.innerHTML = getProjects() + getSectionIdea();
};
const loadAboutPage = () => {
  scrollToTop();
  const root = document.getElementById("root");
  root.innerHTML = "";
  root.innerHTML = getAboutPage() + getSectionIdea();
};

const loadSkills = () => {
  scrollToTop();
  const root = document.getElementById("root");
  root.innerHTML = "";
  root.innerHTML = getSkills() + getSectionIdea();
};

function toggleMenu() {
  const menu = document.getElementById("navLinks");
  if (menu.style.display === "flex") menu.style.display = "none";
  else menu.style.display = "flex";
}

// scroll to top

// hide and show scroll button on scroll
window.addEventListener("scroll", () => {
  const scrollBtn = document.querySelector("#scroll-top");
  if (window.scrollY > 100) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
