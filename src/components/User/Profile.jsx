import React, { useEffect, useState } from 'react'
import { auth, db } from '../../Firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';

function Profile() {
    const [userDetail, setUserDetail] = useState(null);

    const Navigate = useNavigate()


    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            // console.log(user);
            const docRef = doc(db, "User", user.uid);
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setUserDetail(docSnap.data())
                // console.log(docSnap.data());
            }
            else {
                console.log('user not logged in');
            }
        })
    }

    const hndleLogOut = async () => {
        try {
            await auth.signOut()
            Navigate('/login')
        } catch {
            console.log('error loggin out');
        }
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <div className='userprofile flex justify-center items-center h-[83vh]'>
            <div className='innerdiv w-[400px] shadow-lg bg-white p-5 rounded-md'>
                {
                    userDetail ? (
                        <>
                            <h1 className='text-3xl capitalize'> Welcome {userDetail.firstname}</h1>
                            <div className='content'>
                                <p className='text-2xl py-1 capitalize'>Email : {userDetail.email}</p>
                                <p className='text-2xl py-1 capitalize'>First Name : {userDetail.firstname}</p>
                                <p className='text-2xl py-1 capitalize'>Last Name : {userDetail.lastname}</p>
                                <button
                                    className='btn py-2 w-1/3 bg-red-700 text-white block mt-2 rounded-md'
                                    onClick={hndleLogOut}
                                >Log-Out</button>
                            </div>
                        </>
                    ) : (
                        <p className=' text-2xl'>loading...</p>
                    )
                }
            </div>
        </div>
    )
}

export default Profile