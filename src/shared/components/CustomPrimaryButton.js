export const CustomPrimaryButton = (props) => {
    const { additionalClassName, onClick,label } = props;
    const onClickHandler = () => {
        onClick();
    }
    return <button onSubmit={onClickHandler} className={`btn ${additionalClassName} btn-block mt-5`}>
       {label}
    </button>

}