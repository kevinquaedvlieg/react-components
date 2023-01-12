import Modal from "../components/Modal";
import Button from "../components/Button";
import {useState} from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handeClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>;

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>;

    return (
        <div>
            <Button onClick={handeClick} primary>Open Modal</Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;