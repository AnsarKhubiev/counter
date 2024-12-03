
type ButtonProps = {
    title: string
    callback: () => void
    btnDisabled?: boolean
}

export const Button = (props: ButtonProps) => {
    return (
        <button
            className="btn"
            onClick={props.callback}
            disabled={props.btnDisabled}
        >
            {props.title}
        </button>
    );
};