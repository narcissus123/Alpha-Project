import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

import { Button } from "../../common/button/Button";

import { parseISO } from "date-fns/fp";
import dateFormat from "dateformat";
import { useNavigate } from "react-router-dom";
import { editPanelInputData } from "../../../configs/data/editPanelInputData/EditPanelInputData";
import { Input } from "../../common/inputs/profileInput/ProfileInput";
import { CustomDatePicker } from "../../common/customDatePicker/CustomDatePicker";
import { getItem, setItem } from "../../../core/services/storage/Storage";

import { updateStudentInfo } from "../../../core/services/api/ManageStudent.api";
import { useAuth } from "../../../context/AuthContext";

const EditProfile = () => {
  /* Rendering spinner while we are waiting for backend response. */
  const [isLoading, setIsLoading] = useState(false);

  const history = useNavigate();
  let info = JSON.parse(getItem("user"));
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState,
    formState: { errors, dirtyFields, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      fullName: info.fullName,
      email: info.email,
      password: "123456789",
      birthDate: info.birthDate,
      phoneNumber: parseInt(info.phoneNumber),
      nationalId: info.nationalId,
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(info);
      reset({ birth: parseISO(info.birthDate) });
    }
  }, [formState, reset, isSubmitSuccessful]);

  const onSubmit = async (data) => {
    try {
      const birthDate = data.birth;

      const { birth, password, ...formatedData } = {
        ...data,
        birthDate,
        phoneNumber: String(data.phoneNumber),
        profile: "empty.png",
      };

      setIsLoading(true);
      const response = await updateStudentInfo(info._id, formatedData);

      if (response.status === 200) {
        setItem("user", JSON.stringify({ ...info, ...formatedData }));
        toast.success("Your information has been updated successfully!");
      } else {
        toast.error("Sorry. Something went wrong. Please try later.");
      }
    } catch (error) {
      toast.error(error);
      toast.error("Sorry. Something went wrong. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <Fragment>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        class=" mx-auto mt-1/7 flex max-w-md flex-wrap justify-between md:max-w-lg lg:max-w-3xl"
      >
        {editPanelInputData.map((data, index) => {
          return (
            <Fragment>
              {data.name === "birth" ? (
                <CustomDatePicker
                  index={index}
                  name={data.name}
                  control={control}
                  rules={data.register.schema}
                  frameClass={data.frameClass}
                  labelClass={data.labelClass}
                  children={data.children}
                  defaultValue={info[data.placeholder]}
                  placeholderText={dateFormat(
                    info[data.placeholder],
                    "mm/dd/yyyy"
                  )}
                  reset={reset}
                  textClass={data.textClass}
                />
              ) : (
                <Input
                  frameClass={data.frameClass}
                  inputClass={data.inputClass}
                  labelClass={data.labelClass}
                  index={index}
                  children={data.children}
                  placeholder={info[data.placeholder]}
                  type={data.type}
                  errors={errors}
                  name={data.name}
                  {...(register &&
                    register(data.register.name, {
                      ...data.register.schema,
                    }))}
                />
              )}
            </Fragment>
          );
        })}

        {/* Call to action. */}
        <div class="m-auto mt-8 w-1/4 lg:w-1/6">
          <Button
            type="submit"
            isLoading={isLoading}
            text="Edit"
            Class={`apearance-none w-full cursor-pointer rounded-full border-2 border-customYellow py-1  px-2 text-center text-base text-customYellow hover:border-customYellow 
              hover:bg-customYellow hover:text-white
               hover:outline-none focus:outline-none disabled:cursor-default disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-slate-200 
            `}
            disabled={Object.keys(dirtyFields).length === 0}
          />
        </div>
      </form>
    </Fragment>
  );
};

export { EditProfile };
