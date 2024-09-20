type Props = {
    image: string;
    closeModal: () => void;
}

export const Modal = ({image, closeModal}: Props) => {
    return(
        <>
            <div onClick={closeModal} className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/90">
                <img className="max-w-screen max-h-screen" src={`/assets/${image}`} alt="" />
            </div>
            <div onClick={closeModal} className="fixed top-2 right-5 cursor-pointer text-white text-3xl">X</div>
        </>
    )
}