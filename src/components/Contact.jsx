import { SpinningText } from "../components/magicui/spinning-text.jsx";
import {Phone, Mail } from "lucide-react";


const Contact = () => {
    return (
        <>
            {/*<SpinningText reverse className="text-4xl" radius={6}>
                learn more • earn more • grow more •
            </SpinningText>*/}
            <div className={"lg:ml-48 lg:mr-48 sm:ml-10 sm:mr-10 w-auto"}>
                <div>Marius Lassl</div>
                <Phone> Tel </Phone>
                <div>Tel</div>
                <div>Email</div>
            </div>
        </>
    )
}

export default Contact;