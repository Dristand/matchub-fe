const API_BASE_URL =
    (typeof process.env.NEXT_PUBLIC_API_URL === "undefined" ? "http://localhost:3000/" : `${process.env.NEXT_PUBLIC_API_URL}/`)

export default API_BASE_URL;