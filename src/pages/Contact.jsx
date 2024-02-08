import React, { useState, useRef, Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import Fox from '../models/Fox'
import Loader from '../components/Loader'
const Contact = () => {
    const formRef = useRef(null)
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [currentAnimation, setCurrentAnimation] = useState('idle')


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleFocus = () => setCurrentAnimation('walk')
    const handleBlur = () => setCurrentAnimation('idle')
    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentAnimation('hit')
        alert('Створіть сервер для обробки форми!')
        setForm({ name: '', email: '', message: '' });
        // надсилання мейлу можна створити на сервері
        //         npm install nodemailer
        //         Далі використайте наступний код у вашому серверному файлі (наприклад, server.js або app.js):

        // const express = require('express');
        // const nodemailer = require('nodemailer');
        // const bodyParser = require('body-parser');

        // const app = express();
        // const port = 3000; // Встановіть відповідний порт

        // // Налаштування парсера для обробки POST-запитів
        // app.use(bodyParser.urlencoded({ extended: true }));
        // app.use(bodyParser.json());

        // // Налаштування транспортера Nodemailer
        // const transporter = nodemailer.createTransport({
        //   service: 'gmail',
        //   auth: {
        //     user: 'your-email@gmail.com', // Встановіть вашу електронну пошту
        //     pass: 'your-password' // Встановіть ваш пароль
        //   }
        // });

        // // Ручка для обробки POST-запитів для відправлення електронної пошти
        // app.post('/send-email', (req, res) => {
        //   const { name, email, message } = req.body;

        //   const mailOptions = {
        //     from: 'your-email@gmail.com', // Ваша електронна пошта
        //     to: 'recipient-email@example.com', // Електронна пошта отримувача
        //     subject: 'New Message from your Website',
        //     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        //   };

        //   transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //       return res.status(500).send(error.toString());
        //     }
        //     return res.status(200).send('Email sent: ' + info.response);
        //   });
        // });

        // // Сервер слухає вказаний порт
        // app.listen(port, () => {
        //   console.log(`Server is running on port ${port}`);
        // });





        // e.preventDefault()
        // setIsLoading(true)
        // emailjs.send(
        //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        //     {
        //         from_name: form.name,
        //         to_name: 'Yaroslav',
        //         from_email: form.email,
        //         to_email: 'ilikayaroslav@gmail.com',
        //         message: form.message
        //     },
        //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY_ID

        // ).then(() => {
        //     setIsLoading(false)
        //     setForm({ name: '', email: '', message: '' })
        // }).catch((error) => {
        //     setIsLoading(false)
        setCurrentAnimation('idle')
        //     console.log(error)
        // })
    }
    return (
        <section className='relaative flex lg:flex-row flex-col max-container'>
            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='head-text'>Get in touch</h1>
                <form
                    className='w-full flex flex-col gap-7 mt-14'
                    onSubmit={handleSubmit}>
                    <label className='text-black-500 font-semibold'
                    >
                        Name
                        <input type="text"
                            name='name'
                            className='input'
                            placeholder='John'
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Email
                        <input type="email"
                            name='email'
                            className='input'
                            placeholder='John@gmail.com'
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Your message
                        <textarea
                            name='message'
                            rows={4}
                            className='textarea'
                            placeholder='Let me know how i can help you!'
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <button
                        type='submit'
                        disabled={isLoading}
                        className='btn'
                        onFocus={handleFocus}
                        onBlur={handleBlur}>
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas camera={{
                    position: [0, 0, 5],
                    fov: 75,
                    near: 0.1,
                    far: 1000
                }}>
                    <directionalLight intensity={2.5}
                        position={[0, 0, 1]} />
                    <ambientLight intensity={1} />
                    <Suspense fallback={<Loader />}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0.5, 0.35, 0]}
                            rotation={[12.6, -0.6, 0]}
                            scale={[0.5, 0.5, 0.5]} />
                    </Suspense>
                </Canvas>

            </div>
        </section>
    )
}

export default Contact