import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap'

// import 'startbootstrap-sb-admin-2/js/sb-admin-2'

function Sidebar() {
  useEffect(() => {
    function handleSidebarToggle() {
      const body = $('body')
      const sidebar = $('.sidebar')
      body.toggleClass('sidebar-toggled')
      sidebar.toggleClass('toggled')

      const sidebarCollapse = sidebar.find('.sidebar-collapse')
      if (sidebar.hasClass('toggled')) {
        sidebarCollapse.hide()
      } else {
        sidebarCollapse.show()
      }
    }

    function handleWindowResize() {
      const sidebarCollapse = $('.sidebar-collapse')
      const windowWidth = $(window).width()

      if (windowWidth < 768) {
        sidebarCollapse.hide()
      } else {
        sidebarCollapse.show()
      }

      if (windowWidth < 480) {
        const body = $('body')
        const sidebar = $('.sidebar')
        body.addClass('sidebar-toggled')
        sidebar.addClass('toggled')
        sidebarCollapse.hide()
      }
    }

    function handleScroll() {
      const scrollDistance = $(window).scrollTop()
      const scrollToTopButton = $('.scroll-to-top')
      if (scrollDistance > 100) {
        scrollToTopButton.show()
      } else {
        scrollToTopButton.hide()
      }
    }

    function handleClickScroll(e) {
      e.preventDefault()
      const target = $($(e.target).attr('href'))
      target[0].scrollIntoView({ behavior: 'smooth' })
    }

    $('#sidebarToggle').on('click', handleSidebarToggle)
    $('#sidebarToggleTop').on('click', handleSidebarToggle)
    $(window).on('resize', handleWindowResize)
    $(window).on('scroll', handleScroll)
    $('a.scroll-to-top').on('click', handleClickScroll)

    return () => {
      $('#sidebarToggle').off('click', handleSidebarToggle)
      $('#sidebarToggleTop').off('click', handleSidebarToggle)
      $(window).off('resize', handleWindowResize)
      $(window).off('scroll', handleScroll)
      $('a.scroll-to-top').off('click', handleClickScroll)
    }
  }, [])
  return (
    <>
      {/* //   <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link className="nav-link" to="/index.html">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        {/* <div className="sidebar-heading">Interface</div> */}
        {/* Nav Item - Pages Collapse Menu */}
        {/* <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog" />
            <span>Components</span>
          </Link>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link className="collapse-item" to="buttons.html">
                Buttons
              </Link>
              <Link className="collapse-item" to="cards.html">
                Cards
              </Link>
            </div>
          </div>
        </li> */}
        {/* Nav Item - Utilities Collapse Menu */}
        {/* <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench" />
            <span>Utilities</span>
          </Link>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link className="collapse-item" to="utilities-color.html">
                Colors
              </Link>
              <Link className="collapse-item" to="utilities-border.html">
                Borders
              </Link>
              <Link className="collapse-item" to="utilities-animation.html">
                Animations
              </Link>
              <Link className="collapse-item" to="utilities-other.html">
                Other
              </Link>
            </div>
          </div>
        </li> */}
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Addons</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Accounts</span>
          </Link>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Account action:</h6>
              <Link className="collapse-item" to="/login.html">
                Login
              </Link>
              <Link className="collapse-item" to="/register.html">
                Register
              </Link>
              <Link className="collapse-item" to="/forgot-password.html">
                Forgot Password
              </Link>
              <div className="collapse-divider" />
              {/* <h6 className="collapse-header">Other Pages:</h6>
              <Link className="collapse-item" to="404.html">
                404 Page
              </Link>
              <Link className="collapse-item" to="blank.html">
                Blank Page
              </Link> */}
            </div>
          </div>
        </li>
        {/* Nav Item - Charts */}
        <li className="nav-item">
          <Link className="nav-link" to="/charts.html">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </Link>
        </li>
        {/* Nav Item - Tables */}
        <li className="nav-item">
          <Link className="nav-link" to="/tables.html">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
        {/* Sidebar Message */}
        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="img/undraw_rocket.svg"
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <Link
            className="btn btn-success btn-sm"
            to="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </Link>
        </div>
      </ul>

      {/* // <!-- End of Sidebar --> */}
    </>
  )
}

export default Sidebar
