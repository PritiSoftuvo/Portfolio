import React from 'react'
import Header from './Header'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

import { Link } from 'react-router-dom'

function Home() {
  const projects = [
    {
      title: 'E-Commerce website using Redux',
      description:
        'A modern UI for an e-commerce platform with product filtering and cart functionality.',
      techStack: 'React | Redux | CSS',
      image: 'src/assets/1519369-1583942052055_02.jpg',
      codeLink: '',
      liveLink: '',
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio showcasing skills, projects, and contact form.',
      techStack: 'React | HTML | CSS',
      image: 'src/assets/1519369-1583942052055_02.jpg',
      codeLink: '',
      liveLink: '',
    },
    {
      title: 'ToDo App',
      description:
        'A simple ToDo app with CRUD operations and localStorage support.',
      techStack: 'React | useState | localStorage',
      image: 'src/assets/todo-app.png',
      codeLink: '',
      liveLink: '',
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather forecast using OpenWeatherMap API.',
      techStack: 'React | API | Bootstrap',
      image: 'src/assets/Weather.png',
      codeLink: '',
      liveLink: '',
    },
    {
      title: 'Blog Website',
      description:
        'A fully responsive blog site with post creation and comments.',
      techStack: 'React | Firebase | Tailwind CSS',
      image:
        'src/assets/Light-Beige-Sleek-and-Simple-Blogger-Personal-Website-1024x576.jpg',
      codeLink: '',
      liveLink: '',
    },
    {
      title: 'Recipe Finder',
      description: 'Search your favorite recipes using an external food API.',
      techStack: 'React | Axios | CSS',
      image: 'src/assets/mfr1.png',
      codeLink: '',
      liveLink: '',
    },
  ]

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />

      {/* Profile Section */}
      <div
        id="home"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '60px',
          flexWrap: 'wrap',
          padding: '140px 20px 80px',
          backgroundColor: '#f5f5f5',
        }}>
        {/* Left Side Content */}
        <div style={{ maxWidth: '500px' }}>
          <h1
            style={{
              fontSize: '2.8rem',
              fontWeight: '800',
              marginBottom: '20px',
            }}>
            Front-End React Developer
          </h1>
          <p
            style={{ fontSize: '1.2rem', color: '#444', marginBottom: '30px' }}>
            Hi, I'm <strong>Priti Sharma</strong>, a passionate React developer
            based in Chandigarh.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="https://in.linkedin.com/">
              <LinkedInIcon style={{ fontSize: '36px', color: '#0A66C2' }} />
            </Link>
            <Link to="https://github.com/">
              <GitHubIcon style={{ fontSize: '36px', color: '#333' }} />
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div
          style={{
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid #1976d2',
            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
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
          backgroundColor: '#fff',
          padding: '50px 0',
          marginTop: '50px',
        }}>
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            fontSize: '2rem',
          }}>
          Tech Stack
        </h2>
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            overflowX: 'auto',
            padding: '0 20px',
          }}>
          {[
            'src/assets/images.png',
            'src/assets/download.jpeg',
            'src/assets/java-script-js-logo-png_seeklogo-303341 (1).png',
            'src/assets/524-5245981_react-js-logo-png-transparent-png-download.png',
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Tech"
              style={{
                height: '60px',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.15)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            />
          ))}
        </div>
      </div>

      {/* About Section start */}
      <div
        id="about"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '150px',
          marginTop: '120px',
          flexWrap: 'wrap',
          padding: '0 20px',
        }}>
        {/* Image */}
        <div
          style={{
            height: '250px',
            width: '300px',
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            flexShrink: 0,
          }}>
          <img
            src="src/assets/header_4dc9321b-f608-4196-9fb7-02f6c0029a5f.webp"
            alt="About Me"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Text */}
        <div style={{ maxWidth: '500px' }}>
          <h4 style={{ color: 'skyblue', fontWeight: 'bold' }}>ABOUT ME</h4>
          <h2
            style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>
            A dedicated Front-End Developer based in Chandigarh
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555' }}>
            I specialize in building responsive and dynamic web apps using React
            JS. I'm passionate about creating clean and user-friendly
            experiences.
          </p>
        </div>
      </div>

      {/* ABout section end */}

      {/* Projects Section start */}
      <section
        id="projects"
        style={{
          padding: '100px 20px',
          backgroundColor: '#f9f9f9',
        }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '60px',
          }}>
          Projects
        </h2>

        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '200px',
              flexWrap: 'wrap',
              marginBottom: '80px',
            }}>
            {/* Project Image */}
            <div>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '320px',
                  height: '230px',
                  borderRadius: '12px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                }}
              />
            </div>

            {/* Project Details */}
            <div style={{ maxWidth: '500px' }}>
              <h2
                style={{
                  fontSize: '1.6rem',
                  marginBottom: '15px',
                  color: '#333',
                }}>
                {project.title}
              </h2>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>
                {project.description}
              </p>
              <div style={{ margin: '20px 0', color: '#777' }}>
                {project.techStack}
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link to={project.codeLink}>
                  <div
                    style={{
                      padding: '10px 15px',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      cursor: 'pointer',
                    }}>
                    Code <GitHubIcon />
                  </div>
                </Link>
                <Link to={project.liveLink}>
                  <div
                    style={{
                      padding: '10px 15px',
                      backgroundColor: '#1976d2',
                      color: '#fff',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      cursor: 'pointer',
                    }}>
                    Live Demo <AddToHomeScreenIcon />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section
        id="contact"
        style={{
          marginTop: '60px',
          padding: '40px 20px',
          backgroundColor: '#f9f9f9',
        }}>
        <h1
          style={{
            color: 'skyblue',
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '30px',
          }}>
          Contact Me
        </h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            flexWrap: 'wrap',
          }}>
          {/* Location Card */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '20px 30px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              textAlign: 'center',
              minWidth: '250px',
            }}>
            <LocationOnIcon
              style={{
                fontSize: '2rem',
                color: 'skyblue',
                marginBottom: '10px',
              }}
            />
            <p style={{ fontSize: '1rem', color: '#444' }}>Chandigarh, India</p>
          </div>

          {/* Email Card */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '20px 30px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              textAlign: 'center',
              minWidth: '250px',
            }}>
            <EmailIcon
              style={{
                fontSize: '2rem',
                color: 'skyblue',
                marginBottom: '10px',
              }}
            />
            <p style={{ fontSize: '1rem', color: '#444' }}>
              yourname@example.com
            </p>
          </div>

          {/* phoneNumber Card */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '20px 30px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              textAlign: 'center',
              minWidth: '250px',
            }}>
            <PhoneIcon
              style={{
                fontSize: '2rem',
                color: 'skyblue',
                marginBottom: '10px',
              }}
            />
            <p style={{ fontSize: '1rem', color: '#444' }}>9780123456</p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px',
          }}>
          {/* LinkedIn Card */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '20px 30px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              textAlign: 'center',
              maxWidth: '350px',
            }}>
            <LinkedInIcon
              style={{
                fontSize: '2rem',
                color: 'skyblue',
                marginBottom: '10px',
              }}
            />
            <p style={{ fontSize: '1rem', color: '#444' }}>
              https://in.linkedin.com/
            </p>
          </div>
        </div>

        {/* <div>
          <h1>Get in touch</h1>
          <form>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField 
              id="outlined-basic"
              label=" LastName"
              variant="outlined"
            />

            <TextField id="outlined-basic" label="Email" variant="outlined" />

            <TextField id="outlined-basic" label="Message" variant="outlined" />
            <Button variant="outlined">Submit</Button>
          </form>
        </div> */}
      </section>
    </div>
  )
}

export default Home
