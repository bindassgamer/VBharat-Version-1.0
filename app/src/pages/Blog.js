import React from 'react'
import Layout from '../Layout/Layout.js';
import style from '../css/blog.module.css';

const Blog = () => {
    return (
        <div>
            <Layout>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>VBHARAT</title>
            {/* Navbar */}
            <div className={style.container1}>
                <div className={style.image_block}>
                    <img src="media/GOLDEN_TEMPLE.png" alt="Temple Image 1" />
                    <div className={style.orange_square}>15<br />Aug</div>
                    <p className={style.temple_name}><strong>DARBAR SAHIB</strong> </p><br />
                    <p className={style.temple_description}><strong>A Complete Travel Guide</strong></p><br />
                    <a href="blog-details.html" className={style.read_more}>Read more ➔</a><br />
                </div>
                <div className={style.image_block}>
                    <img src="media/KEDARNATH_TEMPLE.png" alt="Temple Image 2" />
                    <div className={style.orange_square}>13<br />Aug</div>
                    <p className={style.temple_name}>Temple Name 2</p><br />
                    <p className={style.temple_description}><strong>The temple description goes here.</strong></p><br />
                    <a href="BLOG-KEDARNATH.HTML" className={style.read_more}>Read more ➔</a>
                    <br />
                </div>
                <div className={style.categories_block}>
                    <h2 className={style.categories_heading}>CATEGORIES</h2><br /><br />
                    <div className={style.category}>
                        <span>Temple</span> <span>2</span>
                    </div><br />
                    <div className={style.category}>
                        <span>Mosque</span> <span>2</span>
                    </div><br />
                    <div className={style.category}>
                        <span>Church</span> <span>2</span>
                    </div><br />
                    <div className={style.category}>
                        <span>Gurudwara</span> <span>2</span>
                    </div><br />
                    <div className={style.category}>
                        <span>Shrine</span> <span>2</span>
                    </div><br />
                </div>
            </div>
            <div className={style.container2}>
                <div className={style.image_blocks}>
                    <div className={style.image_frame}>
                        <img src="media/KEDARNATH_TEMPLE.png" alt="Temple Image 1" />
                        <div className={style.orange_square}>13<br />Aug</div>
                        <div className={style.temple_details}>
                            <p className={style.temple_name}> RAM MANDIR</p><br />
                            <p className={style.temple_description}>Kedarnath Mandir: A Complete Travel Guide</p><br />
                            <a href="#" className={style.read_more}>Read more ➔</a>
                        </div>
                    </div>
                    <div className={style.image_frame}>
                        <img src="media/KEDARNATH_TEMPLE.png" alt="Temple Image 2" />
                        <div className={style.orange_square}>13<br />Aug</div>
                        <div className={style.temple_details}>
                            <p className={style.temple_name}>Temple Name 2</p>
                            <p className={style.temple_description}>The temple description goes here.</p>
                            <a href="#" className={style.read_more}>Read more ➔</a>
                        </div>
                    </div>
                    <div className={style.image_frame}>
                        <img src="media/KEDARNATH_TEMPLE.png" alt="Temple Image 3" />
                        <div className={style.orange_square}>13<br />Aug</div>
                        <div className={style.temple_details}>
                            <p className={style.temple_name}>Temple Name 3</p>
                            <p className={style.temple_description}>The temple description goes here.</p>
                            <a href="#" className={style.read_more}>Read more ➔</a>
                        </div>
                    </div>
                    <div className={style.image_frame}>
                        <img src="media/KEDARNATH_TEMPLE.png" alt="Temple Image 4" />
                        <div className={style.orange_square}>13<br />Aug</div>
                        <div className={style.temple_details}>
                            <p className={style.temple_name}>Temple Name 4</p>
                            <p className={style.temple_description}>The temple description goes here.</p>
                            <a href="#" className={style.read_more}>Read more ➔</a>
                        </div>
                    </div>
                </div>
                <div className={style.video_block}>
                    <video autoPlay muted loop playsInline>
                        <source src="media/video2.mp4" type="video/mp4" />
                    </video>
                    <br /><br />
                    <span className={style.video_text}>VBHARAT BRINGS YOU JOY</span>
                </div>
            </div>
            <br /><br />
            <br /><br />
            <br />
            <div className={style.pagination}>
                <a href="#">&lt;&lt;</a>
                <a href="#" className={style.active}>1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&gt;&gt;</a>
            </div>
            <br /><br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section className={style.newsletter_section}>
                <div className={style.newsletter_text}>
                    <h1>Sign up for newsletter</h1><br />
                    <p>Get the latest news and updates</p>
                </div>
                <div className={style.newsletter_form}>
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
            {/* Footer Section */}
            
            </Layout>
            {/* Border Area */}
           
        </div>

    )
}

export default Blog