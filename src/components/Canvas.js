import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Canvas() {
  useEffect(() => {
    const loadScript = (src, callback) => {
      const script = document.createElement('script')
      script.src = src
      script.addEventListener('load', callback)
      document.body.appendChild(script)
      return script
    }

    let chartScript, chartAreaDemoScript, chartPieDemoScript

    chartScript = loadScript('./asset/vendor/chart.js/Chart.js', () => {
      chartAreaDemoScript = loadScript(
        './asset/js/demo/chart-area-demo.js',
        () => {
          chartPieDemoScript = loadScript(
            './asset/js/demo/chart-pie-demo.js',
            () => {},
          )
        },
      )
    })

    return () => {
      // Check if the script elements exist before removing them
      if (chartScript && chartScript.parentNode) {
        chartScript.parentNode.removeChild(chartScript)
      }
      if (chartAreaDemoScript && chartAreaDemoScript.parentNode) {
        chartAreaDemoScript.parentNode.removeChild(chartAreaDemoScript)
      }
      if (chartPieDemoScript && chartPieDemoScript.parentNode) {
        chartPieDemoScript.parentNode.removeChild(chartPieDemoScript)
      }
    }
  }, [])

  return (
    // {/* Content Row */}
    <div className="row">
      {/* Area Chart */}
      <div className="col-xl-8 col-lg-7">
        <div className="card shadow mb-4">
          {/* Card Header - Dropdown */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Earnings Overview
            </h6>
            <div className="dropdown no-arrow">
              <Link
                className="dropdown-toggle"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink"
              >
                <div className="dropdown-header">Dropdown Header:</div>
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </div>
          </div>
          {/* Card Body */}
          <div className="card-body">
            <div className="chart-area">
              <canvas id="myAreaChart" />
            </div>
          </div>
        </div>
      </div>
      {/* Pie Chart */}
      <div className="col-xl-4 col-lg-5">
        <div className="card shadow mb-4">
          {/* Card Header - Dropdown */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Revenue Sources
            </h6>
            <div className="dropdown no-arrow">
              <Link
                className="dropdown-toggle"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink"
              >
                <div className="dropdown-header">Dropdown Header:</div>
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </div>
          </div>
          {/* Card Body */}
          <div className="card-body">
            <div className="chart-pie pt-4 pb-2">
              <canvas id="myPieChart" />
            </div>
            <div className="mt-4 text-center small">
              <span className="mr-2">
                <i className="fas fa-circle text-primary" /> Direct
              </span>
              <span className="mr-2">
                <i className="fas fa-circle text-success" /> Social
              </span>
              <span className="mr-2">
                <i className="fas fa-circle text-info" /> Referral
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Canvas
