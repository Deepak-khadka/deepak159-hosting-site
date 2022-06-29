import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [message, setMessage] = useState("");

    const sendNotification = () => {
        if (email && fullName && message) {

            const request = new XMLHttpRequest();
            request.open("POST", "https://discord.com/api/webhooks/991384867701018684/5Fbfq0E0xO1odBamr7U_TIhYEADMi9BloEnGUnhW5MnyyiqyPkjifgkDKCxI7s5xCbRg");

            request.setRequestHeader('Content-type', 'application/json');

            const params = {
                username: fullName + " (" + email +")",
                avatar_url: "",
                content: message
            }

            request.send(JSON.stringify(params));

            setFullName("");
            setEmail("");
            setMessage("");
            toast.success("Thank you for your valuable message 🥰")

        } else {
                toast.error("Please fill valid info")
        }
    }
    return (
        <div className="bg-gray-800 text-gray-100 px-8 py-12">
            <div
                className="max-w-screen-xl mt-10 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                        <div className="text-gray-700 mt-8">
                            Hate forms ? Send us an <span className="underline">email</span> instead.
                        </div>
                    </div>

                </div>
                <div className="">
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input
                            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input
                            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea
                            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className="mt-8">
                        <button onClick={sendNotification}
                                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ContactUs;