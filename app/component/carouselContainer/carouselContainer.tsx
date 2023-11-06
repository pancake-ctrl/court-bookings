'use client'

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Image from 'next/image'

export default function CarouselContainer()
{
    var items = [
        {
            
            background: 'bg-gradient-to-r from-indigo-500 ...'
        },
        {
            
            background:'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'
        }
    ]

    return (
        <div className='h-36 md:h-screen'>

            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>
    )
}

function Item(props: any)
{
    return (
        <Paper>
            <div className='flex '>
                <div className='basis-1/3'>
                    <Button className="">
                        Check it out!
                    </Button>

                </div>
                <div className='basis-2/3' style={{backgroundImage:`url("/futsal.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>

                </div>

            </div>
        </Paper>
    )
}



