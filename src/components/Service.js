
const Service = ({ icon, title, text }) => {
    return(
        <article className="services">
              <span className="services-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
    )
}

export default Service;