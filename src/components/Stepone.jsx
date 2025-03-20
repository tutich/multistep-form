import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const stepOneSchema = z.object({
  name: z.string().min(2, "Name must be atleast 2 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
});

const Stepone = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepOneSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    onNext(data);
  };

  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={handleSubmit(onSubmit)} action="submit" className="flex flex-col justify-between lg:gap-28">
        <div>
          <div className="py-2 space-y-2">
            <h1 className="font-bold text-xl text-marineBlue">Personal info</h1>
            <p className="font-normal text-sm text-coolGray ">
              Please provide your name, email address, and phone number.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="py-1 text-marineBlue text-base font-medium"
              >
                Name
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="e.g. Stephen King"
                className="border border-coolGray w-full px-3 py-1 rounded-md"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p> }
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="py-1 text-marineBlue text-base font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="e.g. stephenking@lorem.com"
                className="border border-coolGray w-full px-3 py-1 rounded-md"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p> }
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="py-1 text-marineBlue text-base font-medium"
              >
                Phone Number
              </label>
              <input
                type="text"
                {...register("phone")}
                placeholder="e.g. +1 234 567 890"
                className="border border-coolGray w-full px-3 py-1 rounded-md"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p> }
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="text-right text-white text-sm p-2 rounded-md h-7 w-20 flex items-center justify-center bg-marineBlue"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default Stepone;
