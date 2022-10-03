import React from 'react'



export default function Content(props) {


    const AboutContentList = props.aboutcontent.map(SingleContent => (
        <div key={SingleContent.id}>
            <h3>{SingleContent.title}</h3>
            {SingleContent.image === undefined ? <></> : SingleContent.image}
            {
                SingleContent.content.map(SinglePair => (
                    <p>{SinglePair}</p>
                ))
            }
        </div>
    ))

    return (
        <div className='col-md-8 maincontent' >
            <div className='page-header'>
                <h1 className='page-title'>About Us</h1>
            </div>
            {AboutContentList}
        </div>
    )
}
