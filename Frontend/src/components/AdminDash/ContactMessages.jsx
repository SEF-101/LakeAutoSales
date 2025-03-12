import React, { useState, useEffect } from "react";
import { Card, Button } from "flowbite-react";
import AllMessagesModal from "./AllMessagesModal"; // Import the modal component

const CONTACTS_API_URL = "http://localhost:5000/api/contacts";

const ContactMessages = () => {
  const [contactMessages, setContactMessages] = useState([]);
  const [showAllMessages, setShowAllMessages] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all contact messages
  const fetchContacts = async () => {
    try {
      const response = await fetch(CONTACTS_API_URL);
      if (!response.ok) throw new Error("Failed to fetch contact messages.");

      const data = await response.json();
      setContactMessages(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Generic update function
  const updateContact = async (id, updatedFields) => {
    try {
      const response = await fetch(`${CONTACTS_API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFields),
      });

      if (!response.ok) throw new Error("Failed to update contact.");

      const updatedContact = await response.json();

      // Update UI immediately
      setContactMessages((prevMessages) =>
        prevMessages.map((msg) => (msg._id === id ? updatedContact : msg))
      );
    } catch (err) {
      console.error("Error updating message:", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Filter only unresponded messages
  const unrespondedMessages = contactMessages.filter((msg) => !msg.responded);

  return (
    <>
      <Card>
        <div className="flex justify-between items-center">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Inbox
          </h5>
          {/* Open modal to show all messages */}
          <Button gradientMonochrome="info" onClick={() => setShowAllMessages(true)}>
            All Messages
          </Button>
        </div>

        {error ? (
          <p className="text-red-500">{error}</p>
        ) : unrespondedMessages.length > 0 ? (
          <div className="space-y-4">
            {unrespondedMessages.map((message) => (
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

                {/* Buttons Section */}
                <div className="mt-3 flex gap-4">
                  {/* Email Button */}
                  <Button
                    gradientMonochrome="info"
                    onClick={() =>
                      window.location.href = `mailto:${message.email}?subject=Regarding your inquiry about ${message.inquiringAbout}&body=Hi ${message.name},`
                    }
                  >
                    Email Them
                  </Button>

                  {/* Responded Button */}
                  <Button
                    color="green"
                    onClick={() => updateContact(message._id, { responded: true })}
                    disabled={message.responded}
                  >
                    {message.responded ? "Responded" : "Mark as Responded"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-700 dark:text-gray-400">No new messages.</p>
        )}
      </Card>

      {/* All Messages Modal Component */}
      <AllMessagesModal
        show={showAllMessages}
        onClose={() => setShowAllMessages(false)}
        contactMessages={contactMessages}
      />
    </>
  );
};

export default ContactMessages;
