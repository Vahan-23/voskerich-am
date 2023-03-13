import React from 'react'
import contentStart from '../../Images/contentStart.png'
import contStart from '../../Videos/newbackground.mp4'
import Category from './Category'
import './contentStyle.css'

export default function Content() {
  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="container">
      <video className='contentStart' muted="true"  autoPlay="true" loop="true" playsInline="" type="video/mp4">
        <source src={contStart}/>
      </video>
      <div className="goToCategories">
        <h1 className='textMenu'>Ձեր ճաշակը այստեղ է</h1>
        <h2 className='textPropMenu'>Ուսումնասիրեք և արտահայտեք ձեր բազմաթիվ կողմերը</h2>
        <a onClick={handleClickScroll} className='buttonCategories' >Բաժիններ</a>
      </div>
      <div className="bodyContent">
        <h1 className='citate1'> <h3>Բարի գալուստ մեր ոսկերչական խանութ։ </h3>Մենք հպարտ ենք, որ առաջարկում ենք ոսկյա զարդերի ցնցող հավաքածու, որը և՛ գեղեցիկ է, և՛ հավերժական: Մեր վարպետորեն պատրաստված կտորները արտացոլում են ձեր յուրահատուկ ոճն ու անհատականությունը՝ դրանք դարձնելով կատարյալ լրացում ցանկացած հագուստի համար:</h1>
      </div>
    </div>
   
  )
}
