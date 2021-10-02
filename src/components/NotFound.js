// Set up the imports for the React Components
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        Error 404! - <Link to ="/">Go to Home</Link>
    </div>
);

export default NotFoundPage;