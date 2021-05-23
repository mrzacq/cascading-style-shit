import FeatureBox from "./FeatureBox";
import FeatureImage from "../assets/images/feature_1.png";
import FeatureImage2 from "../assets/images/feature_2.png";
import FeatureImage3 from "../assets/images/feature_3.png";

function Feature() {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox img={FeatureImage} title="Web Development Course" />
        <FeatureBox img={FeatureImage2} title="Android Development Course" />
        <FeatureBox img={FeatureImage3} title="IOS Development Course" />
      </div>
    </div>
  );
}

export default Feature;
