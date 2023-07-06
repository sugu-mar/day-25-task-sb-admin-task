import { React, useEffect } from 'react'

function AreaChart() {
  useEffect(() => {
    // Import chart-area-demo.js script
    const chartAreaDemoScript = document.createElement('script')
    chartAreaDemoScript.src = './asset/js/demo/chart-area-demo.js'
    document.body.appendChild(chartAreaDemoScript)

    return () => {
      // Clean up function to remove the dynamically added script tags

      document.body.removeChild(chartAreaDemoScript)
    }
  }, [])
  return (
    <div class="chart-area">
      <canvas id="myAreaChart"></canvas>
    </div>
  )
}

export default AreaChart
