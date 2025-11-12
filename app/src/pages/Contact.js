import React from 'react'
import Layout from './../Layout/Layout';
import style from '../css/contact.module.css'

const Contact = () => {
    return (
        <div>
            <Layout>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>VBHARAT </title>           
            <br />
            <br />
            <br />
            <br />
            <section className={style.office_info}>
                <img src="media/contact1_image.jpg" alt="Office Image" className={style.office_image} />
                <div className={style.office_details}>
                    <h2>Office Information</h2><br /><br />
                    <br /><br />
                    <p>VBHARAT Virtual Pilgrimage<br /><br />MIRARAOAD- 401105</p>
                    <br />
                    <div className={style.contact}>
                        <img src="media/call_icon.png" alt="Call Icon" className="icon" /> 9324618958
                    </div>
                    <br />
                    <br /><br />
                    <br /><br />
                    <br />
                    <div className={style.social_icons}>
                        <a href="https://wa.me/" target="_blank"><img src="media/whatsapp_icon.png" alt="WhatsApp" className={style.social_icon} /></a>
                        <a href="https://www.facebook.com/" target="_blank"><img src="media/Facebook_logo_(square).png" alt="Facebook" className={style.social_icon} /></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src="media/instagram_contact.png" alt="Instagram" className={style.social_icon} /></a>
                        <a href="https://threads.com/" target="_blank"><img src="media/threads_logo.png" alt="Twitter" className={style.social_icon} /></a>
                        <a href="https://www.Twitter.com/" target="_blank"><img src="media/twitter_icon1.png" alt="Pinterest" className={style.social_icon} /></a>
                    </div>
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
            <section className={style.contact_section}>
                <div className={style.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15049.84683288044!2d72.81609734999999!3d19.435650550000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727923030398!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className={style.quick_contact}>
                    <h2>QUICK CONTACT</h2><br /><br />
                    <p>Contact for quick resolution of your doubts</p>
                    <form>
                        <div className={style.form_group}>
                            <div className={style.form_field}>
                                <label htmlFor="name">*Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" />
                            </div>
                            <div className={style.form_field}>
                                <label htmlFor="phone">*Phone</label>
                                <input type="text" id="phone" name="phone" placeholder="Your Phone" />
                            </div>
                        </div>
                        <label htmlFor="message">*Message</label>
                        <textarea id="message" name="message" placeholder="Your Message" defaultValue={""} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
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

export default Contact