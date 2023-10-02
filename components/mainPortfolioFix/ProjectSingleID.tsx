'use client'
import {FC, useCallback, useEffect, useState} from 'react';
import {FiChevronLeft, FiChevronRight, FiTag, FiX} from 'react-icons/fi';
import Image from 'next/image';
import { projectsData } from '@/data/dataMainPortfolioEdit/projectsData';

interface IProjectSingleIdProps {
    idProject: number;
}

const ProjectSingleId: FC<IProjectSingleIdProps> = ({ idProject }) => {
    const project = projectsData.find((project) => project.id === Number(idProject));
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    const goToNext = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (project?.ProjectImages.length || 1));
    }, [project?.ProjectImages.length]);

    const goToPrev = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + (project?.ProjectImages.length || 1)) % (project?.ProjectImages.length || 1));
    }, [project?.ProjectImages.length]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (modalOpen) {
            // Close modal on Escape key press
            if (e.key === 'Escape') {
                closeModal();
            }
            // Navigate images with arrow keys
            if (e.key === 'ArrowRight') {
                goToNext();
            }
            if (e.key === 'ArrowLeft') {
                goToPrev();
            }
        }
    }, [modalOpen, closeModal, goToNext, goToPrev]);

    const handleClickOutside = useCallback((e: MouseEvent) => {
        const modal = document.getElementById('modal'); // Replace with your actual modal ID
        if (modal && !modal.contains(e.target as Node)) {
            closeModal();
        }
    }, [closeModal]);

    useEffect(() => {
        // Attach event listeners when modal is open
        if (modalOpen) {
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('click', handleClickOutside);
        }

        // Detach event listeners when modal is closed
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('click', handleClickOutside);
        };
    }, [modalOpen, handleKeyDown, handleClickOutside]);

    return (
        <div className="container mx-auto">
            <div key={project?.id}>
                <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                    {project?.title}
                </p>
                <div className="flex">
                    <div className="flex items-center mr-10">
                        {/*<FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />*/}
                        {/*<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">*/}
                        {/*    {project.ProjectInfo.ProjectDetails}*/}
                        {/*</span>*/}
                    </div>
                    <div className="flex items-center">
                        <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
                        <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                                {project?.ProjectHeader.tags}
                            </span>
                    </div>

                </div>
                {/* Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                    {project?.ProjectImages.map((image, index) => (
                        <div className="mb-10 sm:mb-0" key={image.id} onClick={() => openModal(index)}>
                            <Image
                                src={image.img}
                                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                                alt={image.title}
                                layout="responsive"
                                width={100}
                                height={90}
                            />
                        </div>
                    ))}
                </div>
                {modalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-40">

                        <div className="absolute z-20 max-w-screen-lg">
                            <button
                                className="absolute top-4 right-4 text-white bg-black px-4 py-2 rounded-md"
                                onClick={closeModal}
                            >
                                <FiX className="w-4 h-4" />
                            </button>
                            <div className="  rounded-xl overflow-hidden aspect-w-4 aspect-h-3 cursor-pointer shadow-lg sm:shadow-none">
                                <Image
                                    src={project?.ProjectImages[currentImageIndex].img || ''}
                                    className="object-cover w-full h-full"
                                    alt={project?.ProjectImages[currentImageIndex].title || ''}
                                    layout="responsive"
                                    placeholder="empty"
                                    width={800}
                                    height={600}
                                />
                            </div>

                        </div>
                        <button
                            className="absolute z-50 top-1/2 left-4 transform -translate-y-1/2 text-white bg-black px-4 py-2 rounded-md flex items-center"
                            onClick={goToPrev}
                        >
                            <FiChevronLeft className="w-4 h-4" /> {/* Use the left arrow icon */}
                        </button>

                        <button
                            className="absolute z-50 top-1/2 right-4 transform -translate-y-1/2 text-white bg-black px-4 py-2 rounded-md flex items-center"
                            onClick={goToNext}
                        >
                            <FiChevronRight className="w-4 h-4" /> {/* Use the right arrow icon */}
                        </button>
                    </div>
                )}

            </div>
            <div className="block sm:flex gap-0 sm:gap-10 mt-14">
                <div className="w-full sm:w-1/3 text-left">
                    {/* Single project client details */}
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
                            {project?.ProjectInfo.ClientHeading}
                        </p>
                        <ul className="leading-loose">
                            {project?.ProjectInfo.CompanyInfo.map(
                                (info) => {
                                    return (
                                        <li
                                            className="font-general-regular text-ternary-dark dark:text-ternary-light"
                                            key={info.id}
                                        >
                                            <span>{info.title}: </span>
                                            <a

                                                className={
                                                    info.title === 'Website' ||
                                                    info.title === 'Phone'
                                                        ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                                                        : ''
                                                }
                                                aria-label="Project Website and Phone"
                                            >
                                                {info.details}
                                            </a>
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </div>
                    {/* Single project objectives */}
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {project?.ProjectInfo.ObjectivesHeading}
                        </p>
                        <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                            {project?.ProjectInfo.ObjectivesDetails}
                        </p>
                    </div>

                    {/* Single project technologies */}
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {project?.ProjectInfo.Technologies[0].title}
                        </p>
                        <p className=" font-general-regular text-primary-dark dark:text-ternary-light">
                            {project?.ProjectInfo.Technologies[0].techs.join(
                                '  '
                            )}
                        </p>
                    </div>
                </div>
                {/*  Single project right section details */}
                <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                    <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                        {project?.ProjectInfo.ProjectDetailsHeading}
                    </p>
                    {project?.ProjectInfo.ProjectDetails.map((details) => {
                        return (
                            <p
                                key={details.id}
                                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                            >
                                {details.details}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectSingleId;
