import React from "react";
import { Modal, Button } from "flowbite-react";

const AllMessagesModal = ({ show, onClose, contactMessages }) => {
  return (
    <Modal show={show} size="4xl" onClose={onClose}>
      <Modal.Header>All Contact Messages</Modal.Header>
      <Modal.Body>
        {contactMessages.length > 0 ? (
          <div className="space-y-4">
            {contactMessages.map((message) => (
              <div key={message._id} className="border-b pb-4">
                <p className="text-lg font-semibold">
                  {message.name} ({message.email})
                </p>
                <p className="text-gray-700 dark:text-gray-400">{message.message}</p>
                {message.inquiringAbout && (
                  <p className="text-blue-500 dark:text-blue-400">
                    Inquiring about: {message.inquiringAbout}
                  </p>
                )}
                <p className="text-sm text-gray-500">
                  Status: {message.responded ? "✅ Responded" : "❌ Not Responded"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-700 dark:text-gray-400">No messages found.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AllMessagesModal;
