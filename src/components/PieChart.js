import {React,useEffect} from 'react'

function PieChart() {
      useEffect(() => {

    // Import chart-pie-demo.js script
    const chartPieDemoScript = document.createElement('script')
    chartPieDemoScript.src = './asset/js/demo/chart-pie-demo.js'
    document.body.appendChild(chartPieDemoScript)

    return () => {
      // Clean up function to remove the dynamically added script tags
      
      document.body.removeChild(chartPieDemoScript)
    }
  }, [])
  return (
    <div class="chart-pie pt-4 pb-2">
      <canvas id="myPieChart"></canvas>
    </div>
  )
}

export default PieChart
