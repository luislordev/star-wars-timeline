import { Navigate, Route, Routes } from 'react-router-dom'
import { BooksPage, ComicsPage, DetailsPage, HomePage, TimelinePage } from '../pages'



export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}