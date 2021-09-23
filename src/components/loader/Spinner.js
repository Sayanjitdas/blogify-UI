export default function Spinner({text=null,size='sm'}) {
    return (
        <div>
            {text ? <span className="m-2">{text}</span> : null}
            <span className={`spinner-border spinner-border-${size} text-light`}></span>
        </div>
    )
}
