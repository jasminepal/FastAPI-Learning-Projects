import Cards from './components/Cards'
import { User } from 'lucide-react'


const App = () => {

    const jobs = [
        {
            id: 1,
            logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/google.svg",
            company: "Google",
            freshness: "2 days ago",
            role: "Frontend Developer",
            tag1: "Full-time",
            tag2: "Mid Level",
            salary: "$70/hr",
            place: "Bangalore, India",
        },
        {
            id: 2,
            logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazon.svg",
            company: "Amazon",
            freshness: "5 hours ago",
            role: "UI/UX Designer",
            tag1: "Full-time",
            tag2: "Senior Level",
            salary: "$90/hr",
            place: "Hyderabad, India",
        },
        {
            id: 3,
            logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoft.svg",
            company: "Microsoft",
            freshness: "1 day ago",
            role: "Backend Developer",
            tag1: "Remote",
            tag2: "Junior Level",
            salary: "$65/hr",
            place: "Noida, India",
        },
        {
            id: 4,
            logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/netflix.svg",
            company: "Netflix",
            freshness: "3 days ago",
            role: "Product Designer",
            tag1: "Contract",
            tag2: "Senior Level",
            salary: "$110/hr",
            place: "Mumbai, India",
        },
        {
            id: 5,
            logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/meta.svg",
            company: "Meta",
            freshness: "8 hours ago",
            role: "React Developer",
            tag1: "Full-time",
            tag2: "Mid Level",
            salary: "$85/hr",
            place: "Remote",
        },
        {
            id: 6,
            logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/adobe.svg",
            company: "Adobe",
            freshness: "Today",
            role: "Software Engineer",
            tag1: "Hybrid",
            tag2: "Senior Level",
            salary: "$95/hr",
            place: "Pune, India",
        },
        {
            id: 7,
            logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/spotify.svg",
            company: "Spotify",
            freshness: "4 days ago",
            role: "Mobile App Developer",
            tag1: "Internship",
            tag2: "Entry Level",
            salary: "$30/hr",
            place: "Remote",
        },
        {
            id: 8,
            logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apple.svg",
            company: "Apple",
            freshness: "6 hours ago",
            role: "iOS Developer",
            tag1: "Full-time",
            tag2: "Senior Level",
            salary: "$120/hr",
            place: "Bangalore, India",
        },
        {
            id: 9,
            logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tesla.svg",
            company: "Tesla",
            freshness: "2 weeks ago",
            role: "Data Engineer",
            tag1: "Remote",
            tag2: "Mid Level",
            salary: "$100/hr",
            place: "Delhi, India",
        },
        {
            id: 10,
            logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/airbnb.svg",
            company: "Airbnb",
            freshness: "Yesterday",
            role: "Full Stack Developer",
            tag1: "Part-time",
            tag2: "Junior Level",
            salary: "$60/hr",
            place: "Chennai, India",
        },
    ];

    return (
        <div className="parent">
            {jobs.map(function(elem, idx){
                return <div key={idx}>
                    <Cards company= {elem.company} logo = {elem.logo} freshness = {elem.freshness} role = {elem.role} tag1 = {elem.tag1} tag2 = {elem.tag2} salary = {elem.salary} place = {elem.place} />
                </div>
            })}
            

        </div>
    )
}

export default App