
function Footer() {
    return (
        <footer>
            <div className="container copyright" if="container p">
                <p>&copy; {new Date().getFullYear()} Mathe-Website. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    );
}

export default Footer