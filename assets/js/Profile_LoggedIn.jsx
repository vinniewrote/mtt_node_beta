import React from 'react'

class Profile_LoggedIn extends React.Component {
  getInitialState: function() {
    return {
      profile: null
    }
  }
  componentDidMount: function() {
    // The token is passed down from the App component
    // and used to retrieve the profile
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        return;
      }
      this.setState({profile: profile});
    }.bind(this));
  }
   render(){
     if (this.state.profile) {
       return (
         <img src={this.state.profile.picture} />
         <h2>Welcome {this.state.profile.nickname}</h2>
       );
    } else {
      return (
        <div className="loading">Loading profile</div>
      );
    }
   }
}
export default Profile_LoggedIn
