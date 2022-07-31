const CustomInput = (props) => {
    const { className, placeholder, label, type, handlerFunction, handlerFuncArgs,errors } = props;
    console.log(errors.handlerFuncArgs?.message);
    return <div>
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            {...handlerFunction(handlerFuncArgs)}
        />
        <label className="label">
            <span className="label-text-alt text-red-600">
                {errors[`${handlerFuncArgs}`]?.message}
            </span>
        </label>
    </div>

}
export default CustomInput;