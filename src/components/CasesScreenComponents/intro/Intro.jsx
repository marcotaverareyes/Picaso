import "./intro.css";
// import Me from "../../img/me.png";
import caseLogo from '../../../assets/casesLogo.png'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 style={{fontFamily: 'GroteskRegular'}} >Picaso's App Store Optimization</h2>
          <h1 style={{fontFamily: 'GroteskBlack'}}>Case Studies</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">A/B Testing</div>
              <div className="i-title-item">UI/UX Redesign</div>
              <div className="i-title-item">Cross-localization</div>
              <div className="i-title-item">Metadata Optimization</div>
              <div className="i-title-item">Keyword Ranking</div>
            </div>
          </div>
          <p className="i-desc" >
          Case studies like these are why we do what we do with such energy. Find out how apps like yours have achieved their growth goals with Picaso.
          </p>
        </div>
      </div>
      <div id='caseImage' className="image">
        <img src={caseLogo} alt="home" className="half-width" />
      </div>
    </div>
  );
};

export default Intro;
