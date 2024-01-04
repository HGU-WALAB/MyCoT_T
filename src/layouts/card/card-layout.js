import "./card-layout.css";

export const CardLayout = ({children}) => {
    
    return <ul className="cards">
        {children}
    </ul>
}