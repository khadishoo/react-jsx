import React, { useEffect, useState } from 'react';

export default function AralikBak8() {
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isGuest, setIsGuest] = useState(false);

    useEffect(() => {
        if (user) {
            // Если пользователь существует, сохраняем данные в localStorage
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    const handleRegister = (e) => {
        e.preventDefault();
        // После регистрации сохраняем пользователя в состояние и в localStorage
        setUser({ name, email, password });
        setName('');
        setEmail('');
        setPassword('');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser?.email === email && storedUser?.password === password) {
            // Если данные для логина корректны, устанавливаем пользователя
            setUser(storedUser);
        } else {
            alert("Бұндай аккаунт тіркелмеді, қайтадан қараңыз.");
        }
    };

    const handleLogout = () => {
        // Просто сбрасываем состояние user, но данные остаются в localStorage
        setUser(null);
        setIsGuest(false);
    };

    const handleDeleteAccount = () => {
        // Удаляем пользователя из состояния и localStorage
        setUser(null);
        localStorage.removeItem('user');
    };

    const handleGuestLogin = () => {
        setIsGuest(true);
        setUser({ name: 'Guest' });
    };

    return (
        <div>
            {!user && !isGuest ? (
                <div>
                    <h2>Тіркелу</h2>
                    <form onSubmit={handleRegister}>
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Аты" value={name} />
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" value={email} />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Пароль" value={password} />
                        <button type="submit">Тіркелу</button>
                    </form>

                    <h2>Кіру</h2>
                    <form onSubmit={handleLogin}>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" value={email} />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Пароль" value={password} />
                        <button type="submit">Кіру</button>
                    </form>
                    <button onClick={handleGuestLogin}>Қонақ болып кіру</button>
                </div>
            ) : (
                <div>
                    <p>Қош келдіңіз, {user.name}</p>
                    <button onClick={handleLogout}>Шығу</button>
                    <button onClick={handleDeleteAccount}>Аккаунтты жою</button>
                </div>
            )}
        </div>
    );
}
