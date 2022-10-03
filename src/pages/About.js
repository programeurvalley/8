import React from 'react'
import Content from '../components/about/Content'
import Sidebar from '../components/about/Sidebar'
import { Link } from 'react-router-dom'

export default function About(props) {

    return (
        <>
            <div className='container'>
                <ol className='breadcrumb'style={{marginTop : "100px", backgroundColor : 'white'}}>
                        <li><Link to='/'>Home</Link></li>
                        <li>About</li>
                </ol>
                
                <div className='row'>
                    <Content aboutcontent={props.aboutcontent} />
                    <Sidebar />
                </div>
            </div>
        </>
    )
}
