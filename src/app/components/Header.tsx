import Link from "next/link"
export default function Header() {
    return (
        <div className="flex justify-between p-2 px-32 bg-[#043873]">
            <ul className="text-2xl font-bold text-white flex items-center">
                <li className="cursor-pointer">muhammadZain.</li>
            </ul>
            <ul className="flex gap-10 text-lg  text-white justify-center items-center">
                <Link href="/"><li>Home</li></Link>
                <Link href="/services"><li>Services</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/contactus"><li>Contact Us</li></Link>
            </ul>
            <ul className="flex gap-2 text-lg text-black items-center">
            <button className="bg-[#4F9CF9] hover:bg-[#FFE492] px-4 py-1 rounded-lg ease-in duration-200"><Link href="/login"><li>Login</li></Link></button>
            <button className="bg-[#4F9CF9] hover:bg-[#FFE492] px-4 py-1 rounded-lg ease-in duration-200"><Link href="/signup"><li>Signup</li></Link></button>
            </ul>
        </div>
    )
}