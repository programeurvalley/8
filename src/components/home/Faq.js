import React from 'react'

export default function Faq(props) {
    /*const FAQ = [
        [
            {
                id: 0,
                question: "Which code editor would you recommend?",
                answer: <p>I'd highly recommend you <a href="http://www.sublimetext.com/">Sublime Text</a> - a free to try text editor which I'm using daily. Awesome tool!</p>
            },
            {
                id: 1,
                question: "Nice header. Where do I find more images like that one?",
                answer: <p>Well, there are thousands of stock art galleries, but personally, 
                I prefer to use photos from these sites: <a href="http://unsplash.com">Unsplash.com</a> 
                and <a href="http://www.flickr.com/creativecommons/by-2.0/tags/">Flickr - Creative Commons</a></p>
            }
        ],
        [
                {
                id: 2,
                question: "Can I use it to build a site for my client?",
                answer: <p>Yes, you can. You may use this template for any purpose, just don't forget about the <a href="http://creativecommons.org/licenses/by/3.0/">license</a>, 
                which says: "You must give appropriate credit", i.e. you must provide the name of the creator and a link to the original template in your work. </p>
            },
            {
                id: 3,
                question: "Can you customize this template for me?",
                answer: <p>Yes, I can. Please drop me a line to sergey-at-pozhilov.com and describe your needs in details. Please note, my services are not cheap.</p>
            }
        ]
    ]*/

        const fqList = props.faq.map((faqPair, index) => (
            <div key={index} className='row'>
                {
                    faqPair.map(singleFaq => (
                        <di key={singleFaq.id} className='col-sm-6'>
                            <h3>{singleFaq.question}</h3>
                            {singleFaq.answer}
                        </di>
                    ))
                }
            </div>
        ))

    return (
        <div className='container'>
            <h2 className='text-center top-space'>Frequently Asked Questions</h2>
            <br/>
            <div>
                {fqList}

                <div className='top-space'>
                    <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque ipsam iusto repudiandae facilis soluta cum molestiae totam nesciunt cupiditate esse perferendis provident, repellendus blanditiis, ut non ratione dignissimos amet, omnis rem architecto enim voluptatibus! Amet aliquam doloribus iusto similique quia numquam eius quis recusandae ut reiciendis!
                    </h4>
                    <p className='text-right'><a className='btn btn-action btn-large'>Learn More  &gt;&gt;</a></p>
                </div>
            </div>
        </div>
    )
}
