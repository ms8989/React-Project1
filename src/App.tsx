import React from 'react';
import './App.css';

import GithubProfileSearch from './Components/Github/GithubProfileSearchApp';

 interface IProps{

 }
 interface IState{

 }
class App extends React.Component<IProps,IState>
 {
  constructor(props:IProps) {
    super(props)
    
  }

render()
{
  return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a href="" className="navbar-brand text-light ">React with Github profile search</a>
  </nav>

        <GithubProfileSearch/> 
              
  
</React.Fragment>

    
  )
  }
}
export default App;
