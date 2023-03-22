const config = {
  technical_skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Redux",
    "Vite",
    "Python",
    "Express",
    "PostgreSQL",
    "SQLite",
    "Arduino",
    "Rhino3D",
    "Photoshop",
  ],
  professional_experience: [
    {
      company: "Gensler",
      role: "Creative Technologist, Software",
      start_date: "September 2021",
      end_date: "Present",
      achievements: [
        "Created front end application and established web socket communication for Jackie Robinson Museum exhibit",
        "Utilized React, Vite, and custom Wagtail CMS to make interactive people wall showcasing university alumni",
        "Developed Python application with NumPy and OpenCV libraries to map video content for LED installation",
        "Implemented ThreeJS, React, SQLite, and custom AppSpace cards to create dynamic and interactive people wall",
      ],
    },
    {
      company: "Recreational Equipment Inc.",
      role: "Outdoor Guide and Retail Specialist",
      start_date: "August 2019",
      end_date: "January 2022",
      achievements: [
        "Provided feature specifications, fit guidance, and technical advice about hiking, camping, and climbing gear",
        "Taught lessons on bouldering, compass navigation, and first aid to encourage confidence in the outdoors",
      ],
    },
    {
      company: "Stand and Build",
      role: "Technical Designer",
      start_date: "August 2019",
      end_date: "February 2021",
      achievements: [
        "Produced drawing sets and renderings for retail fixtures, custom furniture, and pop ups using Rhino 3D",
        "Realized client’s ideas for custom pages, features and styling of Shopify website by writing 1900 lines in CSS",
        "Wrote Arduino code to actuate rotational and translational animations for window displays on 5th Avenue",
      ],
    },
    {
      company: "Theater Work",
      role: "Carpentry and Design Summer Internships",
      start_date: "June 2016",
      end_date: "August 2018",
      achievements: [
        "Interpreted drawings to construct and install scenery for New York Stage and Film and the Hangar Theatre",
        "Coordinated with technical directors to safely optimize load-ins and load-outs of all relevant scenic elements",
      ],
    },
  ],
  education: [
    {
      school: "Fullstack Academy, Grace Hopper Program",
      start_date: "April 2021",
      end_date: "July 2021",
      description:
        "17-week immersive fullstack software engineering course focused on JavaScript development with Node.js, Express, Sequelize ORM for PostgreSQL databases, React, and Redux. Focus on HTML5 sites styled with CSS.",
    },
    {
      school: "Cornell University",
      start_date: "August 2015",
      end_date: "May 2019",
      description:
        "B.S Engineering: Mechanical Engineering for Design in the Arts",
      GPA: "3.29",
    },
  ],
  technical_projects: [
    {
      title: "Taste Not Waste",
      link: "https://github.com/GrundoCapstone/Taste-Not-Waste",
      year: "2021",
      description:
        "Mobile application that reduces food waste by alerting users when their uploaded grocery items will expire and suggesting recipes using the relevant ingredients. {React Native, Redux, Firebase, Google Vision, CSS, Edamam API}",
      points: [
        "Implemented Google Vision OCR to parse food names from line items of uploaded or scaned receipts",
        "Set up pre-populated form in React Native to allow users to view and edit uploaded items before saving them",
      ],
    },
    {
      title: "Meet in the Middle",
      link: "https://github.com/mlawrence103/async-project",
      year: "2021",
      description:
        "Web application for finding a meeting spot, and nearby activities, that balances travel time with varied transit methods from two addresses. {React, Redux, Mapbox API, Yelp API, CSS}",
      points: [
        "Integrated Mapbox and Yelp APIs to render dynamic map and highly rated restaurant suggestions neat meetup",
        "Determined formula to produce meeting point that best accounted for average paces by car, foot, and bike",
      ],
    },
  ],
};

export default config;
