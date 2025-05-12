import React, { Component } from "react"
import "./App.css"
import Header from "./Header"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false, 
    };
  }
  //scrolls if vh > 100
  handleScroll = () => {
    if (window.scrollY > 100) { 
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  };

  //adds event listener when component mounts
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  //cleans up event listener
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    //const { isScrolled } = this.state;
    return (
      <div className="App">
        {/* background image with opacity transition */}
        <div className={`background-image ${this.state.isScrolled ? "hidden" : ""}`}
        style={{ backgroundImage: "url('/RAISO-background.png')" }}></div>
        <header className="App-header">
          <h1 className="title">
            The AI community <br></br>for everyone
          </h1>
          <p className="bold">Responsible AI Student Organization (RAISO),</p>
          <p className="body-text">Northwestern's student organization dedicated to the ethics, diversity, and social impacts of AI and modern technology.</p>
        </header>
        <div className="our-programs">
          <h1 className="title">
            Our Programs
          </h1>
          <p className="body-text">We run fun, engaging programs that promote discussion, action, and engagement with the intersection <br></br>of technology and social issues.</p>
        </div>
        <div className="education">
          <div className="committee-paragraph">
            <p className="body-text">EDUCATION & DISCUSSIONS</p>
            <h2 className="subtitle">Education 🗣️</h2>
            <p className="bold">
            Our Education committee shapes conversations about technology on Northwestern’s campus. We hold weekly catered discussions on  “AI and X” topics, including how AI interacts with art, the environment, the criminal justice system, healthcare, and social media.
            </p>
          </div>
        <img className="graphic " src={"/RAISO Website Home Page/poster.png"}/>
        </div>
        <div className="faqs">
          <h1 className="title">
            FAQ's
          </h1>
        </div>
        <div className="footer">
        © RAISO 2025
        </div>
      </div>
    )
  }
}

export default App;
