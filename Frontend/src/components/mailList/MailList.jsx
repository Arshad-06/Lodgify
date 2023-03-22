import "./mailList.css";
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time, Save Money!</h1>
      <span className="mailDesc">
        Sign Up & We'll Get The Best Deals For You!
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your E-mail" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
export default MailList;
