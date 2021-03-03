import "../stylesheets/HomepageHead.css";

const HomepageHead = () => {
    return ( 
        <div className="home-page-head">
            <h1>Minimal Operating System</h1>
            <div className="landingText">
                <h5>With most simplistic</h5>
                <h5>yet aesthetic feel</h5>
                <h5>Staying close to AOSP</h5>
            </div>
            <button>Know more</button>
        </div>
     );
}
 
export default HomepageHead;