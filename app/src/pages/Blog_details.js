import React from 'react'

const Blog_details = () => {
    return (
        <div>
            &lt;
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>VBHARAT</title>
            <link rel="stylesheet" href="blog-details.css" />
            <style dangerouslySetInnerHTML={{ __html: "\n       \n       .particle {\n                position: absolute; /* Allow absolute positioning */\n                width: 10px; /* Size of each particle */\n                height: 10px; /* Size of each particle */\n                background-color: #ffA550; /* Particle color */\n                border-radius: 50%; /* Make particles round */\n                animation: float 3s infinite; /* Floating animation */\n                \n            }\n    \n            @keyframes float {\n                0% {\n                    transform: translateY(0);\n                    opacity: 1; /* Fully visible */\n                }\n                100% {\n                    transform: translateY(-100%); /* Move to above the visible area */\n                    opacity: 0; /* Fade out */\n                }\n            }\n        " }} />
            {/* Navbar */}
            <nav className="navbar sticky">
                <div className="logo">
                    <a href="index.html">
                        <img src="media/LOGO.PNG" alt="VR Pilgrimage Logo" />
                    </a></div><a href="index.html">
                </a><ul className="nav-links"><a href="index.html">
                </a><li><a href="index.html" /><a href="index.html">Home</a></li>
                    <li><a href="pilgrimages.html">Pilgrimages</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <button className="login-btn" onclick="window.location.href='login.html'">Login</button> {/* Login button */}
                </ul>
                {/* Language Selection Button */}
                <div className="dropdown">
                    <button className="language-btn">Select Language</button>
                    <div className="dropdown-content">
                        <a href="?lang=en">English</a>
                        <a href="?lang=hi">Hindi</a>
                        <a href="?lang=es">Spanish</a>
                        <a href="?lang=fr">French</a>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="left-section">
                    <img src="media/GOLDEN_TEMPLE.png" alt="Description of Image" className="image-block" />
                    <div className="text-section">
                        <h1>DARBAR SAHIB GURUDWARA</h1><br /><br />
                        <p>The foundation for the gurudwara was laid in 1581 and the construction was completed in 1588. In 1604, a copy of the Adi Granth, the principal scripture of Sikhism, was placed inside the gurudwara by Guru Arjan, the fifth Guru of the Sikhs. At that time, the site was called the Ath Sath Tirath.
                            <br /> <br />
                            The Darbar Sahib, or Harmandir Sahib, is the focus of a complex of buildings that form the heart of Sikhism. The temple itself occupies a small island in the center of a tank, or pool, called the Amrita Saras (“Pool of Nectar”)—the source of the city’s name—and is connected to land on its west side by a marble causeway running across the pool. Situated facing the entrance to the causeway is the Akal Takht (“Throne of the Timeless One”), the chief center of authority of Sikhism and the headquarters of the Shiromani Akali Dal (Supreme Akali Party), the main political party of the Sikhs in Punjab. On the north side of the tank is the main entrance to the complex and the Teja Singh Samudri Hall (Clock Tower), which houses the main offices of the Shiromani Gurdwara Parbandhak Committee (Supreme Committee of Temple Management), which oversees the main Sikh gurdwaras. Among several buildings on the east side of the tank are the Assembly Hall and the Guru Ram Das Langar, the latter a large dining hall that serves meals to thousands of pilgrims and other visitors each day.
                            <br /><br />
                            The Golden Temple is an open house of worship for all people, from all walks of life and faiths, It has a square plan with four entrances, and a circumambulation path around the pool. The four entrances to the gurudwara symbolises the Sikh belief in equality and the Sikh view that all people are welcome into their holy place. The complex is a collection of buildings around the sanctum and the pool. One of these is Akal Takht, the chief centre of religious authority of Sikhism, Additional buildings include a clock tower, the offices of the Gurdwara Committee, a Museum and a langar, a free Sikh community-run kitchen that offers a vegetarian meal to all visitors without discrimination. Over 150,000 people visit the holy shrine everyday for worship.[ The gurdwara complex has been nominated as a UNESCO World Heritage Site, and its application is pending on the tentative list of UNESCO.
                        </p>
                    </div>
                </div>
                <div className="right-section">
                    {/* Particle divs will be generated here */}
                </div>
            </div>
            <div className="history-section">
                <br /> <h1>History</h1><br />
                <h4>
                    According to the Sikh historical records, the land that became Amritsar and houses the Harimandir Sahib was chosen by Guru Amar Das, the third Guru of the Sikh tradition. It was then called Guru Da Chakk, after he had asked his disciple Ram Das to find land to start a new town with a man-made pool as its central point. After Guru Ram Das succeeded Guru Amar Das in 1574, and in the face of hostile opposition from the sons of Guru Amar Das, Guru Ram Das founded the town that came to be known as "Ramdaspur". He started by completing the pool with the help of Baba Buddha (not to be confused with the Buddha of Buddhism). Guru Ram Das built his new official centre and home next to it. He invited merchants and artisans from other parts of India to settle in the new town with him.
                    A Sikh Guru (perhaps Guru Arjan) seated in the Golden Temple at Amritsar in the late 16th or early 17th century, c. 1830 Guler painting
                    Ramdaspur town expanded during the time of Guru Arjan financed by donations and constructed by voluntary work. The town grew to become the city of Amritsar, and the area grew into the temple complex. The construction activity between 1574 and 1604 is described in Mahima Prakash Vartak, a semi-historical Sikh hagiography text likely composed in 1741, and the earliest known document dealing with the lives of all the ten Gurus. Guru Arjan installed the scripture of Sikhism inside the new gurdwara in 1604. Continuing the efforts of Guru Ram Das, Guru Arjan established Amritsar as a primary Sikh pilgrimage destination. He wrote a voluminous amount of Sikh scripture including the popular Sukhmani Sahib. <br /><br />
                    Guru Ram Das acquired the land for the site. Two versions of stories exist on how he acquired this land. In one, based on a Gazetteer record, the land was purchased with Sikh donations of 700 rupees from the people and owners of the village of Tung. In another version, Emperor Akbar is stated to have donated the land to the wife of Guru Ram Das.
                    In 1581, Guru Arjan initiated the construction of the Gurdwara.[1] During the construction the pool was kept empty and dry. It took 8 years to complete the first version of the Harmandir Sahib. Guru Arjan planned a gurdwara at a level lower than the city to emphasise humility and the need to efface one's ego before entering the premises to meet the Guru.[1] He also demanded that the gurdwara compound be open on all sides to emphasise that it was open to all. The sanctum inside the pool where his Guru seat was, had only one bridge to emphasise that the end goal was one, states Arvind-Pal Singh Mandair.[1] In 1589, the gurdwara made with bricks was complete. Guru Arjan is believed by some later sources to have invited the Sufi saint Mian Mir of Lahore to lay its foundation stone, signalling pluralism and that the Sikh tradition welcomed all.[1] This belief is however unsubstantiated.[29][30] According to Sikh traditional sources such as Sri Gur Suraj Parkash Granth it was laid by Guru Arjan himself.[31] After the inauguration, the pool was filled with water. On 16 August 1604, Guru Arjan completed expanding and compiling the first version of the Sikh scripture and placed a copy of the Adi Granth in the gurdwara. He appointed Baba Buddha as the first Granthi.[32]
                    Ath Sath Tirath, which means "shrine of 68 pilgrimages", is a raised canopy on the parkarma (circumambulation marble path around the pool).[3][8][33] The name, as stated by W. Owen Cole and other scholars, reflects the belief that visiting this temple is equivalent to 68 Hindu pilgrimage sites in the Indian subcontinent, or that a Tirath to the Golden Temple has the efficacy of all 68 Tiraths combined.[34][35] The completion of the first version of the Golden Temple was a major milestone for Sikhism, states Arvind-Pal Singh Mandair, because it provided a central pilgrimage place and a rallying point for the Sikh community, set within a hub of trade and activity.[1]
                </h4>
            </div>
            <br /><br /><br /><br />
            <div className="text-section">
                <h1>GALLERY</h1>
                <div className="image-gallery">
                    {/* Top Row */}
                    <div className="image-row">
                        <img src="media/gt1.jpeg" alt="Image 1" className="thumbnail" onclick="openModal(this.src)" />
                        <img src="media/gt2.jpeg" alt="Image 2" className="thumbnail" onclick="openModal(this.src)" />
                        <img src="media/gt3.jpeg" alt="Image 3" className="thumbnail" onclick="openModal(this.src)" />
                        <img src="media/gt4.jpeg" alt="Image 4" className="thumbnail" onclick="openModal(this.src)" />
                    </div>
                    {/* Bottom Row */}
                    <div className="image-row">
                        <img src="media/gt5.jpeg" alt="Image 5" className="thumbnail" onclick="openModal(this.src)" />
                        <img src="media/gt6.jpeg" alt="Image 6" className="thumbnail" onclick="openModal(this.src)" />
                        <img src="media/gt7.jpeg" alt="Image 7" className="thumbnail" onclick="openModal(this.src)" />
                        <img src="media/gt8.jpeg" alt="Image 8" className="thumbnail" onclick="openModal(this.src)" />
                    </div>
                </div>
                {/* Modal for enlarged images */}
                <div className="modal" id="modal" onclick="closeModal()">
                    <img id="modalImage" src alt="Enlarged Image" />
                </div>
                <br /><br />
                <br /><br />
                <section className="newsletter-section">
                    <div className="newsletter-text">
                        <h1>Sign up for newsletter</h1><br />
                        <p>Get the latest news and updates</p>
                    </div>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </div>
                </section><br /><br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* Footer Section */}
                <footer className="footer">
                    <div className="footer-section quick-links">
                        <h3>Quick Links</h3>
                        <br />
                        <br />
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="blog.html">Blogs &amp; Articles</a></li>
                            <li><a href="term&con.html">Terms &amp; Conditions</a></li>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-section instagram">
                        <h3>Instagram</h3>
                        <br />
                        <br />
                        <div className="instagram-gallery">
                            <div className="instagram-image"><img src="media/download.jpeg" alt="Instagram Image 1" /></div>
                            <div className="instagram-image"><img src="media/GOLDEN_TEMPLE.png" alt="Instagram Image 2" /></div>
                            <div className="instagram-image"><img src="media/KEDARNATH_TEMPLE.png" alt="Instagram Image 3" /></div>
                            <div className="instagram-image"><img src="media/PREMMANDIR_IMAGE.jpg" alt="Instagram Image 4" /></div>
                            <div className="instagram-image"><img src="media/RAMMANDIR.webp" alt="Instagram Image 5" /></div>
                            <div className="instagram-image"><img src="media/TIRUPATIBALAJI_TEMPLE.jpg" alt="Instagram Image 6" /></div>
                        </div>
                    </div>
                    <div className="footer-section contact">
                        <h3>Contact Us</h3><br />
                        <br />
                        <p>SLRTCE Miraroad East - 400101</p><br />
                        <p>Adarsh.a.singh@slrtce.in</p><br />
                        <p>+91 9324618958</p>
                    </div>
                </footer>
                {/* Border Area */}
                <div className="border-area">
                    <div className="terms">
                        <a href="term&con.html">Terms of Use</a>  <a href="privacy-policy.html">Privacy Policy</a>
                    </div>
                    <div className="copyright">
                        2024 © All rights reserved by VBHARAT
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Blog_details