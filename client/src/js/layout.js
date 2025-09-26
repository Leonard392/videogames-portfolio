import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop.js";
import { BackendURL } from "./components/backendURL.js";

import { Home } from "./pages/home.js";
import { Creators } from "./pages/navbar/creators.js";
import { Platforms } from "./pages/navbar/platforms.js";
import { Stores } from "./pages/navbar/stores.js";
import injectContext from "./store/appContex.js";


//import genres view
import { Action } from "./pages/genres/action.js";
import { Adventure} from "./pages/genres/adventure.js"
import { Arcade } from "./pages/genres/arcade.js";
import { Casual } from "./pages/genres/casual.js";
import { Fighting } from "./pages/genres/fighting.js";
import { Puzzle } from "./pages/genres/puzzle.js";
import { Indie } from "./pages/genres/indie.js";
import { Racing } from "./pages/genres/racing.js";
import { Shooter } from "./pages/genres/shooter.js";
import { Simulation } from "./pages/genres/simulation.js";
import { Sports } from "./pages/genres/sports.js";
import { Strategy } from "./pages/genres/strategy.js";

//import details
import { GameDetails } from "./components/details/gameDetails.jsx"; 
import { CreatorDetails } from "./components/details/creatorDetails.jsx";
import { StoreDetails } from "./components/details/storeDetails.jsx";
import { PlatformDetails } from "./components/details/platformDetails.jsx";


import { Navbar } from "./components/navbar.jsx";
import { Footer } from "./components/footer.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar/>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Creators />} path="/creators" />
                        <Route element={<Platforms />} path="/platforms" />
                        <Route element={<Stores />} path="/stores" />
                        <Route element={<Action />} path="/genres/action" />
                        <Route element={<Adventure />} path="/genres/adventure" />
                        <Route element={<Arcade />} path="/genres/arcade" />
                        <Route element={<Casual />} path="/genres/casual" />
                        <Route element={<Fighting />} path="/genres/fighting" />
                        <Route element={<Indie />} path="/genres/indie" />
                        <Route element={<Puzzle />} path="/genres/puzzle" />
                        <Route element={<Racing />} path="/genres/racing" />
                        <Route element={<Shooter />} path="/genres/shooter" />
                        <Route element={<Simulation />} path="/genres/simulation" />
                        <Route element={<Sports />} path="/genres/sports" />
                        <Route element={<Strategy />} path="/genres/strategy" />
                        <Route element={<GameDetails />} path="/gameDetails/:id" />
                        <Route element={<CreatorDetails />} path="/creatorDetails/:id" />
                        <Route element={<StoreDetails />} path="/storeDetails/:id" />
                        <Route element={<PlatformDetails />} path="/platformDetails/:id" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);