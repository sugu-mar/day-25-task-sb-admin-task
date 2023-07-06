import React from 'react'

function ProjectCard(props) {
  return (
    <>
      <h4 className="small font-weight-bold">
        {props.data.title}
        <span className="float-right">{props.data.value}%</span>
      </h4>
      <div className="progress mb-4">
        <div
          className={`progress-bar bg-${props.data.theme}`}
          role="progressbar"
          style={{ width: `${props.data.value}%` }}
          aria-valuenow={props.data.value}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </>
  )
}

export default ProjectCard
