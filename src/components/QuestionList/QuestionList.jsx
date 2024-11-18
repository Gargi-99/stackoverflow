import React from 'react';
import './QuestionList.css'; // Add styles for better presentation

const QuestionList = ({ questions }) => {
    return (
        <div className="question-list">
            {questions.length === 0 ? (
                <p>No questions found</p>
            ) : (
                questions.map((question) => (
                    <div key={question.question_id} className="question-card">
                        <div className="question-header">
                            <a href={question.link} target="_blank" rel="noopener noreferrer" className="question-title">
                                <h3>{question.title}</h3>
                            </a>
                            <div className="question-tags">
                                {question.tags.map((tag) => (
                                    <span key={tag} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="question-stats">
                            <span><i className="fa-solid fa-chevron-up"></i>&nbsp;&nbsp;{question.score}</span> &nbsp;&nbsp;
                            <span><i className="fa-regular fa-message"></i>&nbsp;&nbsp;{question.answer_count}</span>&nbsp;&nbsp;
                            <span><i className="fa-regular fa-eye"></i>&nbsp;&nbsp;{question.view_count}</span>&nbsp;&nbsp;
                            <span className="question-asked">
                                Asked {formatTimeAgo(question.creation_date)} :{' '}
                                <a
                                    href={question.owner.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="user-link"
                                >
                                    {question.owner.display_name}
                                </a>
                            </span>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

// Helper function to format the time since the question was created
const formatTimeAgo = (timestamp) => {
    const seconds = Math.floor(Date.now() / 1000 - timestamp);
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
};

export default QuestionList;
