import ApiCalendar from "react-google-calendar-api";

const Calendar = () => {

    const config = {
        clientId: "",
        apiKey: "",
        scope: "https://www.googleapis.com/auth/calendar",
        discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
        ],
    };
    
    const apiCalendar = new ApiCalendar(config);

    return(
        <>
        </>
    )
}