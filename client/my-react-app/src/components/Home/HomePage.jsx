import '@fortawesome/fontawesome-free/css/all.min.css';
import './HomePage.css';

let alertShown = false;
var batteryText;

const getBatteryClass = () => {
  switch (Math.floor(Math.random() * 5) + 1) {
    case 1:
      batteryText = "Full Battery";
      return "fa-battery-full text-success";
    case 2:
      batteryText = "75% Battery";
      return "fa-battery-three-quarters text-success";
    case 3:
      batteryText = "50% Battery";
      return "fa-battery-half text-warning";
    case 4:
      batteryText = "25% Battery";
      return "fa-battery-quarter text-warning";
    case 5:
      batteryText = "Empty Battery";
      return "fa-battery-empty text-danger";
    default:
      batteryText = "Empty Battery";
      return "fa-battery-empty text-danger";
  }
};

const Home = () => {
  const className = getBatteryClass();
  
  if (!alertShown) {
    setTimeout(() => {
      alert(batteryText);
    }, 500);
    
    alertShown = true;
  }

  return (
    <div className="ml-5 battery-size">
      <i className={`fas ${className}`}></i>
    </div>
  );
};

export default Home;