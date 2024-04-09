import React from "react"

const Modal: React.FC<ModalProps> = ({ children, render }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            {render(openModal)}
            {isOpen && (
                <div style={{ position: "absolute", zIndex: 100, backgroundColor: "#fff", border: "2px solid black" }}>
                    <div className="modal-content">
                        <button onClick={closeModal} style={{ padding: 20 }}>CloseM= Modal</button>
                    </div>
                </div>
            )}
        </>
    )

}