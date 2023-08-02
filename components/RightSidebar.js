import React, { useState, useEffect } from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch, BiEdit } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import FriendRequests from "./FriendRequests";
import Contact from "./Contact";
import ChatWindow from "./ChatWindow";

const generateFakeData = () => {
  const fakeData = [];
  const dogNames = [
    "Buddy",
    "Max",
    "Charlie",
    "Cooper",
    "Milo",
    "Bailey",
    "Bear",
    "Duke",
    "Rocky",
    "Tucker",
  ];
  for (let i = 0; i < 10; i++) {
    const name = dogNames[i % dogNames.length];
    const img = `https://source.unsplash.com/featured/?dog&random=${i}`;
    fakeData.push({ name, img });
  }
  return fakeData;
};

const RightSidebar = ({ handlePostClick }) => {
  const [contactList, setContactList] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChatWindow = (contact) => {
    setCurrentContact(contact)
    setIsOpen(true);
  };
  const handleCloseChatWindow = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fakeData = generateFakeData();
    setContactList(fakeData);
  }, []);

  return (
    <>
      <div className="fixed hidden xl:block top-16 right-0 w-[300px] mt-6 px-4 h-screen overflow-y-scroll">
        <div>
          <div className="flex justify-between">
            <h3 className="font-semibold text-gray-600 text-[18px]">
              Friend requests
            </h3>
            <p className="text-primary cursor-pointer">See All</p>
          </div>

          <div className="mt-4">
            <FriendRequests />
            <div className="h-[2px] bg-gray-300 my-5"></div>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600 text-[18px]">
                Contact
              </h1>
              <div className="flex gap-4">
                <RiVideoAddFill className="text-gray-600" />
                <BiSearch />
                <BsThreeDots />
              </div>
            </div>

            <div>
              {contactList.map((contact, index) => (
                <Contact
                  key={index}
                  data={contact}
                  handleOpenChatWindow={()=>handleOpenChatWindow(contact)}
                />
              ))}
            </div>

            <div
              className="bg-gray-300 h-[44px] w-[44px] 
          grid place-items-center text-[26px] rounded-full
          cursor-pointer hover:bg-gray-200 
          fixed right-0 bottom-0 mr-8 mb-8"
              onClick={handlePostClick}
            >
              <BiEdit />
            </div>
          </div>
        </div>
      </div>
      <ChatWindow isOpen={isOpen} onClose={handleCloseChatWindow} contact={currentContact}/>
    </>
  );
};

export default RightSidebar;
