import React, { useState, useEffect } from 'react';
import QuestionList from '../components/QuestionList/QuestionList';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';
import { fetchQuestions } from '../apis/stackOverflowAPI';
import './Home.css';

const Home = () => {
    const [questions, setQuestions] = useState([]);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [sortType, setSortType] = useState('interesting');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    useEffect(() => {
        const loadQuestions = async () => {
            const data = await fetchQuestions(sortType);
            setQuestions(data);
            setFilteredQuestions(data);
            setCurrentPage(1);
        };

        loadQuestions();
    }, [sortType]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        filterQuestions(query, sortType);
    };

    const filterQuestions = (query, filter) => {
        let filtered = questions;

        if (query.trim() === '') {
            setFilteredQuestions(questions);
            return;
        }

        filtered = filtered.filter((question) =>
            question.title.toLowerCase().includes(query.toLowerCase())
        );

        if (filter === 'hot') {
            filtered = filtered.filter((question) => question.score > 5);
        } else if (filter === 'week') {
            filtered = filtered.filter(
                (question) =>
                    new Date() - new Date(question.creation_date * 1000) <
                    7 * 24 * 60 * 60 * 1000
            );
        } else if (filter === 'month') {
            filtered = filtered.filter(
                (question) =>
                    new Date() - new Date(question.creation_date * 1000) <
                    30 * 24 * 60 * 60 * 1000
            );
        }

        setFilteredQuestions(filtered);
    };

    const totalPages = Math.ceil(filteredQuestions.length / pageSize);

    const currentQuestions = filteredQuestions.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="home-page">
            <Navbar onSearch={handleSearch} />
            <div className="home-body">
                <Sidebar />
                <div className="main-content">
                    <h2 className="top-question">Top Questions</h2>
                    <div className="filter-buttons">
                        {['interesting', 'bountied', 'hot', 'week', 'month'].map((type) => (
                            <button
                                key={type}
                                onClick={() => {
                                    setSortType(type);
                                    filterQuestions(searchQuery, type);
                                }}
                                className={sortType === type ? 'active' : ''}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </button>
                        ))}
                        <button className="ask-question-button">ASK QUESTION</button>
                    </div>

                    <QuestionList questions={currentQuestions} />

                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={currentPage === index + 1 ? 'active-circle' : ''}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="blog-section">
                    <Blog />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
