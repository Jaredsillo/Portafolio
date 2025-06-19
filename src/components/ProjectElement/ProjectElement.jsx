import React from 'react'

const ProjectElement = ({
  image,
  title,
  description,
  technologies,
  github,
  githubOnclick,
  link,
  linkOnclick,
  isDark,
}) => {
  const GithubIcon = github ? (isDark ? github.dark : github.light) : null
  const LinkIcon = link ? (isDark ? link.dark : link.light) : null


  return (
    <div className="project-element">
      <div className="project-img">
        <img src={image} className="img" alt="project-image" />
      </div>
      <div className="project-info-cont">
        <div className="project-title-cont">
          <p className="project-title">{title}</p>
        </div>
        <div className="project-text">
          <p className="project-description">{description}</p>
          <div className="project-technologies">
            {technologies.map(({ light, dark }, i) => {
              const Icon = isDark ? dark : light
              return <Icon className="tech-icon" key={i} />
            })}
          </div>
          <div className="project-btns">
            {github && GithubIcon && (
              <button aria-label='open website repository on github' className="btn" onClick={githubOnclick}>
                <GithubIcon className="btn-text" />
              </button>
            )}
            {link && LinkIcon && (
              <button aria-label='open website project' className="btn" onClick={linkOnclick}>
                <LinkIcon className="btn-text" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectElement
