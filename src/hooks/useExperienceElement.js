import Practicas from '../assets/Icons/Other/folder-code.svg?react'
import Modelista from '../assets/Icons/Other/clipboard-list.svg?react'
import Estudios from '../assets/Icons/Other/graduation-cap.svg?react'

export const useExperienceElement = () => {
  const dataToFill = [
    {
      icon: Practicas,
      title: 'Experiencia en Desarrollo Web Full Stack',
      description: 'Cinco meses de prácticas profesionales en la',
      descriptionBold: 'Universidad Technológica de Acapulco',
      button: 'Referencias',
      onclick: () =>
        window.open(''),
    },
    // {
    //   icon: Modelista,
    //   title: 'Experiencia Como Modelista',
    //   description: 'Diez años como Clay Modeler en',
    //   descriptionBold: 'EDAG Engineering Spain, S.L.',
    //   button: 'Recomendación',
    //   onclick: () =>
    //     window.open(
    //       '/Documents/EDAG_CartaRecomendacion_AlbertCastroAlbacete_CENSORED.pdf'
    //     ),
    // },
    {
      icon: Estudios,
      title: 'Educación',
      description: 'Universidad Tecnológica de Acapulco',
      descriptionBold: 'Ingeniería en Desarrollo y Gestión de Software',
      button: 'Certificado',
      onclick: () =>
        window.open(''),
    },
  ]

  return { dataToFill }
}
