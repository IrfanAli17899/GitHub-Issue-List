import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      issues: [
        {
          username: "Irfan Ali",
          issue: "Create-React-App Is Not Working",
          isOpen: true,
          fav: false,
          favNum: 6,
          react: 30
        }, {
          username: "Imran Ali",
          issue: "How To Listen An App On Node.js",
          isOpen: true,
          fav: false,
          favNum: 4,
          react: 23
        }, {
          username: "Najam Shehzad",
          issue: "This Is Undefined In React Functional-Compnent",
          isOpen: true,
          fav: false,
          favNum:6,
          react:20
        }, {
          username: "Adeen-Ul-Haq",
          issue: "TypsCript Compiling Error",
          isOpen: true,
          fav: false,
          favNum:9,
          react:12
        }, {
          username: "Zeeshan Ali",
          issue: "Cross-Origin Is Not Allowed In Firebase",
          isOpen: true,
          fav: false,
          favNum:6,
          react:7
        },
      ]
    }
  }

  fav(index) {
    const { issues } = this.state;
    issues[index].fav = !issues[index].fav;
    if(issues[index].fav){
      issues[index].favNum += 1;
    }else{
      issues[index].favNum -= 1;      
    }
    this.setState({
      issues
    })
  }

  render() {
    const { issues } = this.state
    return (
      <div>
        <div className="header">
          <h1>GitHub Issues List</h1>
        </div>
        <div className="searchBox">
          <input type="text" name="search" id="" placeholder="Check For Issues" className="searchInput" />
        </div>
        {
          issues.map((issue, index) => {
            var src = issue.fav ? "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png" : "https://banner2.kisspng.com/20180425/zpe/kisspng-coloring-book-emoji-heart-drawing-the-heart-icon-5ae04c65b33188.229609541524649061734.jpg"

            return (
              <div className="issueItem" key={index}>
                <h1 className="username">{issue.username}</h1>
                <hr />
                <p className="issue">{issue.issue}</p>
                <hr />
                <div className="con con1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/2000px-Facebook_Like_button.svg.png" alt="Reaction" className="emoji" />         
                     <span className="value">({issue.react})</span>
                </div>
                <div className="con con2" onClick={() => this.fav(index)}>
                  <img src={src} alt="favourite" className="fav" />
                  <span className="value">({issue.favNum})</span>
                </div>
              </div>
            );

          })
        }
      </div>
    );
  }
}

export default App;
