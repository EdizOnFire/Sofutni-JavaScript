import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { GameProvider } from './contexts/GameContext';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from "./components/common/PrivateRoute";
import CreateGame from './components/CreateGame/CreateGame';
import Logout from './components/Logout/Logout';
import GameDetails from "./components/GameDetails/GameDetails";
import GameOwner from "./components/common/GameOwner";
import EditGame from './components/EditGame/EditGame';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <AuthProvider>
            <div id="box">
                <Header />

                {/* Main Content */}
                <GameProvider>
                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/create" element={(
                                <PrivateRoute>
                                    <CreateGame />
                                </PrivateRoute>)} />
                            <Route path="/logout" element={(
                                <PrivateRoute>
                                    <Logout />
                                </PrivateRoute>)} />
                            <Route path="/catalog/:gameId" element={<GameDetails />} />
                            <Route element={<GameOwner />}>
                                <Route path="/games/:gameId/edit" element={<EditGame />} />
                            </Route>
                        </Routes>
                    </main>
                </GameProvider>

                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
