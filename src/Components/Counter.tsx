import {Screen} from "./Screen";
import {Button} from "./Button";
import {ProgressBar} from "./ProgressBar";


type CounterPropsType = {
    reset: () => void
    increase: () => void
    result: number
    maxValue: number
    error: () => boolean
    isOnSettings: boolean
    btnDisabled: () => boolean
}

export const Counter = (props: CounterPropsType) => {

    const onClickIncHandler = () => props.increase()
    const onClickResetHandler = () => props.reset()

    const currentProgress = !props.isOnSettings ? props.result / props.maxValue * 100 : 0

    return (
        <div className="counter">
            <Screen
                isOnSettings={props.isOnSettings}
                error={props.error()}
                maxValue={props.maxValue}
                result={props.result}
            />

            <ProgressBar currentProgress={currentProgress}/>

            <div className="buttons-wrapper">
                <Button title="inc" callback={onClickIncHandler} btnDisabled={props.btnDisabled()}/>
                <Button title="reset" callback={onClickResetHandler} btnDisabled={props.isOnSettings}/>
            </div>
        </div>
    )
}