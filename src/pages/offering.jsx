
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/header';

const pageContent = {

}


export default function Offering() {

    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams)

    return  <>
        <Header/>
        
    </>
}