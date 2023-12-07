import { TiTick } from "react-icons/ti"
import './About.css'

const About = () => (
    <div className="main-container text-white">
        <div className="about-container text-white">
            <h1 className="about-title">ABOUT</h1>
        </div>
        <div className="register-container">
            <div className="details-details">
                <h1 className=" about-us-title "><span className="abuot-span">ABOUT</span> US</h1>
                <p className="text-white about-desecrption">Ak Technologies is a leading software training provider in India.
                    We partner with companies and individuals imparting training and
                    coaching which helps working professionals achieve their career goals.
                    We are committed to student success.</p>
                <div>
                    <h2 className="our-goal-title"><TiTick className="icons" />OUR GOAL</h2>
                    <p className="text-white our-goal-desecrption">
                        Aligning training programs to suit business needs. thereby enabling organisations to have a
                        skilled workforce that can cater to the evolving and dynamic needs of their customers.<b />
                        Focus on equipping individual learners with best in class skills to enable them start
                        and have a successful career in the IT sector.

                    </p>
                </div>
                <div>
                    <h2 className=" our-goal-title"><TiTick className="icons" />WHO'S HEADING?</h2>
                    <p className="text-white our-goal-desecrption">
                        Our well trained professionals who has decades of corporate experience!
                    </p>
                </div>
                <div>
                    <h2 className="our-goal-title"><TiTick className="icons" />APPROACH</h2>
                    <p className="text-white our-goal-desecrption">
                        Clearly understanding student needs and aspirations Use of orientation tools for skill assessment
                        baselining, Design training program leveraging the above, Interactive training to ensure students
                        maximize the learning opportunity, Continuous monitoring of progress and periodic feedback to students,
                        Final assessment and certification

                    </p>
                </div>
            </div>
            <form className="regist-form-container">
                <h1 className="enroll-title"><span className="enroll-span">Enroll</span> Now </h1>
                <input type="text" placeholder="Full Name" className="input-bar" />
                <input type="text" placeholder="Email Id" className="input-bar" />
                <input type="text" placeholder="Phone Number" className="input-bar" />
                <div className="select-container">
                    <label htmlFor="course">Course <span className="start">*</span></label>
                    <select className="select-bar" id ="course" >
                        <option>Please Select</option>
                        <option>Manual Testing</option>
                        <option>SDET</option>
                        <option>Selenium With Java</option>
                        <option>Selenium With Python</option>
                        <option>API Testing</option>
                        <option>Python</option>
                        <option>SQL Concepts</option>
                        <option>Data Science</option>
                        <option>Java</option>
                        <option>Metaverse</option>
                        <option>Data Analytics</option>
                        <option>Compus-2-Corporate</option>
                        <option>.Net Training</option>
                        <option>DevOps</option>
                        <option>Academic Project Training</option>
                    </select>
                </div>
                <div className="select-container">
                    <label htmlFor="timings">Preferred Timings <span className="start">*</span> </label>
                    <select className="select-bar" id="timings" >
                        <option>Please Select</option>
                        <option>Morning</option>
                        <option>Evening</option>
                    </select>
                </div>
                <div className="select-container">
                    <label htmlFor="type">Training Type <span className="start">*</span></label>
                    <select className="select-bar" id= "type" >
                        <option>Please Select</option>
                        <option>Online Weekdays / Regular</option>
                        <option>Online Weekends</option>
                        <option>Online Fast-track</option>
                        <option>Classroom Training</option>
                        <option>Classroom Training Weekends</option>
                        <option>Classroom Training Fast-track</option>
                    </select>
                </div>
                <div className="select-container">
                    <label htmlFor="message">Message</label>
                    <textarea rows={4} cols={45} className="message-bar" id="message" ></textarea>
                </div>
                <div className="checkbox-container">
                    <div className="checkbox">
                    <div className="check"></div>
                    <label>I am human</label>
                    </div>   
                </div>
                <button className="register-button">Register</button>
            </form>
        </div>
    </div>


)

export default About