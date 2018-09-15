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
          solved: true,
          react: 30,
          reacted: true,
          mood: "laugh",
          reaction: "https://media1.tenor.com/images/3eb5118cbe8ea3dbba845d680cbcf9b2/tenor.gif?itemid=8279022",
          _id:0,
        }, {
          username: "Imran Ali",
          issue: "How To Listen An App On Node.js",
          isOpen: true,
          fav: false,
          favNum: 4,
          react: 23,
          solved:false,
          _id:1,
        }, {
          username: "Najam Shehzad",
          issue: "This Is Undefined In React Functional-Compnent",
          isOpen: true,
          fav: false,
          favNum: 6,
          react: 20,
          solved:false,
          _id:2,
        }, {
          username: "Adeen-Ul-Haq",
          solved: true,
          issue: "TypsCript Compiling Error",
          isOpen: true,
          fav: false,
          favNum: 9,
          react: 12,
          _id:3
        }, {
          username: "Zeeshan Ali",
          issue: "Cross-Origin Is Not Allowed In Firebase",
          isOpen: true,
          fav: false,
          favNum: 6,
          react: 7,
          solved:false,
          _id:4
        },
      ],
      reactions: [
        {
          mood: "sad",
          icon: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/3eee1d34559659.56d59de621daa.gif"
        },
        {
          mood: "wow",
          icon: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6105c734559659.56d59c54f0d05.gif"
        },
        {
          mood: "angry",
          icon: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e66e6e34559659.56d57de095aee.gif"
        },
        {
          mood: "laugh",
          icon: "https://media1.tenor.com/images/3eb5118cbe8ea3dbba845d680cbcf9b2/tenor.gif?itemid=8279022"
        }

      ],
      term: "",
      search: [],
    }
  }

  fav(id) {
    const { issues } = this.state;
    for(var index in issues){
      if(issues[index]._id===id){
        issues[index].fav = !issues[index].fav;
        if (issues[index].fav) {
          issues[index].favNum += 1;
        } else {
          issues[index].favNum -= 1;
        }
      }
    }
    this.setState({
      issues
    })
  }
  react(id, icon, mood) {
    const { issues } = this.state;
    for(var index in issues){
      if(issues[index]._id === id){
        issues[index].react = issues[index].reacted ? issues[index].react : issues[index].react + 1
        issues[index].reacted = true;
        issues[index].reaction = icon;
        issues[index].mood = mood;
      }
    }
    
    this.setState({
      issues
    })
  }
  search(ev){
    const {issues} = this.state;
    var search = issues.filter((issue)=>{
      if(ev.target.value.toLowerCase().startsWith("s")){
        return issue.solved
      }
      else if(ev.target.value.toLowerCase().startsWith("n")){
        return !issue.solved
      }else{
        return issue
      }
    }) 
    this.setState({
      search,
      term:ev.target.value
    })
  }
  render() {
    const { issues, reactions, term, search } = this.state;
    var data = term ? search : issues
    return (
      <div>
        <div className="header">
          <h1>GitHub Issues List</h1>
        </div>
        <div className="searchBox">
          <input type="text" name="search" id="" onChange={(ev)=>this.search(ev)} placeholder="Check For Issues Solved Or Not Solved" value={term} className="searchInput" />
        </div>
        {
          data.map((issue, index) => {
            var src = issue.fav ? "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png" : "https://banner2.kisspng.com/20180425/zpe/kisspng-coloring-book-emoji-heart-drawing-the-heart-icon-5ae04c65b33188.229609541524649061734.jpg"
            var condition = issue.solved ? "Solved" : "Not Solved";
            var img = issue.solved ? "http://pngimage.net/wp-content/uploads/2018/06/tick-png-icon-7.png" : "https://cdn2.iconfinder.com/data/icons/pointed-edge-web-navigation/101/cross-red-512.png"
            return (
              <div className="issueItem" key={index}>
                <h1 className="username">{issue.username}</h1>
                <hr />
                <p className="issue">{issue.issue}</p>
                <hr />
                <div className="con con1">
                  <img src={issue.reacted ? issue.reaction : "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4299734559659.56d57de04bda4.gif"} alt="Reaction" className="emoji" />
                  <span className="value">({issue.react})</span>
                </div>
                <div className="con con2" onClick={() => this.fav(issue._id)}>
                  <img src={src} alt="favourite" className="fav" />
                  <span className="value">({issue.favNum})</span>
                </div>
                <ul className="emolist">
                  {
                    reactions.map((reaction, index2) => {
                      return (
                        <li className="emo" key={index2} onClick={() => this.react(issue._id, reaction.icon, reaction.mood)}>
                          <img src={reaction.icon}
                            alt="Reaction" title={reaction.mood} />
                        </li>
                      )
                    })
                  }

                </ul>
                <span className="left">
                  <img src={img} alt="" className="condition" />
                  <span>{condition}</span>
                  <span className="date"> {new Date().toDateString()}</span>
                </span>
              </div>
            );

          })
        }
      </div>
    );
  }
}

export default App;
