import React from 'react'
import { IProfile } from '../Models/IProfile';
import GithubProfileCard from './GithubProfileCard'
import GithubProfileDetails from './GithubProfileDetails'
import './style.css'



interface IProps{
    profile:IProfile;
    

}interface IState{

}
class GithubProfile extends  React.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <section className='mt-3'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <GithubProfileCard profile={this.props.profile}/>
                            </div>
                        <div className='col-md-8'>
                            <GithubProfileDetails profile={this.props.profile}/>
                        </div>
                    </div>

                </section>
        
            </React.Fragment>
        )
    }
};
export default GithubProfile;