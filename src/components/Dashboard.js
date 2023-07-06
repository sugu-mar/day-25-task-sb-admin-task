import { React } from 'react'
import { Link } from 'react-router-dom'
import Canvas from './Canvas'
import Card from './Card'
import ProjectCard from './ProjectCard'
import ColorSystem from './ColorSystem'

function Dashboard() {
  const cards = [
    { id: 1, title: 'Earnings (Monthly)', amount: '$40,000', theme: 'primary' },
    { id: 2, title: 'Earnings (Annual)', amount: '$215,000', theme: 'success' },
    { id: 3, title: 'Tasks', amount: '50%', theme: 'info' },
    { id: 4, title: 'Pending Requesrs', amount: '18', theme: 'warning' },
  ]

  const projectCards = [
    { id: 1, title: 'Server Migration', value: '20', theme: 'danger' },
    { id: 2, title: 'Sales Tracking', value: '40', theme: 'warning' },
    { id: 3, title: 'Customer Database', value: '60', theme: '' },
    { id: 4, title: 'Payout Details', value: '80', theme: 'info' },
    { id: 5, title: 'Account Setup', value: '100', theme: 'success' },
  ]

  const colorSystemCards = [
    {
      id: 1,
      title: 'Primary',
      theme: 'primary',
      color: '#4e73df',
      textColor: 'white',
    },
    {
      id: 2,
      title: 'Success',
      theme: 'success',
      color: '#1cc88a',
      textColor: 'white',
    },
    {
      id: 3,
      title: 'Info',
      theme: 'info',
      color: '#36b9cc',
      textColor: 'white',
    },
    {
      id: 4,
      title: 'Warning',
      theme: 'warning',
      color: '#f6c23e',
      textColor: 'white',
    },
    {
      id: 5,
      title: 'Danger',
      theme: 'danger',
      color: '#e74a3b',
      textColor: 'white',
    },
    {
      id: 6,
      title: 'Secondary',
      theme: 'secondary',
      color: '#858796',
      textColor: 'white',
    },
    {
      id: 7,
      title: 'Light',
      theme: 'light',
      color: '#f8f9fc',
      textColor: 'black',
    },
    {
      id: 8,
      title: 'Dark',
      theme: 'dark',
      color: '#5a5c69',
      textColor: 'white',
    },
  ]
  return (
    <>
      {/* Begin Page Content */}
      <div className="container-fluid">
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <Link
            to="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50" /> Generate
            Report
          </Link>
        </div>
        {/* Content Row */}
        <div className="row">
          {cards.map((card) => {
            return <Card key={card.id} data={card}></Card>
          })}
        </div>

        <Canvas />

        {/* Content Row */}
        <div className="row">
          {/* Content Column */}
          <div className="col-lg-6 mb-4">
            {/* Project Card Example */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
              </div>
              <div className="card-body">
                {projectCards.map((card) => {
                  return <ProjectCard key={card.id} data={card} />
                })}
              </div>
            </div>
            {/* Color System */}
            <div className="row">
              {colorSystemCards.map((card) => {
                return <ColorSystem key={card.id} data={card} />
              })}
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            {/* Illustrations */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Illustrations
                </h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: '25rem' }}
                    src="img/undraw_posting_photo.svg"
                    alt="..."
                  />
                </div>
                <p>
                  Add some quality, svg illustrations to your project courtesy
                  of{' '}
                  <Link target="_blank" rel="nofollow" to="https://undraw.co/">
                    unDraw
                  </Link>
                  , a constantly updated collection of beautiful svg images that
                  you can use completely free and without attribution!
                </p>
                <Link target="_blank" rel="nofollow" to="https://undraw.co/">
                  Browse Illustrations on unDraw →
                </Link>
              </div>
            </div>
            {/* Approach */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Development Approach
                </h6>
              </div>
              <div className="card-body">
                <p>
                  SB Admin 2 makes extensive use of Bootstrap 4 utility classes
                  in order to reduce CSS bloat and poor page performance. Custom
                  CSS classes are used to create custom components and custom
                  utility classes.
                </p>
                <p className="mb-0">
                  Before working with this theme, you should become familiar
                  with the Bootstrap framework, especially the utility classes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.container-fluid */}
    </>
  )
}

export default Dashboard
