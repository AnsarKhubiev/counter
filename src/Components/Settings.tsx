import React, {ChangeEvent} from "react";
import {Button} from "./Button";

type CounterLimitsProps = {
    applyValues: () => void
    getMaxValue: (value: number) => void
    getStartValue: (value: number) => void
    maxValue: number
    startValue: number
    isOnSettings: boolean
    error: () => boolean
}

export const Settings = (props: CounterLimitsProps) => {

    const getMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.getMaxValue(parseInt(e.currentTarget.value))
    }

    const getStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.getStartValue(parseInt(e.currentTarget.value))
    }

    const onClickApplyHandler = () => props.applyValues()

    return (
        <div className="counter">
            <div className="inputs-block">
                <div>
                    <span>max value:</span>
                    <input
                        value={props.maxValue}
                        onChange={getMaxValueHandler}
                        type={"number"}
                        className={props.error() ? "error-btn" : ""}
                    ></input>
                </div>
                <div>
                    <span>start value:</span>
                    <input
                        value={props.startValue}
                        onChange={getStartValueHandler} type={"number"}
                        className={props.error() ? "error-btn" : ""}
                    ></input>

                </div>
            </div>
            <div className="buttons-wrapper">
                <Button
                    title={"set"}
                    callback={onClickApplyHandler}
                    btnDisabled={!props.isOnSettings || props.error()}/>
            </div>

        </div>

    );
}