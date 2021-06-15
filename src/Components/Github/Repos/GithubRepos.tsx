import React from 'react' 

import { IRepos } from '../Models/Irepos';


interface IProps{
    repos:IRepos[]
}
interface IState{

}
class GithubRepos extends  React.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props)
    }
    render(){
      
        return(
            <React.Fragment>
            <div className='card'>
                <div className='card-header-bg-warning'>
                    <h4 className='text-center font-weight-bold' >Your Repositary</h4>
                 </div>   
                        <div className='card-body'>
                            {
                                this.props.repos.map(repo=>
                                    {
                                        return(
                                            <ul className='list-group'>
                                                <li className='list-group-item'>
                                                    <a href="">{repo.name}</a>
                                                </li>
                                            </ul>
                                        )
                                    })
                            }
                        </div>
           </div>  
            </React.Fragment>
        )
    }
};
export default GithubRepos;