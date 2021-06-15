import React from 'react'
import { IProfile } from '../Models/IProfile';


interface IProps{
    profile:IProfile
    
}
interface IState{

}
class GithubProfileDetails extends  React.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props)
    }
    render(){
        let {profile}=this.props
        return(
            <React.Fragment>
               <section>
               <div className='card  bg-dark text-white'>
                   <div className='card-header bg-warning'>
                      
                           <span className='badge badge-success mx-5'>{profile.followers}followers</span>
                           <span className='badge badge-secondary mx-5'>{profile.following}following</span>
                          <span> <a className="btn btn-success btn-sm" href={profile.gists_url} role="button ">Gists</a></span>
                         <span><a className="btn btn-secondary btn-sm" href={profile.starred_url} role="button ">starred</a></span>
                          <span><a className="btn btn-success btn-sm" href={profile.events_url} role="button ">events</a></span>
                       
</div>
<div className='card-body'>
    <ul className='list-group'>
        <li className='list-group-item'>
            Name: <span className='font-weight-bold'>{profile.name}</span>

        </li>
        <li className='list-group-item'>
            Location: <span className='font-weight-bold'>{profile.location}</span>

        </li>
        <li className='list-group-item'>
            Email: <span className='font-weight-bold'>{profile.email}</span>

        </li>
        <li className='list-group-item'>
            Company: <span className='font-weight-bold'>{profile.company}</span>

        </li>
    </ul>
</div>
</div>
                       
                   
                   
               </section>
        
            </React.Fragment>
        )
    }
};
export default GithubProfileDetails;