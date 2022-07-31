const FooterElement = ({ actionName, actionText }) => {
    return <div className="pt-5 pb-12 text-center">
        <p>
            {actionText}
            <p className="font-semibold underline ml-1">{actionName}</p>
        </p>
    </div>

}
export default FooterElement;