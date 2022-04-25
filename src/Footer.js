import insta from './images/insta.jpg'
import twitter from './images/twitter.png'
import git from './images/git.png'




export default function Footer(){
    return (
        <div className = "footer">
        <a href = "https://www.instagram.com/markfabian_/" ><img className ="img" src={insta} alt = "twitter" /></a>
        
        <a href = "https://twitter.com/markfabian025" ><img className ="img" src={twitter} alt = "twitter" /></a>
        
        <a href = "https://github.com/mgfabia" ><img className ="img" src={git} alt = "img" /></a>
        </div>
    )
}