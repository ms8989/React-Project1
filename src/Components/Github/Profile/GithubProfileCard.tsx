import { profile } from 'console';
import React, { Profiler } from 'react'
import { parseJsonConfigFileContent } from 'typescript';
import { IProfile } from '../Models/IProfile';
import './style.css'

interface IProps{
   profile:IProfile 
}
interface IState{

}
class GithubProfileCard extends  React.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props)
    }
    render(){
        let {profile}=this.props;
        return(
            <React.Fragment>
       
           <div className='card bg-dark text-white text-center'>
               
               <img src={profile.avatar_url} className='img-fluid rounded-circle'/>
               <div className='card-body  '>
                   <h5> Profile ID:{profile.id}</h5>
                   <h5>{profile.name}</h5>
                   <h5>{profile.bio}</h5>
                
                <a className="btn btn-danger" href={profile.url} role="button">GitHub</a>
               </div>
           
           </div>
                
            </React.Fragment>
        )
    }
};
export default GithubProfileCard;