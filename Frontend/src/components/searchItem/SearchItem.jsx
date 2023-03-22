import "./searchItem.css";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/263366704.webp?k=ea60e2d5a40a16a526b78986dcb91fc9b5ecb4b44dc6a5d677280917dfbd2ae1&o=&s=1"
        alt="Seven Hills"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Hotel Seven Hills Inn</h1>
        <span className="siDistance">16km From Centre</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">
          Studio Apartment With Air Conditioning
        </span>
        <span className="siFeatures">Deluxe Room | 1 Large Double Bed</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
          You Can Cancel Later, So Lock In At This Great Price Today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Fabulous</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹ 41,630</span>
          <span className="siTaxOp">Includes Taxes & Fees</span>
          <button className="siCheckButton">See Availability</button>
        </div>
      </div>
    </div>
  );
};
export default SearchItem;
