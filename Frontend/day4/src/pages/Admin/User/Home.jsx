import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome,faArrowRight,faVideo,faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import {faInstagram,faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons';
import '../../../assets/Design/Home.css';

const Home = () => {
  return (
    <div>
        <nav>
            <div className="logo">
                <h1>Moksha <br/> Yoga</h1>
            </div>
            <div className="menu_list">
                <ul>
                    <li><a>Login</a></li>
                    <li><a>Signup</a></li>

                </ul>
            </div>
        </nav>
        

        <section id='container' className='center_items'>
            <div className='container_text'>
                <h1>Now it is the perfect time to start your yoga journey</h1>
                <button><a>Free 14 day trial</a></button>
            </div>
        </section>

        <section className="information">
            <h1>Practice anytime, anywhere</h1>
            <div className='information_container'>
                <div className='info_card center_items'>
                <FontAwesomeIcon icon={faHome} />
                <h3>Yoga on demand</h3>
                <p>Enjoy  a catalogues of online classes and practice from  the comfort of your own home</p>
                <button className='practice_btn'><a>Start now</a> <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>

                <div className='info_card center_items'>
                <FontAwesomeIcon icon={faVideo} />
                <h3>Live yoga on zoom</h3>
                <p>Stay connected and interact with teacher and other members in real time with stream schedule</p>
                <button className='practice_btn'><a>Book now</a> <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>

                <div className='info_card center_items'>
                <FontAwesomeIcon icon={faPeopleGroup} />
                <h3>In class Yoga</h3>
                <p>Our studio offers a widevariety of classes at all times of day to fit your schedule</p>
                <button className='practice_btn'><a>View classes</a> <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </section>

        <section id='teachers_container'>
            <div className='illustration'></div>
                <div className='teachers_text  center_items'>
                      <h1>Skilled teachers in all levels</h1>
                     <p>Our yoga academy is proud to have a team of highly skilled and passionate teachers who are dedicated to guiding you on your yoga journey. From Ashtanga to Vinyasa, our instructors bring a wealth of experience and expertise to each class.</p>
                    <button className='practice_btn'><a>Meet our Teachers</a></button>
                </div>
            
        </section>

        <section className='information'>
            <h1>Unique pricing plans</h1>
            <div className='information_container'>
                <div className='info_card price_card' id='class_plan'>
                    <h2 className='price_title'>pay per class Yoga</h2>
                    <ul>
                        <li>$8/class</li>
                        <li>All levels</li>
                        <li>All class types</li>
                        <li>Upgrade anytime</li>
                    </ul>
                    <button className='price_btn'><a>Start free trial</a></button>
                </div>

                <div className='info_card price_card' id='monthly_plan'>
                    <h2 className='price_title'>pay per class Yoga</h2>
                    <ul>
                        <li>$40/monthly</li>
                        <li>All levels</li>
                        <li>All class types</li>
                        <li>Cancel anytime</li>
                    </ul>
                    <button className='price_btn'><a>Start free trial</a></button>
                </div>

                <div className='info_card price_card' id='yearly_plan'>
                    <h2 className='price_title'>pay per class Yoga</h2>
                    <ul>
                        <li>$400/year</li>
                        <li>All levels</li>
                        <li>All class types</li>
                        <li>Charged yearly</li>
                    </ul>
                    <button className='price_btn'><a>Start free trial</a></button>
                </div>
            </div>
        </section>

        <section id='subscribe' className='center_items'>
            {/* <img src="lotus.jpg"  /> */}
            <h1>Join our Mailing list</h1>
            <p>Sign up now for  tips, ideas and get free class on us when you refer a friend.</p>
            <form>
                <input type='email' placeholder='Email Address'></input>  
                <button type='submit'>Subscribe now</button>
            </form>
        </section>

        <section id='foot'>
            <div className='foot_col'>
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Book a class</li>
                </ul>
            </div>

            <div className='foot_col'>
                <ul>
                    <li>Private Policy</li>
                    <li>Refund Policy</li>
                    <li>Terms & Condition</li>
                </ul>
            </div>

            <div className='foot_col'>
                <ul>
                    <li>Send an E-gift</li>
                    <li>Teachers</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div className='foot_col social'>
                <ul>
                    <li><FontAwesomeIcon icon={faInstagram} /> </li>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                </ul>
            </div>
            </section>
    </div>
  )
}

export default Home