"use client"

import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import useLoginModal from "@/app/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import useRegisterModal from "../../hooks/useRegisterModal";
import Button from "../button";
import Heading from "../heading";
import Input from "../inputs/input";
import Modal from "./modal";

function RegisterModal() {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
        try {
            await axios.post('/api/register', data);
            toast.success("Account created successfully!");
            registerModal.onClose();
            loginModal.onOpen();
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    }

    const toggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [loginModal, registerModal])


    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome to AirBnB"
                subtitle="Create an account!"
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button outline label="Continue with Google" icon={FcGoogle} onClick={() => signIn('google')} />
            <Button outline label="Continue with GitHub" icon={AiFillGithub} onClick={() => signIn('github')} />
            <div className=" justify-center text-neutral-500 text-center mt-4 font-light flex flex-row items-center gap-2">
                <div>
                    Already have an account?
                </div>
                <div
                    onClick={toggle}
                    className="text-neutral-800 cursor-pointer hover:underline">
                    Log in
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default RegisterModal;