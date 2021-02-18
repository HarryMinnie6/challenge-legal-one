import react from "react"
import ReactDOM from 'react-dom'
import LogDisplay_HomePage from '../components/LogDisplay_HomePage'

it("'Home page' renders with no errors", () => {
    const div = document.createElement('div')
    ReactDOM.render(<LogDisplay_HomePage />, div)
})