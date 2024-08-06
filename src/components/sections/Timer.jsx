
function Timer() {
    const openingHrs = 11; 
    const closingHrs = 21; 
    
    const hour = new Date().getHours();
    const isOpen = hour >= openingHrs && hour < closingHrs;

    const message = isOpen ? 'We are currently open!' : 'We are currently closed!';
    
    return (
        <div className="timer-container">
            <p>{new Date().toLocaleDateString()}</p>
            <p className="typing-container">
                <span className="typing-text">{message}</span>
            </p>
        </div>
    );
}

export default Timer;