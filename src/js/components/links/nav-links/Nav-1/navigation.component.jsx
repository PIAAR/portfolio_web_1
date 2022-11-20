import './navigation.styles.scss';

const Nav = () => {
    return (
        <div id="Navigation-links" className="navigation-container">
            <nav className="navigation-links">
                <ul>
                    <li><a href="#default">Home</a></li>
                    <li><a href="#follow">Follow us</a></li>
                    <li><a href="#family">Family</a></li>
                    <li><a href="#friends">Friends</a></li>
                    <li><a href="#vacations">Vacations</a></li>
                    <li><a href="#products">Products</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;