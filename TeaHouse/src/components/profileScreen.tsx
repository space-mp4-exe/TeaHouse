import {auth} from '../firebase/firebase'
import { useNavigate } from 'react-router-dom';
import './test.css'

const ProfileCard = () =>{
    const navigate = useNavigate();
    const user = auth.currentUser;

    const handleLogut = async() => {
        await auth.signOut();
        navigate('/login')
    };


    return (

        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            
           
            <div className="w-[320px] h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden">
                <div className="h-32 bg-emerald-700 w-full flex items-center justify-center">
                   <div className="w-20 h-20 bg-white rounded-full border-4 border-emerald-900 flex items-center justify-center text-2xl">
                   </div>
                </div>


                <div className="flex-grow p-8 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-black text-gray-800 tracking-tight">
                        User Profile
                    </h2>
                    <div className="w-12 h-1 bg-emerald-500 my-4 rounded-full"></div>
                    <p className="text-gray-500 font-medium">
                        {user?.email || "Guest Traveler"}
                    </p>
                    <p className="text-sm text-gray-400 mt-6 italic">
                        "Welcome to the teahouse."
                    </p>
                </div>

            </div>
        </div>
    );

};
export default ProfileCard;