'use client';
import {useForm} from "react-hook-form";
import directus from "@/lib/directus";
import {createItem} from "@directus/sdk";
import {publicUserToken} from "@/helpers/directus";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors, isValid, isSubmitting, isDirty},
    } = useForm({
        mode: 'onChange'
    });

    const normalizePhoneNumber = (phoneNumber) => {
        return phoneNumber.replace(/[^0-9+]/g, '');
    };

    const phonePattern = /^(\+7|8)\d{10}$/; // Simplified after normalization

    const onSubmit = async (e) => {
        console.log('submit', e);
        try {
            await directus.request(
                createItem('user_data', {
                    name: e.name,
                    email: e.email,
                    phone: e.phone,
                    question: e.question
                }, {access_token: publicUserToken})
            );
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1
                            gap-y-4
                            md:gap-y-6">
                <input
                    {...register('phone', {
                        required: true,
                        onChange: (e) => {
                            const normalizedValue = normalizePhoneNumber(e.target.value);
                            setValue('phone', normalizedValue); // Update the form value
                        },
                        pattern: {
                            value: phonePattern,
                            message: 'Invalid phone number',
                        },
                    })
                    }
                    className="block p-5 bg-[rgba(10,_10,_10,_0.04)] rounded-3xl placeholder:text-placeholder-black text-[16px] leading-[150%] text-main-black xl:text-[18px]"
                    placeholder="Телефон*" type="text" name="phone"/>
                <input
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                    className="block p-5 bg-[rgba(10,_10,_10,_0.04)] rounded-3xl placeholder:text-placeholder-black text-[16px] leading-[150%] text-main-black xl:text-[18px]"
                    placeholder="Email*" type="text" name="email"/>
                <input
                    {...register('name')}
                    className="block p-5 bg-[rgba(10,_10,_10,_0.04)] rounded-3xl placeholder:text-placeholder-black text-[16px] leading-[150%] text-main-black xl:text-[18px]"
                    placeholder="Ваше имя" type="text" name="name"/>
                <textarea
                    {...register('question')}
                    maxLength={512}
                    className="resize-none h-[120px] block p-5 bg-[rgba(10,_10,_10,_0.04)] rounded-3xl placeholder:text-placeholder-black text-[16px] leading-[150%] xl:text-[18px] text-main-black"
                    placeholder="Расскажите о вашем проекте" name="question" rows="4"></textarea>
            </div>

            <div className="mt-8 md:mt-10">
                <button
                    type="submit"
                    disabled={!isValid || isSubmitting || !isDirty}
                    className="rounded-[32px] w-full text-center bg-background-black block font-[500] py-4 disabled:cursor-not-allowed disabled:bg-[rgba(10,_10,_10,_0.5)] text-[16px] leading-6 text-white">Отправить
                </button>
                <p className="mt-4 text-[12px] leading-[125%] text-placeholder-black">Нажимая кнопку «Отправить», вы
                    даете согласие на <span className="text-secondary-black">обработку персональных данных</span></p>
            </div>
        </form>
    )
}
