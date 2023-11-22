
export default function Weather({ data }) {
    return (
        <>
            <div className="weather">
                <div className="top">
                    <div>
                        <p className="city">{data.city}</p>
                        <p className="weather-description">{data.weather[0].description}</p>
                    </div>
                    <img className="weather-icon" alt="weather" src={`/icons/${data.weather[0].icon}.png`}></img>
                </div>
                <div className="bottom">
                    <p className="temperature">{Math.round(data.main.temp)}&deg;C </p>
                    <div className="details">
                        <div className="parameter-row">
                            <span className="parameter-label">Feels like</span>
                            <span className="parameter-details">{Math.round(data.main.feels_like)}&deg;C</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Humidity</span>
                            <span className="parameter-details">{data.main.humidity}%</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Sunrise</span>
                            <span className="parameter-details">{new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</span>
                        </div>
                        <div className="parameter-row">
                            <span className="parameter-label">Sunset</span>
                            <span className="parameter-details">{new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}