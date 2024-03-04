"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';

// Components
import ErrorModal from "../../components/ErrorModal";
import SuccessModal from "../../components/SuccessModal";
import { signUp } from "../../actions";

const Signup = () => {
    const [errModalStatus, seterrModalStatus] = useState(false);
    const [succModalStatus, setSuccModalStatus] = useState(false);
    const [modalMsg, setModalMsg] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    const handleSubmit = async (formData: FormData) => {
        const res = await signUp({ email: email, password: password, name: name });
        console
        if (res) {
            setModalMsg(res.message)
            if (res.status) {
                setSuccModalStatus(true)
            } else {
                seterrModalStatus(true)
            }
        }

    }

    return (
        <>
            <ErrorModal
                message={modalMsg}
                title="Could'nt sign you up!"
                isOpen={errModalStatus}
                url="/"
                onClose={() => seterrModalStatus(false)}
            />
            <SuccessModal
                message={modalMsg}
                title="User signed up."
                isOpen={succModalStatus}
                url="/signin"
                onClose={() => {
                    setSuccModalStatus(false)
                    router.push("/signin")
                }}
            />
            <main className="w-full max-w-md mx-auto p-6">
                <div className="mt-7 border border-orange-200 rounded-xl shadow-lg bg-orange-500">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-white">Sign Up</h1>
                            <p className="mt-2 text-sm text-white">
                                Already have an account?
                                <a className="text-white decoration-2 hover:underline font-medium" href="/signin">
                                    Sign In here
                                </a>
                            </p>
                        </div>

                        <div className="mt-5">
                            <div className="py-3 flex items-center text-xs text-white uppercase before:flex-[1_1_0%] before:border-t before:border-orange-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-orange-200 after:ms-6 dark:text-white">Or</div>
                            {/* Form */}
                            <form action={handleSubmit} >
                                <div className="grid gap-y-4">

                                    {/* Form Group */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm mb-2 dark:text-white">Username</label>
                                        <div className="relative">
                                            <input
                                                type="text" id="name" name="name"
                                                className="py-3 px-4 block w-full border-orange-200 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none "
                                                required aria-describedby="email-error"
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}
                                                value={name}
                                            />
                                            <div className="hidden absolute inset-y-0 end-0  items-center pointer-events-none pe-3">
                                                <svg className="h-5 w-5 text-white" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="hidden text-xs text-white mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                    </div>
                                    {/* End Form Group */}

                                    {/* Form Group */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                                        <div className="relative">
                                            <input
                                                type="email" id="email" name="email"
                                                className="py-3 px-4 block w-full border-orange-200 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none "
                                                required aria-describedby="email-error"
                                                onChange={(e) => {
                                                    setEmail(e.target.value)
                                                }}
                                                value={email}
                                            />
                                            <div className="hidden absolute inset-y-0 end-0  items-center pointer-events-none pe-3">
                                                <svg className="h-5 w-5 text-white" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="hidden text-xs text-white mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                    </div>
                                    {/* End Form Group */}

                                    {/* Form Group */}
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                                            <a className="text-sm text-white decoration-2 hover:underline font-medium" href="../examples/html/recover-account.html">Forgot password?</a>
                                        </div>

                                        <div className="relative">
                                            <input
                                                type="password" id="password" name="password" className="py-3 px-4 block w-full border-orange-200 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="password-error"
                                                onChange={(e) => {
                                                    setPassword(e.target.value)
                                                }}
                                                value={password}
                                            />
                                            <div className="hidden absolute inset-y-0 end-0  items-center pointer-events-none pe-3">
                                                <svg className="h-5 w-5 text-white" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <p className="hidden text-xs text-white mt-2" id="password-error">8+ characters required</p>
                                    </div>
                                    {/* End Form Group */}


                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-700 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">Sign Up</button>
                                </div>
                            </form>
                            {/* End Form */}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Signup;