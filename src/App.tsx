import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import UserDetails from "./pages/UserDetails/UserDetails";
import UsersListPage from "./pages/UsersListPage/UsersListPage";
import UsersContextProvider from "./context/UsersContextProvider";

function App() {
    return (
        <>
            <GlobalStyles />
            <UsersContextProvider>
                <BrowserRouter basename="/kode-intership-2025-react">
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/users" replace />}
                        />
                        <Route path="/users" element={<UsersListPage />} />
                        <Route path="/users/:id" element={<UserDetails />} />
                    </Routes>
                </BrowserRouter>
            </UsersContextProvider>
        </>
    );
}

export default App;
