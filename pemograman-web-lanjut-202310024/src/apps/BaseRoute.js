import React from "react";
import { Routes, Route } from "react-router-dom";
import ChapterOne from "../modules/ChapterOne";
import { ChapterOne } from "../modules/chapter-1";
import { ChapterTwo } from "../modules/chapter-2";
import SignIn from "../modules/chapter-2/widgets/authentifications";

export default function BaseRoute() {
    return (
        <React.Suspense>
            <Routes>
                <Route index element={<ChapterTwo />} />
                <Route path="home" element={<Home />} />
                <Route path="auth" element={<SignIn />} />
            </Routes>
        </React.Suspense>
    );
}

const Home = () => {
    return <h3>Ini home looo…</h3>;
};