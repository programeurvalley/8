import React  from 'react'
import Header from '../components/home/Header'
import Intro from '../components/home/Intro'
import HighLights from '../components/home/HighLights'
import Faq from '../components/home/Faq'



export default function Home(props){

    return (
        <>
            <Header />
            <Intro />
            <HighLights hig={props.hig} />
            <Faq faq={props.faq}  />
        </>
    )
}