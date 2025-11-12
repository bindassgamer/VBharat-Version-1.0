import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout.js';
const Index = () => {
  return (
    <div>
      <Layout>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VBHARAT</title>
        <link rel="stylesheet" href="/styles.css" />


        <section className="full-bg">
          <div className="text-overlay">
            <h2>A journey becomes a pilgrimage
              <br /> we discover, day by day</h2>
          </div>
        </section>
        <section className="video-container">
          <video autoPlay muted loop playsInline>
            <source src="media/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">EXPERIENCE VIRTUAL REALITY</div>
        </section>
        <div className="text-background">
          <div className="text-container">
            <p className="small-text">Most Visited</p>
            <br />
            <p className="large-text">Religious Places</p>
          </div>
        </div>
        {/* Block Section */}
        <section className="block-section">
          <div className="block">
            <Link to="/pilgrimages"><img src="/media/GOLDEN_TEMPLE.png" alt="Place 1" /></Link>
            <div className="block-text">
              <h3>Darbar Sahib</h3>
              <p>Amritsar, Punjab</p>
            </div>
          </div>
          <div className="block">
            <Link to="/pilgrimages"><img src="media/KEDARNATH_TEMPLE.png" alt="Place 2" /></Link>
            <div className="block-text">
              <h3>Kedarnath Mandir</h3>
              <p> Rudraprayag, Uttarakhand</p>
            </div>
          </div>
          <div className="block">
            <Link to="/pilgrimages"><img src="media/PREMMANDIR_IMAGE.jpg" alt="Place 1" /></Link>
            <div className="block-text">
              <h3>Prem Mandir</h3>
              <p>Mathura-Vrindavan, Uttar Pradesh</p>
            </div>
          </div>
          <div className="block">
            <Link to="/pilgrimages"><img src="media/TIRUPATIBALAJI_TEMPLE.jpg" alt="Place 1" /></Link>
            <div className="block-text">
              <h3>Tirupati Balaji Mandir</h3>
              <p>Chitroor, Andhrapradesh</p>
            </div>
          </div>
          <div className="block">
            <Link to="/pilgrimages"><img src="media/JAGGANATHTEMPLE_IMAGE.webp" alt="Place 1" /></Link>
            <div className="block-text">
              <h3>Jagganath Mandir</h3>
              <p>Puri, Odisha</p>
            </div>
          </div>
          <div className="block">
            <Link to="/pilgrimages"><img src="media/RAMMANDIR.webp" alt="Place 1" /></Link>
            <div className="block-text">
              <h3>Ram Mandir</h3>
              <p>Ayodhya, Uttar Pradesh</p>
            </div>
          </div>
        </section>
        {/* View All Locations Button */}
        <div className="view-all-button">
          <Link to="/pilgrimages"><button>View All Locations</button></Link>
        </div>
        {/* Border */}
        <div className="section-border" />
        {/* Who We Are Section */}
        <section className="who-we-are-section">
          <div className="left-image">
            <img src="media/about2.png" alt="Description of Image" />
          </div>
          <div className="right-content">
            <p className="who-we-are-title"># WHO WE ARE</p><br />
            <h3 className="who-we-are-heading">We are Offering The Best immersive experience for all Pilgrimages</h3>
            <br /><p className="who-we-are-description">Experience places in a smarter way with Virtual reality,
              Explore the future at your home with all details and a seamless experience.</p>
            <Link to="/contact" className="contact-button">Connect With Us</Link>
          </div>
        </section>
        {/* Border */}
        <div className="section-border" />
        {/* Top Areas Section */}
        <div className="top-areas-section">
          <p className="top-areas-title">Top Areas</p>
          <h2 className="find-temples-heading">Find Temples in Your Neighborhood</h2>
        </div>
        {/* Border */}
        <div className="section-border" />
        {/* Image Blocks Section */}
        <div className="image-blocks-section">
          <div className="image-block">
            <img src="media/REDFORT_IMAGE.png" alt="Image 1" />
            <div className="text-overlay">
              <p>Delhi</p>
              <Link to="/pilgrimages" className="location-button">5 Locations</Link>
            </div>
          </div>
          <div className="image-block">
            <img src="media/MUMBAI_IMAGE.jpeg" alt="Image 2" />
            <div className="text-overlay">
              <p>Mumbai</p>
              <Link to="pilgrimages" className="location-button">7 Locations</Link>
            </div>
          </div>
          <div className="image-block">
            <img src="media/PREMMANDIR_IMAGE.jpg" alt="Image 3" />
            <div className="text-overlay">
              <p>Mathura</p>
              <Link to="pilgrimages" className="location-button">11 Locations</Link>
            </div>
          </div>
          <div className="image-block wide-block-33">
            <img src="media/GOLDEN_TEMPLE.png" alt="Image 4" />
            <div className="text-overlay">
              <p>Punjab</p>
              <Link to="pilgrimages" className="location-button">4 Locations</Link>
            </div>
          </div>
          <div className="image-block wide-block-67" id="full-width">
            <img src="media/Varanasi_image.jpg" alt="Image 5" />
            <div className="text-overlay">
              <p>Varanasi</p>
              <Link to="pilgrimages" className="location-button">8 Locations</Link>
            </div>
          </div>
        </div>
        {/* Border */}
        <div className="section-border" />
        {/* Background Section */}
        <div className="background-section">
          <div className="left-image">
            <img src="media/banner5.png" alt="Left Image" />
          </div>
          <div className="text-content">
            <h2>We're Providing the Best Virtual Reality Experience</h2>
            <p className="light-text">Explore places in VR. A smart way to visit any place and experience using virtual reality.</p>
            <br />
            <br />
            <div className="contact-info">
              <div className="info-item">
                <img src="media/call_icon.png" alt="Phone" className="icon" />
                <span>9324618958</span>
              </div>
              <br />
              <div className="info-item">
                <img src="media/email_icon.png" alt="Email" className="icon" />
                <span>Adarsh.a.singh@slrtce.in</span>
              </div>
            </div>
            <Link to="/contact" className="contact-button">Contact Us</Link>
          </div>
          <div className="right-image">
            <img src="media/banner4.png" alt="Right Image" />
          </div>
        </div>
        {/* Footer Section */}
      </Layout>
      {/* Border Area */}
    </div>

  )
}

export default Index
