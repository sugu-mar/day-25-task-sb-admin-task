import React from 'react'

function ColorSystem(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div
        className={`card bg-${props.data.theme} text-${props.data.textColor} shadow`}
      >
        <div className="card-body">
          {props.data.title}
          <div className={`text-${props.data.textColor}-50 small`}>
            {props.data.color}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorSystem
