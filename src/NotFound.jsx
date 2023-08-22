import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-green-600 min-h-screen">
      <h1 className="text-5xl">404</h1>
      <p>Page not found</p>
      <Link href="/">
        <a className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-600 hover:border-green-700 rounded">
          Back to Home
        </a>
      </Link>
    </div>
  )
}
