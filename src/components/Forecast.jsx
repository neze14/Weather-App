import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion"

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, key) => (
                    <AccordionItem key={key}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="forecast" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>
                                    <label className="day">{forecastDays[key]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}&deg;C | {Math.round(item.main.temp_max)}&deg;C</label>
                                    <i className="ri-arrow-down-s-line"></i>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daiy-details-grid-item">
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daiy-details-grid-item">
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure}hPa</label>
                                </div>
                                <div className="daiy-details-grid-item">
                                    <label>Clounds:</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
                <AccordionItem></AccordionItem>
            </Accordion >
        </>
    )
}

export default Forecast