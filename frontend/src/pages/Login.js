import React from "react";
import {authPOST} from "../api/auth";
import {useNavigate} from "react-router-dom";

export default function () {
    const navigate=useNavigate()
    const [auth, setAuth] = React.useState({
        'name':'',
        'user': '',
        'auth': false,
        'userExistence': false
    })
    const [fetch, setFetch] = React.useState(false)
    const handleButton = () => {
        let data = JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        })
        let result = authPOST(null, data)
        result.then((data) => {
            setAuth(data['data'])
            setFetch(true)
            if (data['data']['auth']===true){
                navigate('/suvr')
            }
        })
    }

    return (<div className="p-4">

            <div className={'mt-6'}>
                <div className={'flex justify-center'}><img src="/static/frontend/img/momiac.png" alt={'test'}/></div>
                <div className={'flex justify-center'}>
                    <div className={'mt-2 bg-gray-200 w-2/6 p-8 rounded shadow'}>
                        <div className={'flex m-2'}>
                            <p className={'mt-2 mr-10'}>Login :</p><input placeholder='email' id={'username'}/>
                        </div>
                        <div className={'flex m-2'}>
                            <p className={'mt-2 mr-2'}>Password :</p><input type={'password'} placeholder='password'
                                                                            id={'password'}/>
                        </div>

                        <div className={'flex justify-between mt-6'}>
                            <div className={'mt-2'}>
                                <a href={'/signup'}
                                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Регистрация</a>
                            </div>

                            <button type="button" onClick={handleButton}
                                    className="text-white justify-end bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Вход
                            </button>

                        </div>
                        {fetch && <div>
                            {auth['userExistence'] && !auth['auth'] &&
                                <p className={'text-red-600'}> Неправильный логин или пароль</p>
                            }
                            {!auth['userExistence'] && !auth['auth'] &&
                                <p className={'text-red-600'}> Пользователя не существует </p>
                            }
                        </div>}


                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}