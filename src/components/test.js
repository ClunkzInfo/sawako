import React, { useState } from 'react'


function test() {

    const [page,changePage] = useState({number:1})
    const [isOpen,changeOpen ] = useState(false)

    const elementText = 
        <div className="iconContainer">    
            {/*<img className="icon" src={pic1}/>*/}
        </div>


    const list = [
        {
            id:'0001',
            title:'Title1',
            size:'300cmX300cm',
            theme:'autumn',
            price:'1000',
            description:'this is the description'   
        },       {
            id:'0002',
            title:'Title2',
            size:'300cmX300cm',
            theme:'autumn',
            price:'1000',
            description:'this is the description'   
        },
        {
            id:'0003',
            title:'Title3',
            size:'400cmX400cm',
            theme:'spring',
            price:'3000',
            description:'this is the description'   
        },       {
            id:'0004',
            title:'Title4',
            size:'500cmX500cm',
            theme:'summer',
            price:'150000',
            description:'this is the description'   
        },       {
            id:'0005',
            title:'Title5',
            size:'200cmX200cm',
            theme:'summer',
            price:'40000',
            description:'this is the description'   
        },

    ]

    const filterAutumn = true;

    const filterPredicates = (item) => filterAutumn ? item.theme === 'autumn' : item

    const simpleList = list.filter(filterPredicates)
        .map((item) => (
        <div key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.size}</div>
        </div>))

  return (
    <div>
        <button onClick={e=>changePage({...page,number:(page.number+1)})}></button>
        <button onClick={()=>changeOpen(isOpen === true ? false : true)}></button>

        <div>{page.number}</div>
        <div>{isOpen ? simpleList : ''}</div>
        {/*<div>{JSON.stringify(page)}</div>*/}


    </div>
  )
}

export default test