import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000/api';

const ActivityForm = () => {
    const navigate = useNavigate();
    const [activity, setActivity] = useState({
        title: '',
        activity_type: 'examen',
        course: '',
        deadline: '',
    });
    const [subtasks, setSubtasks] = useState([
        { name: '', target_date: '', estimated_hours: 1 },
    ]);
    const [message, setMessage] = useState(null);

    const handleActivityChange = (e) => {
        setActivity({ ...activity, [e.target.name]: e.target.value });
    };

    const handleSubtaskChange = (index, e) => {
        const newSubtasks = [...subtasks];
        newSubtasks[index][e.target.name] = e.target.value;
        setSubtasks(newSubtasks);
    };

    const addSubtask = () => {
        setSubtasks([...subtasks, { name: '', target_date: '', estimated_hours: 1 }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // 1. Create activity
            const activityRes = await axios.post(`${API_BASE}/activities/`, activity);
            const activityId = activityRes.data.id;

            // 2. Create subtasks
            for (const sub of subtasks) {
                if (sub.name) {
                    await axios.post(`${API_BASE}/subtasks/`, {
                        ...sub,
                        activity: activityId,
                    });
                }
            }

            setMessage({ type: 'success', text: 'Actividad y plan creados con éxito' });
            setTimeout(() => navigate('/hoy'), 2000);
        } catch (err) {
            setMessage({ type: 'error', text: 'Error al crear la actividad. Verifica los campos.' });
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Crear Actividad Evaluativa</h2>
                <form onSubmit={handleSubmit}>
                    <label>Título</label>
                    <input className="input" name="title" value={activity.title} onChange={handleActivityChange} required />

                    <label>Tipo</label>
                    <select className="input" name="activity_type" value={activity.activity_type} onChange={handleActivityChange}>
                        <option value="examen">Examen</option>
                        <option value="quiz">Quiz</option>
                        <option value="taller">Taller</option>
                        <option value="proyecto">Proyecto</option>
                        <option value="otro">Otro</option>
                    </select>

                    <label>Curso</label>
                    <input className="input" name="course" value={activity.course} onChange={handleActivityChange} required />

                    <label>Fecha Límite (Entrega/Examen)</label>
                    <input className="input" type="datetime-local" name="deadline" value={activity.deadline} onChange={handleActivityChange} />

                    <hr style={{ margin: '1.5rem 0' }} />
                    <h3>Plan de Trabajo (Subtareas)</h3>

                    {subtasks.map((sub, index) => (
                        <div key={index} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
                            <label>Subtarea</label>
                            <input className="input" name="name" value={sub.name} onChange={(e) => handleSubtaskChange(index, e)} required />

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label>Fecha Objetivo</label>
                                    <input className="input" type="date" name="target_date" value={sub.target_date} onChange={(e) => handleSubtaskChange(index, e)} required />
                                </div>
                                <div>
                                    <label>Horas Estimadas</label>
                                    <input className="input" type="number" step="0.5" name="estimated_hours" value={sub.estimated_hours} onChange={(e) => handleSubtaskChange(index, e)} required />
                                </div>
                            </div>
                        </div>
                    ))}

                    <button type="button" className="btn" onClick={addSubtask} style={{ marginBottom: '1rem' }}>+ Agregar Subtarea</button>

                    <div style={{ marginTop: '1rem' }}>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Guardar Plan Inicial</button>
                    </div>
                </form>

                {message && (
                    <div style={{ marginTop: '1rem', padding: '1rem', borderRadius: '8px', backgroundColor: message.type === 'success' ? '#dcfce7' : '#fee2e2', color: message.type === 'success' ? '#166534' : '#991b1b' }}>
                        {message.text}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ActivityForm;
