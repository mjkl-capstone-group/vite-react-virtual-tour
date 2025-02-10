import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/components/home-page'; // Import HomePage
import PanoramaViewer from '../src/components/panorama-viewer'; // Import PanoramaViewer

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/panorama-viewer" element={<PanoramaViewer />} />
            </Routes>
        </Router>
    );
}

export default App;
