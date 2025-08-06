import React from 'react'
import Header from './Header'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />

      {/* Profile Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '50px',
          maxWidth: '700px',
          margin: '200px auto 40px auto',
          padding: '20px',
        }}>
        {/* Left Content */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h1
            style={{
              fontSize: '2.5rem',
              marginBottom: '10px',
              fontWeight: '1000',
            }}>
            Front-End React Developer
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#555',
              marginBottom: '20px',
              lineHeight: '1.5',
            }}>
            Hi, I'm <strong>Priti Sharma</strong>, a passionate Frontend React
            Developer based in Chandigarh.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="https://in.linkedin.com/">
              {' '}
              <LinkedInIcon
                style={{
                  fontSize: '32px',
                  color: '#0A66C2',
                  cursor: 'pointer',
                }}
              />
            </Link>
            <Link to="https://github.com/">
              <GitHubIcon
                style={{ fontSize: '32px', color: '#333', cursor: 'pointer' }}
              />
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div
          style={{
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid #ccc',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}>
          <img
            src="src/assets/image-NjMATqJD0yKbp1dl1nkO55BUX8qAVA.webp"
            alt="Priti Sharma"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div
        style={{
          width: '100%',
          padding: '30px 0',
          background: '#f9f9f9',
          marginTop: '100px',
        }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}>
          <h2 style={{ marginLeft: 250, whiteSpace: 'nowrap' }}>Tech Stack</h2>
          <img
            src="src/assets/images.png"
            alt="React"
            style={{ height: '50px', transition: 'transform 0.4s ease-in-out' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)' // zoom in
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)' // zoom out
            }}
          />
          <img
            src="src/assets/download.jpeg"
            alt="HTML"
            style={{ height: '50px', transition: 'transform 0.4s ease-in-out' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)' // zoom in
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)' // zoom out
            }}
          />
          <img
            src="src/assets/java-script-js-logo-png_seeklogo-303341 (1).png"
            alt="JS"
            style={{ height: '50px', transition: 'transform 0.4s ease-in-out' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)' // zoom in
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)' // zoom out
            }}
          />
          <img
            src="src/assets/524-5245981_react-js-logo-png-transparent-png-download.png"
            alt="CSS"
            style={{ height: '50px', transition: 'transform 0.4s ease-in-out' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)' // zoom in
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)' // zoom out
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
