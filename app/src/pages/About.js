import React from 'react'
import s from '../css/about.module.css'
import Layout from '../Layout/Layout.js'

const About = () => {
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>VBHARAT</title>
            <Layout>
                {/* Navbar */}
                <br /> <br />
                <section className={s.about_section}>
                    <img src="media/KEDARNATH_TEMPLE.png" alt="About Us" className="about_image" />
                    <div className={s.about_text}>
                        <h3>About Us</h3>
                        <br />
                        <br />
                        <h1>We're on a Mission to Change  View
                            <br />
                            of Monuments/Temples.</h1>
                        <br />
                        <br />
                        <p>At  VBHARAT,  we aim to connect people with the spiritual heart of India, making pilgrimages more accessible than ever before. We believe that experiencing the divine should not be limited by geography or physical travel constraints. Our virtual tours offer a holistic way to explore, understand, and appreciate the heritage and spiritual essence of India’s temples, shrines, and holy places.</p>
                    </div>
                </section>
                {/* Border */}
                <div className={s.section_border} />
                <br />
                <br /> <br /> 
                <section className={s.what_we_offer}>
                    <h2>What We Offer</h2><br />
                    <p>We bring the power of technology to spirituality, allowing users to:</p>
                    <ul>
                        <li>
                            <strong>Virtually tour iconic pilgrimage sites:</strong>
                            Experience the magnificence of temples, ghats, and shrines through high-quality, immersive 360° virtual tours.
                        </li>
                        <li>
                            <strong>Learn about history and traditions:</strong>
                            Dive deep into the stories, rituals, and legends that make each location a spiritual gem.
                        </li>
                        <li>
                            <strong>Explore maps and routes:</strong>
                            Navigate the paths of famous pilgrimage circuits and discover lesser-known hidden gems with ease.
                        </li>
                        <li>
                            <strong>Plan your future journeys:</strong>
                            Use our comprehensive guides and recommendations to plan your future trips when you're ready to travel in person.
                        </li>
                    </ul>
                </section>
                <br />
                <section className={s.why_choose_us}>
                    <h2>Why Choose Us?</h2> <br /> <br />
                    <ul>
                        <li><strong>Authentic Experiences:</strong>
                            Our team collaborates with historians, priests, and local guides to provide authentic and spiritually enriching virtual tours.
                        </li><li><strong>Cultural Preservation:</strong>We are dedicated to preserving India's spiritual heritage, highlighting the beauty and cultural significance of these sacred sites.</li>
                        <li><strong>Accessible for Everyone:</strong>We are dedicated to preserving India's spiritual heritage, showcasing the beauty and cultural depth of these sacred sites.
                        </li>
                    </ul>
                    <p>We invite you to embark on a virtual journey of discovery and spiritual growth, as we bring the divine beauty of India’s pilgrimages closer to you.</p><br />
                </section>
                <br />
                <br />
                <br />
                <br />
                <section className={s.expertise_section}>
                    <p className={s.expertise_text}>Expertise is Here</p><br />
                    <h2 className={s.exclusive_team}>Our Exclusive Team</h2>
                </section>
                <br />
                <section className={s.team_section}>
                    <div className={s.team_member}>
                        <div className={s.circle}>
                            <img src="media/ANSH_IMG.png" alt="Team Member 1" />
                            <div className={s.share_button}>
                                CONNECT
                                <div className={s.social_icons}>
                                    <a href="#" className={s.social_link}>LinkedIn</a>
                                    <a href="#" className={s.social_link}>Instagram</a>
                                    <a href="#" className={s.social_link}>Facebook</a>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <p>ANSH SINGH</p>
                    </div>
                    <div className={s.team_member}>
                        <div className={s.circle}>
                            <img src="media/teammember_image.jpg" alt="Team Member 2" />
                            <div className={s.share_button}>
                                CONNECT
                                <div className={s.social_icons}>
                                    <a href="#" className={s.social_link}>LinkedIn</a>
                                    <a href="#" className={s.social_link}>Instagram</a>
                                    <a href="#" className={s.social_link}>Facebook</a>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <p>ADARSH SINGH</p>
                    </div>
                    <div className={s.team_member}>
                        <div className={s.circle}>
                            <img src="media/KRISHNA_IMG.png" alt="Team Member 3" />
                            <div className={s.share_button}>
                                CONNECT
                                <div className={s.social_icons}>
                                    <a href="#" className={s.social_link}>LinkedIn</a>
                                    <a href="#" className={s.social_link}>Instagram</a>
                                    <a href="#" className={s.social_link}>Facebook</a>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <p>KRISHNA SHUKLA
                        </p>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <section className={s.newsletter_section}>
                    <div className={s.newsletter_text}>
                        <h1>Sign up for newsletter</h1><br />
                        <p>Get the latest news and updates</p>
                    </div>
                    <div className={s.newsletter_form}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* Footer Section */}

            </Layout>
        </div>


    )
}

export default About