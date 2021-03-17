import ButtonHouse from "./ButtonHouse"
function Room() {
    const styles = {
        background: "red",
        height: 40,
        width: 150,
        borderRadius: 75,
        color: "white"
    }
    return (
        <header>
            <div className="room">
                <h2>UMU BizCENRER</h2>
                <h4>We are dedicated to giving you what you desire at afordable prices </h4>
                <ButtonHouse styles={styles} title="Order Now"/>
            </div>
        </header>
    )
    
}
export default Room;