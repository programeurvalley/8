import React from 'react'
import { Link } from 'react-router-dom'

// div.className.col-md-3+div.className.col-md-3+div.className.col-md-6
// div.container>div.row>div.col-md-6.widget*2

// Assets
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className='top-space' >
            <div className='footer1' >
                <div className='container'>
                    <div className="row">
                        <div className="col-md-3 widget">
                            <h3 className='widget-title'>Contact</h3>
                            <p className='widget-body' >
                                <a href="tel:+234 23 9087457" >+234 23 9087457</a>
                                <br/>
                                <a href="mailto:some.email@gomycode.com">some.email@gomycode.com</a>
                                <br/>
                                234 Hidden Prid Road , Ashland City , TN 37015
                            </p>
                        </div>
                        <div className="col-md-3 widget">
                            <h3 className='widget-title'>Follow Me</h3>
                            <p className='widget-body follow-me-icons'>
                                <a href='#' ><AiFillFacebook size={'4rem'} /></a>
                                <a href='#' ><AiFillTwitterCircle size={'4rem'} /></a>
                                <a href='#' ><AiFillInstagram size={'4rem'} /></a>
                            </p>
                        </div>
                        <div className="col-md-6 widget">
                            <h3 className='widget-title'>Text Widget</h3>
                            <div className="widget-body">
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aut quos, facilis magni deleniti perspiciatis dolor sit cumque culpa veniam maiores aliquid magnam recusandae! Hic sequi dolorum quisquam? Porro officia cupiditate ea eius laudantium impedit mollitia voluptatum doloremque facilis perferendis.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aut quos, facilis magni deleniti perspiciatis dolor sit cumque culpa veniam maiores aliquid magnam recusandae! Hic sequi dolorum quisquam? Porro officia cupiditate ea eius laudantium impedit mollitia voluptatum doloremque facilis perferendis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='footer2' >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 widget">
                            <p className='widget-body widget-simplenav'>
                                <Link to='/' >Home</Link>
                                <Link to='about'>About</Link>
                                <Link to='contact'>Contact</Link>
                                <Link to='signin' >Sign In</Link>
                            </p>
                        </div>
                        <div className="col-md-6 widget">
                            <div className='widget-body text-right'>
                                Copyright-&copy; 2014, Your name, Designed by <a href="#" rel="designer" >gettemplate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}
