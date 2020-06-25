import React, { useState, Component } from 'react'
import './AvatarStyle.css'
import 'tachyons'
import './AvatarList'
import AvatarList from './AvatarList'

class Avatar extends Component
{
       constructor()
       {
           super();
           this.state ={
               name: "Welcome To Avatar World"
           }
       }

       nameChange()
       {
           this.setState({
               name:"Welcome To MyChannel"
           })
       }
       nameChangeReverse()
       {
           this.setState({
               name:"Welcome To Avatar World"
           })
       }
        render()
        {
            const avatarListArray= [
                {                                     // 0
                    id:1,
                    name:"Rahul",
                    work:"Web Developer"
                },
                {                                     //1
                    id:2,
                    name:"Nimrita",
                    work:"UI/UX Developer"
                },
                {                                      //2
                    id:3,
                    name:"Ajay",
                    work:"Selinium Expert"
                },
                {                                       //3
                    id:4,
                    name:"Smriti",
                    work:"Django Developer"
                }
            ]
            
            const arrayAvatarCard = avatarListArray.map( (avatarCard,i) => 
             {
                return  <AvatarList key={i}
                 id={avatarListArray[i].id} name={avatarListArray[i].name} designation={avatarListArray[i].work}/>
                    //props bhej rha hu  AvatarList ko
            }
            )

            return (<div className="mainPage">
        <h1>{this.state.name}</h1>
        
        {arrayAvatarCard}
  <br></br>
    <button onClick ={()=> this.nameChange() }>Subscribe</button> <br></br>
    <button onClick ={()=> this.nameChangeReverse() }>UnSubscribe</button>
    </div>

    )
        }
    
    }


export default Avatar;