import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

import { DropBox } from "../../common/dropBox/DropBox";

import { useDragAndDrop } from "../../../hooks/useDragAndDrop";

import { updateStudentInfo } from "../../../core/services/api/ManageStudent.api";
import { getItem, setItem } from "../../../core/services/storage/Storage";

const UploadImageModal = ({ setOpenImgModal }) => {
  // Saving image from the file system.
  const [onDrop, image] = useDragAndDrop();

  // Saving uploaded image url.
  const [imageUrl, setImageUrl] = useState("");

  const userInfo = JSON.parse(getItem("user"));

  // Updating user profile image.
  const handleUpload = async () => {
    try {
      // Checking if user choose an image from file system.
      if (image) {
        // Sending request to imgbb to upload the user image.
        const formData = new FormData();
        formData.append("image", image);
        formData.append("key", "a2b1e31f3bb10cadc30a2cb7340c95c6");

        const imgbbResponse = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData
        );

        // If image uploaded successfully, we send the request to the backend to update user information.
        if (imgbbResponse.status === 200) {
          setImageUrl(() => imgbbResponse.data.data.url);

          let newUserInfo = {
            fullName: JSON.parse(getItem("user")).fullName,
            email: JSON.parse(getItem("user")).email,
            phoneNumber: JSON.parse(getItem("user")).phoneNumber,
            birthDate: JSON.parse(getItem("user")).birthDate,
            nationalId: JSON.parse(getItem("user")).nationalId,
            profile: imgbbResponse.data.data.url,
          };

          const response = await updateStudentInfo(userInfo._id, newUserInfo);

          if (response.status === 200) {
            setItem("user", JSON.stringify({ ...userInfo, ...newUserInfo }));
            toast.success("Your profile image has been updated successfully!");
          }
        } else {
          toast.error("Sorry. Something went wrong.");
        }
        // If user presses upload button before choosing an image, we show this message.
      } else {
        toast.error("Please choose image first.");
      }
    } catch (error) {
      toast.error(error);
      toast.error("Sorry. Something went wrong. Please try later.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div class="absolute z-10 h-[43rem] w-[75.9rem] bg-customBlack">
        <div class="mx-auto mt-20 h-auto w-1/2 rounded-lg border bg-white">
          {/* Drag and drop */}
          <DropBox onDrop={onDrop} imageUrl={imageUrl} />
          {/* Profile image */}
          {imageUrl ? (
            <>
              <div class="my-8 mx-auto w-1/2 rounded-md">
                <img src={imageUrl} class="mx-auto h-32" />
              </div>
              <div class=" border-green-600 bg-black">
                <Link
                  to={imageUrl}
                  class="block h-10 text-center text-xs text-white hover:text-white"
                >
                  {imageUrl}
                </Link>
              </div>
            </>
          ) : (
            <>
              <div class="my-8 mx-auto w-1/2 rounded-md">
                <img src={userInfo.profile} class="mx-auto h-32" />
              </div>
              <div class=" border-green-600 bg-black">
                <Link
                  to={userInfo.profile}
                  class="block h-10 text-center text-xs text-white hover:text-white"
                >
                  {userInfo.profile}
                </Link>
              </div>
            </>
          )}

          <footer class="flex flex-row justify-end gap-3 border-t px-4 py-2">
            <button
              class="rounded-md border bg-gray-400 px-3 py-2 text-sm"
              onClick={() => setOpenImgModal(false)}
            >
              Cancel
            </button>
            <button
              class="rounded-md border bg-green-400 px-3 py-2 text-sm"
              onClick={() => handleUpload()}
            >
              Upload
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export { UploadImageModal };
