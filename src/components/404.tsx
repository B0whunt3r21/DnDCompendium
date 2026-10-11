import { Link } from "react-router-dom"

function ErrorPage () {
    return <div className="flex flex-col gap-2">
                <h1>404 Page not found..</h1>
                <Link to={'/'}>back to home</Link>
            </div>
}

export default ErrorPage

