import React from "react";
import ProjectSingleId from "@/components/mainPortfolioFix/ProjectSingleID";
interface IProjectSingleID {
    params: {
        id: number;
    };
}
export default function ProjectSingle ({ params: { id }}: IProjectSingleID) {
    return (
        <div>
               <ProjectSingleId idProject={id} />
        </div>
    );
};

