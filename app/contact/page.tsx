import Nav_bar from "../components/nav";
import Footer from "../components/footer";


export default function Contact(){
    return(
 
        <div className="">
            <Nav_bar/>

        <div className="contact scale-up-center">
        <div className="container1">
            <h1>Get in contact.</h1>
            <p>Any questions, suggestions, or just want to say hello? I would love to hear from you! Whether you are curious about a destination, 
            Leave a comment on the blog, or want to contribute, feel free to get in touch. Your thoughts and ideas are always welcome!</p>
             
        </div>
        
        <div className="container2">
            <h1>Contact</h1>

            <div className="form">

                <div className="lab">
                <label htmlFor="firstname">First name:</label>
                <br />
                <input type="text" id="firstname" placeholder="Enter your first name" required />

                <br />

                <label htmlFor="lastname">Last name </label>
                <br />
                <input type="text" id="lastname" placeholder="Enter your last name" required />

                <br />

                <label htmlFor="gmail"> Gmail:</label>
                <br />
                <input type="Gmail" id="gmail" placeholder="Enter your gmail" required />

                <br />

                <label htmlFor="phone"> Phone:</label>
                <br />
                <input type="number" id="phone" placeholder="Enter your number" required />

                <br />

                <label htmlFor="message"> Type your message:</label>
                <br />
                <textarea name="" id="message" rows={3} cols={30}></textarea>

                <br />

                <div className="sendd">
                <button className="send" type="submit">Send</button>

               </div>

                </div>
        
        </div>
        </div>
        </div>
        <Footer/>
        </div>

    )
}