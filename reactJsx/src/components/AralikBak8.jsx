import React, { useEffect, useState } from 'react'

export default function AralikBak8() {
const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isGuest, setIsGuest] = useState(false);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    const handleRegister = (e) => {
        e.preventDefault();
        setUser({ name, email, password });
        setName('');
        setEmail('');
        setPassword('');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser?.email === email && storedUser?.password === password) {
            setUser(storedUser);
        } else {
            alert("Бұндай аккаунт тіркелмеді, қайтадан қараңыз.");
        }
    };

    const handleLogout = () => {
        setUser(null);
        setIsGuest(false);
    };

    const handleDeleteAccount = () => {
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
                    <h2>тыркелу</h2>
                    <form onSubmit={handleRegister}>
                        <input onChange={(e) => setName(e.target.value)}  type="text" placeholder="Аты" value={name}/>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" value={email}/>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Пароль" value={password}/>
                        <button type="submit">тыркелу</button>
                    </form>
                    <h2>кыру</h2>
                    <form onSubmit={handleLogin}>
                        <input onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Email" value={email}/>
                        <input onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Пароль" value={password}/>
                        <button type="submit">кыру</button>
                    </form>
                    <button onClick={handleGuestLogin}>конак болып кыру</button>
                </div>
            ) : (
                <div>
                    <h1>Қош келдіңіз, {user.name}</h1>
                    <button onClick={handleLogout}>Шығу</button>
                    <button onClick={handleDeleteAccount}>жою</button>
                </div>
            )}
    </div>
  )
}
