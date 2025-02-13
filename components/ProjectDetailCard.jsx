"use client";
import React from 'react';
import { useState } from 'react';

const ProjectDetailCard = ({ project }) => {
    const [selectedImage, setSelectedImage] = useState(project.img[0]);
    
    return (
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            <div>
                {/* Image Gallery */}
                <div>
                    <img
                        src={selectedImage}
                        alt={project.name}
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="flex gap-3 mt-4">
                        {project.img.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Thumbnail"
                                className={`w-20 h-20 cursor-pointer rounded-md object-cover border-2 ${selectedImage === img ? "border-[#FFCC00]" : "border-transparent"}`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <p><strong>Location:</strong> {project.location}</p>
                <p><strong>Type:</strong> {project.type}</p>
                <p><strong>Year:</strong> {project.year}</p>
                <p><strong>Length:</strong> {project.length}</p>
                <p><strong>Client:</strong> {project.client}</p>
                <p><strong>Scope:</strong> {project.scope}</p>
            </div>
        </div>
    )
}

export default ProjectDetailCard;
