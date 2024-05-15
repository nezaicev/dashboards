import React from "react";
import {useNavigate} from "react-router-dom";
import signup from "../api/signup";

export default function () {
    const [message, setMessage] = React.useState(null)
    const navigate = useNavigate()
    const handleButton = () => {
        if (document.getElementById('password').value === document.getElementById('password2').value) {
            let data = JSON.stringify({
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
                lastName: document.getElementById('lastName').value,
                firstName: document.getElementById('firstName').value
            })
            let result = signup({}, data)
            result.then((data) => {
                setMessage(data['data']['message'])
                if (data['data']['message'] === 'ok') {
                    navigate('/login')
                }
            })


        } else {
            setMessage('Пароли не совпадают')
        }

    }


    return (<>
            <div className="p-12 ">
                <div className={'mt-6'}>
                    <div className={'flex justify-center'}><img src="/static/frontend/img/momiac.png" alt={'test'}/>
                    </div>
                    <div className={'flex justify-center'}>
                        <div className={'mt-2 bg-gray-200 w-2/6 p-6 rounded shadow'}>
                            <p className={'text-center mb-8 text-xl'}> Регистрация </p>
                            <div className={'flex m-2 mt-4'}>
                                <p className={'mt-2 w-24'}>Фамилия:</p><input placeholder='Иванов' id={'lastName'}/>
                            </div>
                            <div className={'flex  m-2'}>
                                <p className={'mt-2 w-24'}>Имя:</p><input placeholder='Иван' id={'firstName'}/>
                            </div>
                            <div className={'flex m-2'}>
                                <p className={'mt-2 w-24'}>email :</p><input placeholder='email@mail.ru'
                                                                             id={'username'}/>
                            </div>
                            <div className={'flex m-2'}>
                                <p className={'mt-2 w-24'}>Пароль :</p><input type={'password'} placeholder='Password'
                                                                              id={'password'}/>
                            </div>
                            <div className={'flex m-2'}>
                                <p className={'mt-2 w-24'}>Ещё раз :</p><input type={'password'}
                                                                               placeholder='Confirm password'
                                                                               id={'password2'}/>
                            </div>

                            <div className={'flex justify-between mt-6'}>

                                <div className={'mt-2'}>
                                    <a href={'/login'}
                                       className="font-medium  text-blue-600 dark:text-blue-500 hover:underline">Вход</a>
                                </div>

                                <button type="button" onClick={handleButton}
                                        className="text-white justify-end bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Отправить
                                </button>


                            </div>


                            {message !== 'ok' && <div>

                                <p className={'text-red-600'}>{message}</p>

                            </div>}


                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}