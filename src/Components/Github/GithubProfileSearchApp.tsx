
import axios, {AxiosResponse} from 'axios';
import React from 'react';
import { IProfile } from './Models/IProfile';
import { IRepos} from './Models/Irepos';
import GithubProfile from './Profile/GithubProfile';
import {githubCred} from './credentials/githubCred';
import GithubRepos from './Repos/GithubRepos';

interface IProps{

}
interface IState{
githubuser:string
profile:IProfile
repos:IRepos[]
}
class GithubProfileSearch extends React.Component<IProps,IState>
{
    constructor(props:IProps)
    {
 super(props)
this.state={
    githubuser:'',
    profile:{} as IProfile,
    repos:[] as IRepos[]
} 

    }   
    
    changeInput=(event:React.ChangeEvent<HTMLInputElement>)=>
    {
      this.setState(
          {
              ...this.state,
              githubuser:event.target.value
          }
      )     
    }
submitSearch=(event:React.FormEvent<HTMLFormElement>)=>
{
    event.preventDefault()
    //searchfor profile
    this.searchProfile(this.state.githubuser);
    this.searchRepos(this.state.githubuser);
}

searchProfile=(githubuser:string)=>
{
    let dataURL:string=`https://api.github.com/users/${githubuser}?Client_ID=${githubCred.Client_Id}&Client_Secret=${githubCred.Client_Secret}`
    axios.get(dataURL).then((response:AxiosResponse<any>)=>
    {

    this.setState(
        {
            ...this.state,
            profile:response.data
        }
    )
}).catch((error)=>
{
    console.error(error);
})
}
    
searchRepos=(githubuser:string)=>
{
    let dataURL:string=`https://api.github.com/users/${githubuser}/repos?Client_Id=${githubCred.Client_Id}&Client_Secret=${githubCred.Client_Secret}`
    axios.get(dataURL).then((response:AxiosResponse<any>)=>
    {

    this.setState(
        {
            ...this.state,
            repos:response.data
        }
    )
}).catch((error)=>
{
    console.error(error);
})
}

    
    render()
    {
        return(
<React.Fragment>
<section>
    <div className='container mt-2'>
        <div className='row'>
            <div className='col'>
                <h3 className='text-primary'>Git Hub Search</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur omnis laboriosam minima voluptatum delectus ipsam praesentium placeat commodi laudantium magni debitis eius, incidunt explicabo eveniet sed culpa consequatur. Consequuntur, sed.</p>
       {/* <pre>{JSON.stringify(this.state.githubuser)}</pre>*/}
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <form className='form-inline' onSubmit={this.submitSearch}>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='form-group mt-2'>
                                <input type='text' placeholder='userName...' className='form-control'onChange={this.changeInput} value={this.state.githubuser}/>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <input type='submit' value='Submit' className='btn btn-primary btn-md'/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  
    </section>
    <section>
        <div className='container mt-2'>
            <div className='row'>
                <div className='col'>
                {/* <pre>{JSON.stringify(this.state.profile)}</pre>
                    <pre>{JSON.stringify(this.state.repos)}</pre> */}
                    {
                        Object.keys(this.state.profile).length>0 && 
                        <GithubProfile profile={this.state.profile}/>
                    }

                    
                </div>
            </div>

        </div>
    </section>
    <section>
        <div className='container mt-2'>
            <div className='row'>
                <div className='col'>
                    {
                        Object.keys(this.state.repos).length>0 && 
                        <GithubRepos repos={this.state.repos}/>
                    } 
                </div>
            </div>

        </div>
    </section>
</React.Fragment>
        )
    }
};
export default GithubProfileSearch;