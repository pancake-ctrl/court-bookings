'use client'

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Image from 'next/image'

export default function CarouselContainer()
{
    const cover = './cover.png'
    var items = [
        {
            
            background: '/futsal.jpg'
        },
        {
            
            background: '/football-carousel.jpg'
        },
        {
            
            background: '/basketball-carousel.jpg'
        },
        {
            
            background:'/tennis-carousel.jpg'
        }
    ]

    return (
        <div className=' '>

            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} cover={cover} /> )
                }
            </Carousel>

        </div>
    )
}

function Item(props: any)
{
    return (<>
                <Paper>
                    <div className='xl:h-[600px] h-96 w-screen' style={{backgroundImage:`url("${props.cover}") ,url("${props.item.background}")`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
                    </div>
                    <button className=' absolute p-3 rounded-md left-5 bottom-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                        <div className='text-white'>
                        Book your court!
                        </div>
                    </button>
                </Paper>
                <LocationFinder />
                
            </>
    )
}



function LocationFinder() {
  return (
    <div className='text-black w-[100px] h-[100px] bg-blue-50 '>
bhsavd
    </div>
  )
}
