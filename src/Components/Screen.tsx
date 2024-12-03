import React from "react";

type ScreenProps = {
    error: boolean
    result: number
    isOnSettings: boolean
    maxValue: number
}

export const Screen = (props: ScreenProps) => {
    let title: number | string = props.result

    props.isOnSettings && (title = `enter values and press "set"`)
    props.error && (title = "INCORRECT VALUE!")

    const classError = (props.error || props.result === props.maxValue) ? ' error-message' : ''

    return (

        <div className={`screen` + classError}>
            {title}
        </div>
    );
};