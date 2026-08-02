import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import Button from './Button'
import Card from './Card'
import coat from '../assets/coat.png'


const BestSelling = () => {
  return (
    <div>
      <Container>
        <div className="flex items-end justify-between">

        <SecHead
        title="This Month" 
        heading="Best Selling Products"
        />
      <Button className="mt-5">
          view all
        </Button>
        </div>
            
        <div className="flex justify-between mb-35">
        <div>
            <Card
            imgConsle={coat}

            title="The north coat"
            price="$260"
            disprice="$360"
            review="65"
            />
        </div>
        <div>
            <Card
            imgConsle={coat}

            title="The north coat"
            price="$260"
            disprice="$360"
            review="65"
            />
        </div>
        <div>
            <Card
            imgConsle={coat}

            title="The north coat"
            price="$260"
            disprice="$360"
            review="65"
            />
        </div>
        <div>
            <Card
            imgConsle={coat}
            
            title="The north coat"
            price="$260"
            disprice="$360"
            review="65"
            />
        </div>
       
        </div>

        
      </Container>
    </div>
  )
}

export default BestSelling
