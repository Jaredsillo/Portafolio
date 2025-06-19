import ToggleImg from '../assets/Images/Projects/project-1.webp'
import TypingImg from '../assets/Images/Projects/project-2.webp'
import InfonetImg from '../assets/Images/Projects/project-Infonet.jpeg'
import UTAImg from '../assets/Images/Projects/project-UTA.png'
import SIGEAImg from '../assets/Images/Projects/project-SIGEA.png'
import WorkImg from '../assets/Images/Projects/project-work-in-progress.webp'
import Css from '../assets/Icons/Logos/css.svg?react'
import Bootstrap from '../assets/Icons/Logos/bootstrap.svg?react'
import SweetAlert from '../assets/Icons/Logos/Sweetalert2.svg?react'
import ExpressDark from '../assets/Icons/Logos/Express.js_dark.svg?react'
import ExpressLight from '../assets/Icons/Logos/Express.js_light.svg?react'
import Html from '../assets/Icons/Logos/html5.svg?react'
import JavaScript from '../assets/Icons/Logos/javascript.svg?react'
import MongoDb from '../assets/Icons/Logos/mongodb.svg?react'
import MySql from '../assets/Icons/Logos/mysql.svg?react'
import PHP from '../assets/Icons/Logos/php.svg?react'
import NodeJs from '../assets/Icons/Logos/nodejs.svg?react'
import ReactDark from '../assets/Icons/Logos/React_dark.svg?react'
import ReactLight from '../assets/Icons/Logos/React_light.svg?react'
import Sass from '../assets/Icons/Logos/sass.svg?react'
import Supabase from '../assets/Icons/Logos/supabase.svg?react'
import TypeScript from '../assets/Icons/Logos/typescript.svg?react'
import SocketDark from '../assets/Icons/Logos/Socket.io_dark.svg?react'
import SocketLigth from '../assets/Icons/Logos/Socket.io_light.svg?react'
import GithubIcon from '../assets/Icons/Other/github.svg?react'
import GithubIconLight from '../assets/Icons/Other/github-white.svg?react'
import LinkIcon from '../assets/Icons/Other/link.svg?react'
import LinkIconWhite from '../assets/Icons/Other/link-white.svg?react'

export const useProjectElement = () => {
  const techIcon = (icon) => ({ light: icon, dark: icon })

  const dataToFill = [
    // {
    //   image: ToggleImg,
    //   title: 'Toggle Comments',
    //   description:
    //     'Extensión para VSCode que permite alternar la visibilidad de los comentarios sin modificar el código, ideal para estudiantes que necesitan tomar muchos apuntes y, al mismo tiempo, quieren ver el código con claridad.',
    //   technologies: [techIcon(TypeScript)],
    //   github: { light: GithubIcon, dark: GithubIconLight },
    //   githubOnclik: () =>
    //     window.open(
    //       'https://github.com/BeruzDev/vsc_extension_toggle_comments'
    //     ),
    //   link: { light: LinkIcon, dark: LinkIconWhite },
    //   linkOnclick: () =>
    //     window.open(
    //       'https://marketplace.visualstudio.com/items?itemName=BeruzDev.toggle-comments-visibility'
    //     ),
    // },
    // {
    //   image: TypingImg,
    //   title: 'A Typing Game',
    //   description:
    //     'Una aplicación web diseñada para mejorar la velocidad y precisión en la mecanografía. A Typing Game permite a los usuarios practicar con palabras, frases, o incluso fragmentos de código en varios lenguajes, proporcionando un seguimiento de métricas en tiempo real.',
    //   technologies: [
    //     {
    //       light: ReactLight,
    //       dark: ReactDark,
    //     },
    //     techIcon(Sass),
    //   ],
    //   github: { light: GithubIcon, dark: GithubIconLight },
    //   githubOnclik: () =>
    //     window.open('https://github.com/BeruzDev/a-typing-game'),
    //   link: { light: LinkIcon, dark: LinkIconWhite },
    //   linkOnclick: () => window.open('https://atypinggame.netlify.app/'),
    // },
    {
      image: InfonetImg,
      title: 'Infonet',
      description:
        // 'Infonet es una aplicación web desarrollada para la enseñanza de habilidades técnicas y programación. Participé en el diseño y desarrollo de esta plataforma educativa en línea, enfocada en ofrecer contenido accesible y estructurado para estudiantes.',
        'Infonet es una aplicación web desarrollada para facilitar el aprendizaje de habilidades técnicas y programación. Me desempeñé como desarrollador Full Stack, participando en todas las fases del proyecto: desde el diseño de la base de datos hasta la interfaz de usuario.',
        technologies: [
        techIcon(PHP),
        techIcon(MySql),
        techIcon(Css),
        techIcon(Bootstrap),
      ],
    },
    {
      image: UTAImg,
      title: 'UTA',
      description:
        'Desarrollo de una aplicación web institucional para la Universidad Tecnológica de Acapulco, enfocada en la difusión de información académica y mejora de la experiencia del usuario.',
      technologies: [techIcon(Html), techIcon(Css), techIcon(JavaScript)],
      link: { light: LinkIcon, dark: LinkIconWhite },
      linkOnclick: () => window.open('https://www.utacapulco.edu.mx/UTANUEVA4/Inicio.php'),
    },
    {
      image: SIGEAImg,
      title: 'SIGEA',
      description:
        'SIGEA (Sistema Integral de Gestión Escolar Académica) es una aplicación web Full Stack desarrollada para optimizar y automatizar los procesos académicos y administrativos de una institución educativa.',
      technologies: [
        techIcon(NodeJs),
        {
          light: ExpressLight,
          dark: ExpressDark,
        },
        // techIcon(Supabase),
        {
          light: ReactLight,
          dark: ReactDark,
        },
        techIcon(Bootstrap),
        techIcon(SweetAlert),
        techIcon(MySql),
      ],
    },
  ]

  const reverseData = dataToFill.reverse()

  return { reverseData }
}
