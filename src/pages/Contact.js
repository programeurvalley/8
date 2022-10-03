import React , { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Contact() {

    const [feedback , setFeedBack] = useState({
        name:'' ,
        email: '',
        tel : '',
        newsLetter : false ,
        para: ''
    })

    /*function ShowCns(e){
        e.preventDefault();
        console.log(feedback);
        alert(`Nom : ${feedback.name} \nEmail : ${feedback.email} \nPhone : ${feedback.tel} \nNewsLetter : ${feedback.newsLetter} \nComment : ${feedback.para}`);

        fetch('http://localhost:3000/comment' , {
            method: 'POST' ,
            body : JSON.stringify(feedback)
    })*/ 

    const handlSubmit = e => {
    e.preventDefault();
    console.log(feedback);
    alert(`Nom : ${feedback.name} \nEmail : ${feedback.email} \nPhone : ${feedback.tel} \nNewsLetter : ${feedback.newsLetter} \nComment : ${feedback.para}`);

    fetch('http://localhost:3000/comment' , {
        method: 'POST' ,
        body : JSON.stringify(feedback) ,
        headers : {
            "Content-type" : "application/json ; charset=UTF-8"
        }
})

}

// cd C:\Users\Marco\Desktop\NewProject\multi-react-page\src\shared

// json-server --watch data.json

        

    return (
        <>
            <div className='container' >

                <ol className='breadcrumb'style={{marginTop : "100px", backgroundColor : 'white'}}>
                        <li><Link to='/'>Home</Link></li>
                        <li>Contact</li>
                </ol>
                
                <div className="row">
                    <div className='col-sm-9'>
                        <header className='page-header'>
                            <h1 className='page-title'>Contact Us</h1>
                        </header>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolore, sit velit est a tenetur quo! Est sapiente voluptatibus ratione repellendus dignissimos architecto nulla facere.
                        </p>
                        <form onSubmit={handlSubmit} >
                            <div className="row">
                                <div className="col-sm-4">
                                    <input type='text' placeholder='Name' className='form-control' 
                                    id="name"
                                    name="name"
                                    value={feedback.name}
                                    onChange={(e) => setFeedBack({...feedback , name : e.target.value })} />
                                </div>
                                <div className="col-sm-4">
                                    <input type='text' placeholder='Email' className='form-control' 
                                    id="email"
                                    name="email"
                                    value={feedback.email}
                                    onChange={(e) => setFeedBack({...feedback , email : e.target.value })} />
                                </div>
                                <div className="col-sm-4">
                                    <input type='text' placeholder='Phone' className='form-control' 
                                    id="tel"
                                    name="tel"
                                    value={feedback.tel}
                                    onChange={(e) => setFeedBack({...feedback , tel: e.target.value })} />
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-sm-12'>
                                    <textarea placeholder='type your message here ... . 'cols="29" rows="10" className='form-control' style={{margin: '15px' , marginLeft : "-1px"}} 
                                    id="comment"
                                    value={feedback.para}
                                    onChange={(e) => setFeedBack({...feedback , para : e.target.value})} ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label className='checkbox'>
                                        <input type='checkbox' 
                                        checked={feedback.newsLetter}
                                        onChange={(e) => setFeedBack({...feedback , newsLetter : e.target.checked})}/>
                                        Sign Up for newsletter
                                    </label>
                                </div>
                                <div className="col-sm-6">
                                    <input type="submit" className='btn btn-action pull-right' value='Send Message' />
                                </div>
                            </div>
                        </form>
                    </div>

                    <aside className="col-sm-3 sidebar sidebar-right">
                        <div className="widget">
                            <h4>Address</h4>
                            <address>
                                2002 Holcombe Boulevard, Houston, TX 77030, USA
                            </address>
                            <h4>Phone:</h4>
                            <address>
                                (713) 791-1414
                            </address>
                        </div>
                    </aside>

                    <section className='col-sm-9 top-space'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d51161.09275940645!2d2.9851647999999997!3d36.732928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sdz!4v1663322040850!5m2!1sfr!2sdz" width="600" height="450" style={{border : 0 , width : '100%' , height : '100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                    </section>

                </div>
            </div>
        </>
    )

}
