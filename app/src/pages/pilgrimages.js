import React from 'react'
import Layout from '../Layout/Layout'

const pilgrimages = () => {
  return (
    <div>
      <Layout>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VBHARAT</title>
        <link rel="stylesheet" href="pilgrimages.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <style dangerouslySetInnerHTML={{ __html: "\n  /* Style for the dropdown suggestions */\n  .dropdown-suggestions {\n      border: 1px solid #ccc;\n      max-height: 200px;\n      overflow-y: auto;\n      display: none; /* Hide initially */\n      position: absolute;\n      background: black;\n      z-index: 1; margin-top: 50px;\n      width: calc(100% - 900px); /* Adjust width to match the search bar */\n  }\n\n  .suggestion {\n      padding: 10px;\n      cursor: pointer;\n  }\n\n  .suggestion:hover {\n      background-color: gray; /* Highlight on hover */\n  }\n" }} />
        
        <div className="page-container">
          <div className="left-section">
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search-bar" id="search-bar" oninput="showSuggestions(this.value)" />
              <div id="suggestions" className="dropdown-suggestions" /> {/* Suggestions dropdown */}
              <br />
              <button className="search-button">Search</button>
            </div>
            <br /><br />
            <div className="results-info">
              <h1>SHOWING 14 RESULTS</h1>
              <div className="view-options">
                <button>
                  <i className="fas fa-th" />
                </button>
                <button>
                  <i className="fas fa-list" />
                </button>
              </div>
            </div>
            <div className="image-grid">
              {/* Repeat this block for 14 images */}
              <a href="DARBAR-SAHIB.HTML" className="image-block">
                <img src="media/GOLDEN_TEMPLE.png" alt="Temple Image" />
                <h2>DARBAR SAHIB</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              <a href="PREM_MANDIR.HTML" className="image-block">
                <img src="media/PREMMANDIR_IMAGE.jpg" alt="Temple Image" />
                <h2>PREM MANDIR</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              <a href="DARBAR-SAHIB.HTML" className="image-block">
                <img src="media/RAMMANDIR.webp" alt="Temple Image" />
                <h2>RAM MANDIR</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              <a href="DARBAR-SAHIB.HTML" className="image-block">
                <img src="media/KEDARNATH_TEMPLE.png" alt="Temple Image" />
                <h2>KEDARNATH MANDIR</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              <a href="DARBAR-SAHIB.HTML" className="image-block">
                <img src="media/babulnathtemple_image.jpg" alt="Temple Image" />
                <h2>BABULNATH MANDIR</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              <a href="DARBAR-SAHIB.HTML" className="image-block">
                <img src="media/JAGGANATHTEMPLE_IMAGE.webp" alt="Temple Image" />
                <h2>JAGGANATH MANDIR</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              <a href="DARBAR-SAHIB.HTML" className="image-block">
                <img src="media/TIRUPATIBALAJI_TEMPLE.jpg" alt="Temple Image" />
                <h2>TIRUPATIBALAJI MANDIR</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              <a href="DARBAR-SAHIB.HTML" className="image-block">
                <img src="media/GOLDEN_TEMPLE.png" alt="Temple Image" />
                <h2>GOLDEN TEMPLE</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              <a href="DARBAR-SAHIB.HTML" className="image-block">
                <img src="media/PREMMANDIR_IMAGE.jpg" alt="Temple Image" />
                <h2>PREM MANDIR</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              <a href="DARBAR-SAHIB.HTML" className="image-block">
                <img src="media/RAMMANDIR.webp" alt="Temple Image" />
                <h2>RAM MANDIR</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              <a href="DARBAR-SAHIB.HTML" className="image-block">
                <img src="media/KEDARNATH_TEMPLE.png" alt="Temple Image" />
                <h2>KEDARNATH MANDIR</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              <a href="DARBAR-SAHIB.HTML" className="image-block">
                <img src="media/TIRUPATIBALAJI_TEMPLE.jpg" alt="Temple Image" />
                <h2>TIRUPATI MANDIR</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              <a href="DARBAR-SAHIB.HTML" className="image-block">
                <img src="media/JAGGANATHTEMPLE_IMAGE.webp" alt="Temple Image" />
                <h2>JAGGANATH MANDIR</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              <a href="DARBAR-SAHIB.HTML" className="image-block">
                <img src="media/babulnathtemple_image.jpg" alt="Temple Image" />
                <h2>BABULNATH MANDIR</h2><br />
                <p className="text-color"><i className="fas fa-map-marker-alt" /> JVCG+2J2, Golden Temple Way, Town Hall, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab-143006</p>
              </a>
              {/* ... other image blocks ... */}
            </div>
          </div>
          <div className="right-section">
            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15049.84683288044!2d72.81609734999999!3d19.435650550000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727961915755!5m2!1sen!2sin" width={500} height={680} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
        <br /><br />
      </div>
      </Layout>

    </div>
  )
}

export default pilgrimages


