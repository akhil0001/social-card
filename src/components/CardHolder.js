import React from 'react';
import TextInput from './TextInput';
import Card from './Card';
import Loading from './Loading';
import { fetchUserProfileFromGithubAPI } from '../utils/api';

export default class CardHolder extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name:'dan',
            id:null,
            error:null,
            username: null
        };
        this.input = React.createRef('');
    }
    componentDidMount(){
        const { name } = this.state;
        this.fetchUserData(name);
    }
    fetchUserData(username)
    {
        fetchUserProfileFromGithubAPI(username)
        .then((data)=>{
            console.log(data);
            const { id,error,login,avatar_url,name,public_repos,bio,followers,following } = data;
            this.setState({
                id,error,login,avatar_url,name,public_repos,bio,followers,following
            })
        })
        .catch((error)=>{
            console.error(error);
            this.setState({
                error:error
            })
        })
    }
    isLoading()
    {
        const {id,error} = this.state;
        return id === null && error === null;
    }
    handleClickOfButton(event){
        this.setState({
            id:null,
            error:null
        })
        const enteredValue = this.state.username;
        this.setState({
            username:enteredValue
        },this.fetchUserData(enteredValue));
    }
    handleInputChange(event)
    {
        this.setState({
            username:event.target.value
        })
    }
    render()
    {
        const { id,error,login,avatar_url,name,public_repos,bio,followers,following,username } = this.state;
        return (
            <>
            <TextInput clickHandler = {this.handleClickOfButton.bind(this)} value={username} onChange = {this.handleInputChange.bind(this)}/>
            { error && <p>{error}</p>}
            {this.isLoading() ? <Loading speed = {600} text ="Fetching"/>: <Card 
            loginName = {login}
            img_src = {avatar_url}
            fullName = {name}
            repos = {public_repos}
            bio = {bio}
            followers = {followers}
            following = {following}
            />}
            </>
        )
    }
    
}