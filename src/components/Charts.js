import React from 'react'
import { useEffect } from 'react'
import AreaChart from './AreaChart'
import PieChart from './PieChart'

function Charts() {
  useEffect(() => {
    // Import Chart.js script
    const chartScript = document.createElement('script')
    chartScript.src = './asset/vendor/chart.js/Chart.min.js'
    document.body.appendChild(chartScript)

    return () => {
      // Clean up function to remove the dynamically added script tags
      document.body.removeChild(chartScript)
    }
  }, [])

  return (
    <div class="row">
      {/* <!-- Area Chart --> */}
      <div class="col-xl-8 col-lg-7">
        <div class="card shadow mb-4">
          {/* <!-- Card Header - Dropdown --> */}
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
            <div class="dropdown no-arrow">
              <a
                class="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink"
              >
                <div class="dropdown-header">Dropdown Header:</div>
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Card Body --> */}
          <div class="card-body">
            <AreaChart />
          </div>
        </div>
      </div>

      {/* <!-- Pie Chart --> */}
      <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
          {/* <!-- Card Header - Dropdown --> */}
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
            <div class="dropdown no-arrow">
              <a
                class="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink"
              >
                <div class="dropdown-header">Dropdown Header:</div>
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Card Body --> */}
          <div class="card-body">
            <PieChart />
            <div class="mt-4 text-center small">
              <span class="mr-2">
                <i class="fas fa-circle text-primary"></i> Direct
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-success"></i> Social
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-info"></i> Referral
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts
