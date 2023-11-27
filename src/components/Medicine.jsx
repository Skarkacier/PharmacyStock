import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SingleMedicine from './SingleMedicine'

function Medicine() {
    const [medicines, setMedicine] = useState([])
    const [newMedicine, setNewMedicine] = useState({
        medicineName: '',
        influenceGroup: '',
        stock: 0,
        company: '',
        price: '',
        featureId: 0
    });
    const fetchMedicine = async () => {
        const response = await axios.get('http://localhost:5170/Medicine')
        setMedicine(response.data)
    }

    const addMedicine = async () => {
        await axios.post('http://localhost:5170/Medicine', newMedicine);
        // Yeni ilaç ekledikten sonra listeyi güncelle
        fetchMedicine();
        setNewMedicine({
            medicineName: '',
            influenceGroup: '',
            stock: 0,
            company: '',
            price: '',
            featureId: 0,
        });
    };

    const deleteMedicine = async (medicineId) => {
        await axios.delete(`http://localhost:5170/Medicine/${medicineId}`);
        // İlaçı sildikten sonra listeyi güncelle
        fetchMedicine();
    };

    useEffect(() => {
        fetchMedicine()
    }, [])

    return (
        <div className='medicine-list'>
            <div className='task-create'>
                <form className='task-form'>
                <h2 className='task-h2'>Yeni İlaç Ekle!</h2>
                <label className='task-label'>İlaç İsmi:</label>
                <input
                    type="text"
                    className='task-input'
                    value={newMedicine.medicineName}
                    onChange={(e) => setNewMedicine({ ...newMedicine, medicineName: e.target.value })}
                />
                <label className='task-label'>İlaç Grubu:</label>
                <input
                    type="text"
                    className='task-input'
                    value={newMedicine.influenceGroup}
                    onChange={(e) => setNewMedicine({ ...newMedicine, influenceGroup: e.target.value })}
                />
                <label className='task-label'>Stock Bilgisi:</label>
                <input
                    type="number"
                    className='task-input'
                    value={Number(newMedicine.stock)}
                    onChange={(e) => setNewMedicine({ ...newMedicine, stock: e.target.value })}
                />
                <label className='task-label'>Şirket Bilgisi:</label>
                <input
                    type="text"
                    className='task-input'
                    value={newMedicine.company}
                    onChange={(e) => setNewMedicine({ ...newMedicine, company: e.target.value })}
                />
                <label className='task-label'>Fiyat:</label>
                <input
                    type="text"
                    className='task-input'
                    value={newMedicine.price}
                    onChange={(e) => setNewMedicine({ ...newMedicine, price: e.target.value })}
                />
                <label className='task-label'>featureId:</label>
                <input
                    type="number"
                    className='task-input'
                    value={newMedicine.featureId}
                    onChange={(e) => setNewMedicine({ ...newMedicine, featureId: e.target.value })}
                />
                <button className='task-button' onClick={addMedicine}>Oluştur</button>
                </form>
            </div>
            <ul>
                {medicines.map((medicine, idx) => (
                    <li key={idx}>
                        <SingleMedicine 
                        medicine={medicine} 
                        onDelete={deleteMedicine}/>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Medicine