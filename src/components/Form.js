function Form(){
    return(
        <section style={{background: "teal"}}>
        <div className ="contact">
            <h3>CONTACT US</h3>
        </div>
        
        <form>
            <input type="email" name="email" id="email" placeholder="enter email"></input>
            <textarea name="message" id="message" placeholder="enter message"></textarea>
            <button>SUBMIT</button>
            
        </form>
        </section>
    )        
}
export default Form;