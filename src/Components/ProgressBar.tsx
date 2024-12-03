import React from "react";

type ProgressBarProps = {
    currentProgress: number
}

export const ProgressBar = ({currentProgress}: ProgressBarProps) => {
    return (
        <div className="progress-bar">
            <div className="current-progress" style={{ width: `${currentProgress}%` }}></div>
        </div>
    );
};