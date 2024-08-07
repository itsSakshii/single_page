
function Hero() {


 return (
   <>
   <main className="container hero-section">
    <div className="inner-hero">
    <article className="left-hero">
        <div className="text">
          <p className="subhead">
            Discover Delightful Treat at Out</p>
            <h1 className="title">
                 Bake'<span>sway</span>
                </h1> 
            <p className="subtitle" >
            Crafting Delightful Moments with Every Loaf, Pastry, and Cake—Experience 
            Artisan Baking at Its Finest with Our Freshly Made, Flavorful Creations.
            </p>
            <div className="button">
            <button className="cart ">Add To Cart</button>
            <button className="intro">Watch Intro</button>
            </div>
        </div>
        </article>  
        <article className="right-hero">
            <div className="img">
                <img src="./assets/hero.png" alt="banner-image"/>
            </div>
        </article>
             
    </div>
   
 
   </main>
 

   </>
 );
}

export default Hero;
