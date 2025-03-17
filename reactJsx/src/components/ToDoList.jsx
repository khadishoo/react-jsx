import React, {useEffect, useState} from 'react'

export default function ToDoList(){
    // const [count, setCount] = useState(0)

    // const [users, setUsers] = useState(['Asadbek', 'batirkhan', 'islam'])
    
    // function addUser(){
    //     setUsers([...users, "yeldos"])
    // }
    // console.log(users);

    // const [text, setText] = useState("");

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [
            { taskName: "Гул суару", completed: true },
            { taskName: "Күнделікті үй тапсырмасын орындау", completed: false }
        ];
    });
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    
    function handleSubmit(e) {
        e.preventDefault();
        if (task.trim() == '') return;
        setTasks([...tasks, { taskName: task, completed: false }]);
        setTask('');
    }
    
    function toggleTask(index) {
        setTasks(tasks.map((t, i) => 
            i == index ? { ...t, completed: !t.completed } : t
        ));
    }
    
    const handleRemove = (id) => {
        setTasks(tasks.filter((_, index) => index != id));
    };
    
    const filteredTasks = tasks.filter(t => {
        if (filter == 'all'){
            return true
        } else if (filter == 'complete'){
            return t.completed
        } else if (filter == 'incomplete'){
            return !t.completed
        }
    }); 

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={task} type="text" onChange={(e) => setTask(e.target.value)} />
                <button type="submit">Қосу</button>
            </form>
            <div className='filter-box'>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('complete')}>Complete</button>
                <button onClick={() => setFilter('incomplete')}>Incomplete</button>
            </div>
            <ul>
                {filteredTasks.map((tapsyrma, index) => (
                    <li key={index} className='tapsirma-li'>
                        <div>{tapsyrma.taskName}</div>
                        <div className="btn-box">
                            <button 
                                onClick={() => toggleTask(index)} 
                                style={{ color: tapsyrma.completed ? "green" : "red" }}>
                                {tapsyrma.completed ? "✔️" : "❌"}
                            </button>
                            <button onClick={() => handleRemove(index)}>🗑</button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="text jaz..." />
            <p>Terilgen text: {text}</p> */}

            {/* <button onClick={addUser}>add user</button>
            <ul>
                {users.map((user, index)=>{
                    return <li key={index}>{user}</li>
                })}
            </ul> */}

            {/* <div>
                {count}
            </div>
            <button onClick={()=>setCount(count + 1)}>+</button>
            <button onClick={()=>setCount(count - 1)}>-</button> */}
        </div>

    )
}