import { IProject, IService, ISkill } from './type';
import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML </b>, <b>CSS</b> and <b>React.js</b>',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML </b>, <b>CSS</b> and <b>React.js</b>',
  },
  {
    Icon: AiOutlineApi,
    title: 'Api Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML </b>, <b>CSS</b> and <b>React.js</b>',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Competitive Coder',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML </b>, <b>CSS</b> and <b>React.js</b>',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX Designer',
    about:
      'Stunning user interface designer using <b>Figma</b> and <b>Framer</b>',
  },
  {
    Icon: RiComputerLine,
    title: 'Photographer',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML </b>, <b>CSS</b> and <b>React.js</b>',
  },
];

export const languages: ISkill[] = [
  {
    name: 'React',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'Javascript | Typescript',
    level: '90%',
    Icon: BsCircleFill,
  },
  {
    name: 'Tailwind | Sass | CSS',
    level: '95%',
    Icon: BsCircleFill,
  },
  {
    name: 'Angular',
    level: '55%',
    Icon: BsCircleFill,
  },
  {
    name: 'Html',
    level: '98%',
    Icon: BsCircleFill,
  },

  {
    name: 'Next',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'Vue',
    level: '60%',
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: 'Figma',
    level: '90%',
    Icon: BsCircleFill,
  },
  {
    name: 'Framer',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'Adobe XD',
    level: '60%',
    Icon: BsCircleFill,
  },
  {
    name: 'Photoshop',
    level: '90%',
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    name: 'COVID Tracker',
    description:
      'This app shows a statistical view about corona virus over the world',
    image_path: '/images/corona.webp',
    deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
    github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
    category: ['react'],
    tech_base: ['React', 'Chart.js', 'Material UI'],
  },
  {
    name: 'Algorithm Visualizer',
    image_path: '/images/algoVisual.png',
    deployed_url: 'https://visual-algorithm.web.app/',
    github_url: 'https://github.com/Dey-Sumit/algorithm-visualizer',
    category: ['react'],
    description:
      'An web app which shows how an algorithm (path finding or sorting) works with cool animation',
    tech_base: ['React', 'firebase', 'Framer Motion'],
  },

  {
    name: 'Dev Talks',
    image_path: '/images/dev.jpg',
    deployed_url: 'https://dev-talks.herokuapp.com/',
    github_url: 'https://github.com/Dey-Sumit/Dev-talks',
    category: ['node', 'mongo', 'react'],
    description:
      'Social Media app for developers who can share project,create posts,etc...',
    tech_base: [
      'React',
      'Redux',
      'Node',
      'Express',
      'Mongo',
      'REST API',
      'Bootstrap',
    ],
  },

  {
    name: 'Realtime Chat App',
    image_path: '/images/chatapp.jpg',
    deployed_url: 'https://sumit-chat.netlify.app/',
    github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
    category: ['node', 'react'],
    description:
      'Basic Realtime Chat App where one can create a room can talk to each other',
    tech_base: ['React', 'Node', 'Express', 'Socket', 'Bootstrap'],
  },

  {
    name: 'Tweeter Clone',
    image_path: '/images/tweetme.jpg',
    deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
    github_url: 'https://github.com/Dey-Sumit/tweetme',
    category: ['django', 'react'],
    description:
      'First Django Project :) | Typical Social Media App where one can post,like ,comment etc',
    tech_base: ['React', 'Django', 'Django REST API'],
  },

  {
    name: 'Color Classification using tf.js',
    image_path: '/images/color.jpg',
    deployed_url: '!#',
    github_url: 'https://github.com/Dey-Sumit/color-classification',
    category: ['express'],
    description:
      'Tried ML with JS :) | this app classifies a color using CNN algorithm in browser',
    tech_base: ['Express', 'TensorFlow.js', 'Vanilla js'],
  },
  {
    name: 'YouTube using YouTube ',
    image_path: '/images/youtubeClone.png',
    deployed_url: 'https://not-utube.web.app/',
    github_url: 'https://github.com/Dey-Sumit/youtube-clone-tutorial-up',
    category: ['express'],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    tech_base: [
      'React',
      'Redux',
      'Firebase Auth',
      'YouTube API',
      'Sass',
      'Bootstrap',
    ],
  },
  {
    name: 'Football App',
    image_path: '/images/football.png',
    deployed_url: 'https://o-my-goal.web.app/',
    github_url: 'https://github.com/Dey-Sumit/football-app',
    category: ['react'],
    description:
      'o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ',
    tech_base: ['React', 'Redux', 'Firebase Auth', 'API', 'Sass', 'Bootstrap'],
  },
];
