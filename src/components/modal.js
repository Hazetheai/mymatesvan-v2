import React, { useState } from "react"
import AriaModal from "react-aria-modal"
import { Box, Button, Container, InteractiveIcon } from "./ui"
import * as styles from "./modal.css"
import { X } from "react-feather"
const Modal = ({ children, title, buttonText }) => {
  const [modalActive, setModalActive] = useState(false)

  const activateModal = () => {
    setModalActive(true)
  }

  const deactivateModal = () => {
    setModalActive(false)
  }

  const getApplicationNode = () => {
    return document.getElementById("portal")
  }

  return (
    <div>
      <div>
        <Button onClick={activateModal}>{buttonText || title || "Open"}</Button>
      </div>
      {modalActive ? (
        <AriaModal
          titleText={title || ""}
          onExit={deactivateModal}
          initialFocus="#base-modal-deactivate"
          getApplicationNode={getApplicationNode}
          underlayStyle={{ padding: "1.5em" }}
          verticallyCenter={true}
        >
          <Container id="base-modal" className={styles.baseModal}>
            <div className="modal-body">{children}</div>
            <footer className="modal-footer">
              <Box>
                <InteractiveIcon
                  id="base-modal-deactivate"
                  onClick={() => deactivateModal()}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                >
                  <X />
                </InteractiveIcon>
              </Box>
            </footer>
          </Container>
        </AriaModal>
      ) : null}
    </div>
  )
}

export default Modal
