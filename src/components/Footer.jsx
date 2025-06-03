
function Footer() {
    return (
        <>
            <footer className="text-light pt-4">
                {/* <div className="container text-center">
                    <p className="mb-2">© {new Date().getFullYear()} Diving in Sri Lanka. All rights reserved.</p>
                </div> */}
                <div className="bg-secondary text-center py-2">
                    <p className="mb-2">© {new Date().getFullYear()} Diving in Sri Lanka. All rights reserved.</p>
                    <small>Website developed by <a href="https://yourcompany.com" className="text-white text-decoration-underline" target="_blank" rel="noopener noreferrer">WebMind Innovations</a></small>
                </div>
            </footer>

        </>
    )
}

export default Footer;