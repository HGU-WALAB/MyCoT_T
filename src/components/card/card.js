import "./card.css";
import { imageProvider } from "./image_provider";
import DefaultProfileImg from "src/assets/images/default_profile_img.webp";

export const SlidUpCard = ({ backgroundImage, profileImage, title, subtitle, content, onClick }) => {
    return <li>
        <div onClick={onClick} className="card">
            <img src={backgroundImage != null ? backgroundImage : imageProvider('baekjoon')} className="card__image" alt="" />
            <div className="card__overlay">
                <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                    <img className="card__thumb" src={profileImage != null ? profileImage : DefaultProfileImg} alt="" />
                    <div className="card__header-text">
                        <h3 className="card__title">{title}</h3>
                        <span className="card__status">{subtitle}</span>
                    </div>
                </div>
                <p className="card__description">{content}</p>
            </div>
        </div>
    </li>

}