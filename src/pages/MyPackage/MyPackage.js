import React from 'react';
import { useParams } from 'react-router';

const MyPackage = () => {
    const { id } = useParams();
    return (
        <div>
            <h3>My Package {id}</h3>
        </div>
    );
};

export default MyPackage;