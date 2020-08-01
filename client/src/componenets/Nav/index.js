import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Google Books Search</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/search">Search</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/saved">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
