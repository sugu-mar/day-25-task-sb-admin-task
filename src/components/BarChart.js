import { React, useEffect } from 'react'

function BarChart() {
  useEffect(() => {
    // Import chart-area-demo.js script
    const barChartDemoScript = document.createElement('script')
    barChartDemoScript.src = './asset/js/demo/chart-bar-demo.js'
    document.body.appendChild(barChartDemoScript)

    return () => {
      // Clean up function to remove the dynamically added script tags

      document.body.removeChild(barChartDemoScript)
    }
  }, [])
  return (
    <div className="chart-bar">
      <canvas id="myBarChart" />
    </div>
  )
}

export default BarChart
