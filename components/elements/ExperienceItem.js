import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function ExperienceItem({ title, location, date, description, techUsed }) {
    return(
        <div className="experience-item">
            <div className="heading2" data-aos="fade-up">{ title }</div>
            <div className="title-details" data-aos="fade-up">
                <FontAwesomeIcon icon={faLocationDot} />
                { location }
            </div>
            <div className="title-details" data-aos="fade-up">
                <FontAwesomeIcon icon={faCalendarDays} />
                { date }
            </div>
            <div className="experience-details">
                <ul data-aos="fade-up">
                    { description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="tech-used" data-aos="fade-up">
                    { techUsed.map((item, index) => (
                        <span key={index} className="badge text-bg-primary">{item}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem
