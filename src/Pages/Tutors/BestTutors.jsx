import React, { useEffect, useState } from 'react';
import BestTutorCard from './BestTutorCard';

const BestTutors = () => {
    
    const [tutors,setTutors] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/tutors')
        .then(res => res.json())
        .then(data=>setTutors(data))
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    tutors.map(tutor => <BestTutorCard key={tutor._id} tutor={tutor}></BestTutorCard>)
                }
            </div>
        </div>
    );
};

export default BestTutors;