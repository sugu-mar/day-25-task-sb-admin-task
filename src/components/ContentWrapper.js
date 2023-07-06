import React from 'react'
import Toolbar from './Toolbar'
import Dashboard from './Dashboard'
import Footer from './Footer'

function ContentWrapper() {
  return (
    //  <!-- Content Wrapper -->
    <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
        <Toolbar />
        <Dashboard />
      </div>

      <Footer />
    </div>
  )
}

export default ContentWrapper
