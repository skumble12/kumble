const getContactForm = () => {
  return `
     <section id="message" class="section-content">
        <div class="heading " style="justify-content: center;" data-aos="fade-up" data-aos-duration="400">
          <h1 >Send us a Message</h1>
        </div>
        <div class="form-container"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <script>
            var submited = false;
          </script>
          <iframe
            src=""
            name="hidden_iframe"
            style="display: none"
            onload="if(submited){alert('Message Sent Successfully...')
              document.querySelector('form').reset();
            }"
            frameborder="0"
          ></iframe>
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdQOR8nMCg71FgRVyBxW-elb41X_VgvvCNMYWqPtQOBK0rr4w/formResponse"
            method="POST"
            onsubmit="submited=true"
            target="hidden_iframe"
          >
            <div class="pg">
              <div class="group">
                <label id="entry.1339150196">First Name*</label>
                <input
                  type="text"
                  class="input1"
                  name="entry.1339150196"
                  placeholder="First Name"
                  required
                />
              </div>
              <div class="group">
                <label id="entry.1542737700">Last Name*</label>
                <input
                  type="text"
                  class="input1"
                  name="entry.1542737700"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div class="group">
                <label id="entry.1707247663">Mobile No*</label>
                <input
                type="text"
                class="input1"
                name="entry.1707247663"
                placeholder="982323XXXX"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div class="group">
                <label id="entry.483640745">Your Message*</label>
                <textarea
                name="entry.483640745"
                class="input1"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button class="button1">
              Send Feedback
              <i class="ri-arrow-right-line"></i>
            </button>
          </form>
        </div>
      </section>
  `;
};

const getSectionIdea = () => {
  return `
        <section id="ax" class="section-content">
          <div class="container">
            <h1>Have a project in <br />mind? Let's get to <br />work!👋🚀</h1>
            <div class="actions">
              <a href="#"
                >Let's Talk
                <i class="ri-arrow-right-line"></i>
              </a>
              <a href="#"
                >My Portfolio
                <i class="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </section>
        `;
};

const getProjects = () => {
  return `
      <section class="section-content projects">
        <div class="heading center" data-aos="fade-up" data-aos-duration="400">
          <h1>Explore Latest Project</h1>
          <p>
          Discover the innovative projects I've developed, showcasing my expertise in full-stack web development and my passion for creating impactful digital experiences.
          </p>
        </div>
        <div class="projects-container">
          <div class="project" data-aos="zoom-in" data-aos-duration="1000">
            <div class="info">
              <div class="left">
                <p>Web Based</p>
                <h1>GateKeeper - Student Entries Manager</h1>
              </div>
              <a href="https://gatekeeper-online.onrender.com/" target="_blank">
                <i class="ri-arrow-right-line"></i>
              </a>
            </div>
            <div class="thumbnail">
              <img src="https://cdn.dribbble.com/userupload/13132563/file/original-f520c0050f5e1ec6625fddd2c5909539.jpg?resize=1024x800" alt="" />
            </div>
          </div>
          <div class="project" data-aos="zoom-in" data-aos-duration="1000">
            <div class="info">
              <div class="left">
                <p>Web Based</p>
                <h1>Netflix UI Design [ Movie Dashboard Design ]</h1>
              </div>
              <a href="https://github.com/Ghanasham2004/Netflix" target="_blank">
                <i class="ri-arrow-right-line"></i>
              </a>
            </div>
            <div class="thumbnail">
              <img src="https://cdn.dribbble.com/userupload/7441977/file/original-5250b2d89febc1639ea5d89a09ea7912.jpeg?resize=752x752&vertical=center" alt="" />
            </div>
          </div>
          <div class="project" data-aos="zoom-in" data-aos-duration="1200">
            <div class="info">
              <div class="left">
                <p>Web Based</p>
                <h1>Scorely - For Classes Rankers (Results)</h1>
              </div>
              <a href="#" onclick="alert('Coming Soon..')">
                <i class="ri-arrow-right-line"></i>
              </a>
            </div>
            <div class="thumbnail">
              <img src="https://cdn.dribbble.com/userupload/14526398/file/original-1d6ecfc613bf1266d330388621551e4b.png?resize=1024x768" alt="" />
            </div>
          </div>
          <div class="project" data-aos="zoom-in" data-aos-duration="1400">
            <div class="info">
              <div class="left">
                <p>Console Based</p>
                <h1>Airline Reservation System Java</h1>
              </div>
              <a href="#" onclick="alert('Coming Soon..')">
                <i class="ri-arrow-right-line"></i>
              </a>
            </div>
            <div class="thumbnail">
              <img src="https://cdn.dribbble.com/users/1522014/screenshots/16275706/media/dc8bf6f0a8487d17c4f8e84c3bf5c5b5.png?resize=840x630&vertical=center" alt="" />
            </div>
          </div>
          <div class="project" data-aos="zoom-in" data-aos-duration="1600">
            <div class="info">
              <div class="left">
                <p>Web Based</p>
                <h1>Hungry Hub-Food Ordering Website</h1>
              </div>
              <a href="https://github.com/E-Smarts/VG_Food_Ordering" onclick="alert('Coming Soon..')">
                <i class="ri-arrow-right-line"></i>
              </a>
            </div>
            <div class="thumbnail">
              <img src="https://cdn.dribbble.com/userupload/3290255/file/original-84cdd6b0e6a7369d13d1fa032eef410d.png?resize=1024x768" alt="" />
            </div>
          </div>
        </div>
      </section>
  `;
};

const getAboutPage = () => {
  return `
        <section class="section-content about">
        <div class="container" data-aos="fade-up" data-aos-duration="800">
          <div class="right">
            <img src="./assets/about2.jpg" alt="about" />
          </div>
          <div class="left use-w">
            <h1 class="fs">Digital Experiences with <br />Passion</h1>
            <p class="w-f">
              A passionate Full-Stack Developer specializing in the MERN stack
              (MongoDB, Express.js, React.js, Node.js) 🌟. With a strong
              foundation in both frontend and backend technologies, I create
              digital experiences that are functional and visually appealing. My
              deep knowledge of languages like Java, Python, and C++ allows me
              to build robust, scalable applications.
            </p>
            <p class="w-f">
              Crafting user-friendly web applications is my forte, and I love
              bringing innovative ideas to life through clean, efficient code
              🚀. Let's collaborate and turn your vision into a digital reality!
            </p>
            <div class="actions">
              <a href="#contact"
                >Let's Talk
                <i class="ri-arrow-right-line"></i>
              </a>
              <a href="#project" 
                >Our Projects
                <i class="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
  `;
};

const getSkills = () => {
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

  return `
<section class="section-content skills">
  <div class="heading center" data-aos="fade-up" data-aos-duration="400">
    <h1>Skills & Expertise</h1>
    <p>
      With a strong foundation in various programming languages and
      technologies, I create digital experiences that are both functional
      and visually appealing.
    </p>
  </div>
  <div class="skills-container" id="skills-container" data-aos="fade-up" data-aos-duration="800">
    ${icon_urls
      .map((url) => {
        return `
        <div class="item">
          <img src="./assets/logos/${url}" alt="skill" />
        </div>
        `;
      })
      .join("")}
  </div>
  
</section>


`;
};
