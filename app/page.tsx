import Navbar from "./components/nav";
import Title from "./components/title";
import Footer from "./components/footer";

export default function Home() {
  return (

    <div className="">
    <Navbar/>
    <Title/>

     <div className="navbar">


      <div className="row1  scale-up-ver-center">
        <div
          className="cards " >
          <div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBBRNvqj77k5ANowTVXxFnyvw9lKIGtJ8UQ&s" />
          </div>
          <h1 className="title">  white chicken pulao
          </h1>
          <p className="description">45 mins Basmati rice, star anise, ginger, finger, green </p>
          <a href="https://cookpad.com/pk/recipes/15446409-white-chicken-pulao" target="_blank">
          <button className="button">Read more</button></a>
          </div>




             <div className="cards">
              <div className="image">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVaJkkf7_2-6eCo2I4Gw9VF_QoKQuK-1jjRw&s" alt="" />
            </div>
            <h1 className="title"> yakhni pulao
            </h1>
            <p className="description">  White Chicken Pulao recipe that has the flavors of whole and ground spices.   
            </p>   
         <a href="https://www.teaforturmeric.com/chicken-pulao-yakhni-pulao/" target="_blank"> <button className="button">Read more</button></a>
          </div>


         
            <div className="cards">
              <div className="image1">
                <img src="https://recipesbybangash.wordpress.com/wp-content/uploads/2017/09/img-20170904-wa0026.jpg?w=1000" alt="" />
            </div>
            <h1 className="title">
              beef pulao
            </h1>
            <p className="description">
            All you need to prepare this amazing rice recipe is:
             boneless chicken, basmati rice, butter, milk and a melange of spices.
            </p>
           <a href="https://www.masala.tv/beef-pulao-recipe-by-chef-mehboob-khan/" target="_blank"> <button className="button">Read more</button></a>
          </div>
          </div> 



          <div className="row2  scale-up-ver-center"> 
            <div className="cards">
            <div className="image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyFnTGslJWQucSebub9Ht303fi8nY5CeznA&s" alt=" " />
            </div>  
            <h1 className="title">
              mutton pulao
            </h1>
            <p className="description">
            chicken pulao is a variation of chicken pulao cooked without tomato and any colouring spices.
            </p>
           <a href="https://fatimacooks.net/mutton-pulao-recipe-yakhni-pilau-rice/" target="_blank">  <button className="button"> Read more</button></a> 
          </div>
          
          


          <div className="cards">
          <div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFtP0wIrUruXu63ucS2UChjMRM4hm7Wlhs-Q&s" alt="" />
            </div>
            <h1 className="title">
              veg pulao
            </h1>
            <p className="description">
            Chicken Pulao is a fragrant, one-pot dish that's perfect 
            for a family meal or special occasion. Enjoy this easy Chicken Pulao ...
            </p>
           <a href="https://www.indianhealthyrecipes.com/pulao-recipe-veg-pulao-recipe/" target="_blank"><button className="button"> Read more</button></a>
          </div>
          


         
          <div className="cards">
           <div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8E8AvyPANmz8_xKvPh44xU7CgUzg_3oLyPA&s" alt="" />
           </div>
            <h1 className="title">
              biryani pulao
            </h1>
            <p className="description">
            pulao biryani recipe with chicken.
             Cooked in one pot making a signature flavor of biryani and pulao together. Let's make it!
            </p>
             <a href="https://www.thebigsweettooth.com/chicken-pulao-biriyani/" target="_blank"> <button className="button"> Read more</button></a>

          </div>
        </div> 
        
       </div>
         <Footer/>
        </div>
      
        
      
  );
}